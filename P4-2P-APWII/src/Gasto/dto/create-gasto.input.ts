import { InputType, Field, ID } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsString, IsNumber } from 'class-validator';

@InputType()
export class CreateGastoInput {
  @IsInt()
  @IsNotEmpty()
  @Field(()=> Number)
  clienteId: number;

  @IsInt()
  @IsNotEmpty()
  @Field(()=> Number)
  conceptoId: number;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  fecha: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  hora: string;

  @IsNumber()
  @IsNotEmpty()
  @Field(() => Number)
  valorGasto: number;

  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  estado: string;
}
