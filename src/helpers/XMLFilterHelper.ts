import { parseStringPromise, Builder } from 'xml2js';

export class XMLFilterHelper {
  static async filterByFeatures(xmlContent: string, features: string[]): Promise<string> {
    const xmlObject = await parseStringPromise(xmlContent, { explicitArray: false });

    const filteredRoot: { [key: string]: any } = { ...xmlObject.root };

    // Filtra as tags de acordo com as features
    for (const feature of features) {
      if (filteredRoot[feature] === undefined) {
        throw new Error(`Tag "${feature}" não encontrada no XML.`);
      }
    }

    // Cria um novo objeto para armazenar apenas as tags filtradas
    const filteredTags: { [key: string]: any } = {};
    for (const feature of features) {
      filteredTags[feature] = filteredRoot[feature];
    }

    // Atualiza a raiz com as tags filtradas
    const resultObject = { root: filteredTags };

    // Converte de volta para string XML
    const builder = new Builder();
    const filteredXml = builder.buildObject(resultObject);

    return filteredXml; // Retorna o XML filtrado como string
  }
}
