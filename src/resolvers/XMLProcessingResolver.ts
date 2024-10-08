import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { XMLFilterHelper } from '../helpers/XMLFilterHelper';
import { XMLToJsonHelper } from '../helpers/XMLToJsonHelper';
import { TagValidationResult } from '../helpers/TagValidationResult';
import { TagInput } from '../helpers/TagInput';
import { TagData } from '../helpers/TagValidationResult';

@Resolver()
export class XMLProcessingResolver {
  @Query(() => String)
  helloWorld(): string {
    return "Hello World!";
  }

  @Mutation(() => TagValidationResult)
  async filterAndConvertXml(
    @Arg('input') input: TagInput // Ajustamos o argumento para ser 'input' diretamente
  ): Promise<TagValidationResult> {
    const { xmlContent, tags: features } = input; // Renomeamos 'tags' para 'features'
  
    try {
      // Filtra o XML com base nas features
      const filteredXml = await XMLFilterHelper.filterByFeatures(xmlContent, features);
  
      // Converte o XML filtrado para um objeto JavaScript
      const jsonResult = await XMLToJsonHelper.convertXmlToJson(filteredXml);
  
      // Mapeia o resultado JSON para o formato TagData[]
      const tagDataArray: TagData[] = Object.entries(jsonResult).map(([tag, value]) => ({
        tag,
        value: (value as string | number).toString(), // Aqui fazemos a asserção de tipo
      }));
  
      return {
        success: true,
        message: 'XML processado e convertido para JSON com sucesso',
        data: tagDataArray, // Retorna o array de TagData
      };
    } catch (error) {
      return {
        success: false,
        message: (error instanceof Error) ? error.message : 'Erro desconhecido',
        data: null,
      };
    }
  }
  
  
}
