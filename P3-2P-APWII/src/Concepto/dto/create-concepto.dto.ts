import { IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class CreateConceptoDto {

    @IsString()
    @IsOptional()
    id?:string

    @IsString()
    @MinLength(10)
    descripcion: string;



}