import { IsNotEmpty, IsNumber, IsOptional, IsString, MinLength, IsEnum } from 'class-validator';

export class CreateGastoDto {
  
  @IsNotEmpty()
  clienteId: string;

  @IsNotEmpty()
  conceptoId: string;

  @IsString()
  @IsNotEmpty()
  fecha: string;

  @IsString()
  @IsNotEmpty()
  hora: string;

  @IsNumber()
  @IsNotEmpty()
  valorGasto: number;

}
