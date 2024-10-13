import { InputType, Field } from 'type-graphql';
import CryptoJS from 'crypto-js';

@InputType()
export class TagInput {
  @Field(() => String)
  xmlContent: string = ''; // O conteúdo do XML como string

  @Field(() => [String])
  private _encryptedTags: string[] = [];

  private static encryptionKey = process.env.ENCRYPTION_KEY;

  set tags(tags: string[]) {
    this._encryptedTags = tags.map(tag =>
      CryptoJS.AES.encrypt(tag, TagInput.encryptionKey).toString()
    );
  }

  get tags(): string[] {
    return this._encryptedTags.map(encryptedTag =>
      CryptoJS.AES.decrypt(encryptedTag, TagInput.encryptionKey).toString(CryptoJS.enc.Utf8)
    );
  }
}
