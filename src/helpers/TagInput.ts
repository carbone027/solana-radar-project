import { InputType, Field } from 'type-graphql';

@InputType()
export class TagInput {
  @Field(() => String)
  xmlContent: string = ''; // O conteúdo do XML como string

  @Field(() => [String])
  tags: string[] = []; // A lista de tags (features) que você quer filtrar
}