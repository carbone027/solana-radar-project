import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { exec } from 'child_process';
import { XMLFilterHelper } from '../helpers/XMLFilterHelper';
import { XMLToJsonHelper } from '../helpers/XMLToJsonHelper';
import { TagValidationResult } from '../helpers/TagValidationResult';
import { TagData } from '../helpers/TagValidationResult';
import fs from 'fs';
import path from 'path';
import multer from 'multer';
import { formatJson } from '../helpers/FormatJsonHelper'; // Importa o helper de formatação

const upload = multer({ dest: 'uploads/' }); // Configura o diretório de uploads

@Resolver()
export class XMLProcessingResolver {
  private outputDir: string;

  constructor() {
    this.outputDir = path.join(__dirname, '../../model'); // Atualiza para salvar na pasta 'model'

    // Verifica se a pasta 'model' existe, se não, cria
    if (!fs.existsSync(this.outputDir)) {
      fs.mkdirSync(this.outputDir);
    }
  }

  @Query(() => String)
  helloWorld(): string {
    return 'Hello World!';
  }

  @Mutation(() => TagValidationResult)
async filterAndConvertXml(
  @Arg('features', () => [String]) features: string[],
  @Arg('file', () => String) file: string
): Promise<TagValidationResult> {
  const tempFilePath = path.join(__dirname, `../../uploads/${file}`);
  const result = await this.processXmlFile(tempFilePath, features);

  // Salvar o JSON processado como 'database.json' na pasta 'model'
  const jsonFilePath = path.join(this.outputDir, `database.json`); // Usa sempre o nome 'database.json'
  fs.writeFileSync(jsonFilePath, JSON.stringify(result.data, null, 2));

  // Executar o build_model.py após salvar o JSON
  await this.runBuildModelScript(); // Chama a função que executa o script

  fs.unlinkSync(tempFilePath); // Remove o arquivo após o processamento

  return result;
}

// Nova função para executar o build_model.py
private runBuildModelScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    exec('python3 ' + path.join(this.outputDir, 'build_model.py'), (error, stdout, stderr) => {
      if (error) {
        console.error(`Erro ao executar build_model.py: ${error.message}`);
        return reject(error);
      }
      if (stderr) {
        console.error(`Erro no stderr: ${stderr}`);
        return reject(new Error(stderr));
      }
      console.log(`Saída do build_model.py: ${stdout}`);
      resolve();
    });
  });
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

      // Formata o JSON usando o helper `formatJson`
      const formattedJson = formatJson(
        Object.entries(jsonResult).map(([tag, value]) => ({
          tag,
          value: (value as string).toString(),
        }))
      );

      console.log(`JSON formatado: ${JSON.stringify(formattedJson)}`);

      const tagDataArray: TagData[] = formattedJson.map(({ tag, value }) => ({
        tag,
        value: Array.isArray(value) ? value.join(', ') : value.toString(), // Aqui ele retorna para string se necessário
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
