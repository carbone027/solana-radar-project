import { Builder, parseStringPromise } from 'xml2js';

export class XMLToJsonHelper {
  static async convertXmlToJson(xmlContent: string): Promise<any> {
    // Primeiro, converte o XML filtrado de volta para um objeto JavaScript
    const xmlObject = await parseStringPromise(xmlContent, { explicitArray: false });

    // Se você precisa retornar apenas o objeto que representa a raiz
    return xmlObject.root; // Retorne a parte que você precisa, dependendo da sua lógica
  }
}
