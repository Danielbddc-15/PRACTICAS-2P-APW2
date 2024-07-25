import { InputType, Field } from '@nestjs/graphql';
import { Double } from 'typeorm';

@InputType()
export class CreateAreasocialInput {
  @Field()
  Codigo: string;

  @Field()
  DetalleCondominio: string;

  @Field()
  clase: string;

  @Field()
  Responsable: string;

  @Field()
  ValorH: number;

  @Field()
  FechaUU: string;

  @Field()
  Empresa: string;

  @Field({ defaultValue: false })
  isDeleted: boolean;
}
