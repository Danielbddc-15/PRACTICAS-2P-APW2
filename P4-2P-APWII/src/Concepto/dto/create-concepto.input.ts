// create-concepto.input.ts
import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateConceptoInput {
  
  @IsString()
  @Field(()=>String)
  descripcion: string;

  @IsNotEmpty()
  @Field(() => String)
  estado: string;
}
