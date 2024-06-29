import { IsNotEmpty, IsOptional, IsString, MinLength, MaxLength } from "class-validator";

export class CreateClienteDto {

    @IsString()
    @IsOptional()
    id?:string

    @IsString()
    @MaxLength(50)
    nombre: string;

    @IsString()
    @MinLength(10)
    @IsNotEmpty()
    cedula: string;
   


}