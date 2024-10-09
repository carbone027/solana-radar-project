import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class TagData {
  @Field()
  tag: string = '';

  @Field()
  value: string = '';
}

@ObjectType()
export class TagValidationResult {
  @Field()
  success: boolean = false;

  @Field()
  message: string = '';

  @Field(() => [TagData], { nullable: true }) // Permite que 'data' seja um array de 'TagData'
  data: TagData[] | null = []; // Altere para aceitar um array ou nulo
}
