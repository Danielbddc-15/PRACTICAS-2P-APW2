import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

@InputType()
export class CreateClienteInput {
  
  @IsString()
  @IsNotEmpty()
  @Field(()=>String )
  cedula:string;
  
  @Field(()=>String)
  @IsString()
  nombre:string;

  @IsString()
  @IsOptional()
  @Field(() => String, { nullable: true })
  estado?: string;

}