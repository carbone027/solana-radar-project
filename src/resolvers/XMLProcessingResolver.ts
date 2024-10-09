import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { XMLFilterHelper } from '../helpers/XMLFilterHelper';
import { XMLToJsonHelper } from '../helpers/XMLToJsonHelper';
import { TagValidationResult } from '../helpers/TagValidationResult';
import { TagData } from '../helpers/TagValidationResult';
import fs from 'fs';
import path from 'path';
import multer from 'multer';

const upload = multer({ dest: 'uploads/' }); // Configura o diretório de uploads

@Resolver()
export class XMLProcessingResolver {
  private outputDir: string;

  constructor() {
      this.outputDir = path.join(__dirname, '../../output');

      // Verifica se a pasta 'output' existe, se não, cria
      if (!fs.existsSync(this.outputDir)) {
          fs.mkdirSync(this.outputDir);
      }
  }
    @Query(() => String)
    helloWorld(): string {
        return "Hello World!";
    }

    @Mutation(() => TagValidationResult)
    async filterAndConvertXml(
        @Arg('features', () => [String]) features: string[], 
        @Arg('file', () => String) file: string
    ): Promise<TagValidationResult> {
        const tempFilePath = path.join(__dirname, `../../uploads/${file}`);
        const result = await this.processXmlFile(tempFilePath, features);
        
        // Salvar o JSON processado
        const jsonFilePath = path.join(this.outputDir, `${file}.json`); // Usar this.outputDir
        fs.writeFileSync(jsonFilePath, JSON.stringify(result.data, null, 2));

        fs.unlinkSync(tempFilePath); // Remove o arquivo após o processamento
        
        return result;
    }
        

    async processXmlFile(filePath: string, features: string[]): Promise<TagValidationResult> {
      console.log(`Lendo o arquivo: ${filePath}`);
      const xmlContent = fs.readFileSync(filePath, 'utf-8');
  
      try {
          console.log(`Filtrando XML com features: ${features}`);
          const filteredXml = await XMLFilterHelper.filterByFeatures(xmlContent, features);
          console.log(`XML filtrado: ${filteredXml}`);
  
          const jsonResult = await XMLToJsonHelper.convertXmlToJson(filteredXml);
          console.log(`Resultado JSON: ${JSON.stringify(jsonResult)}`);
  
          const tagDataArray: TagData[] = Object.entries(jsonResult).map(([tag, value]) => ({
              tag,
              value: (value as string | number).toString(),
          }));
  
          console.log(`Array de TagData: ${JSON.stringify(tagDataArray)}`);
  
          return {
              success: true,
              message: 'XML processado e convertido para JSON com sucesso',
              data: tagDataArray,
          };
      } catch (error) {
          console.error('Erro ao processar XML:', error);
          return {
              success: false,
              message: error instanceof Error ? error.message : 'Erro desconhecido',
              data: null,
          };
      }
  }
  
}
