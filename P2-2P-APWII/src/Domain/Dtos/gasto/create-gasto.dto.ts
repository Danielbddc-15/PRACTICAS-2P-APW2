import { Estado } from '@prisma/client'; // Asegúrate de importar el tipo correcto

export class CreateGastoDto {
  constructor(
    public readonly clienteId: number,
    public readonly conceptoId: number,
    public readonly fecha: string,
    public readonly hora: string,
    public readonly valorGasto: number,
    public readonly estado: Estado // Ajusta el tipo a Estado
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateGastoDto?] {
    const { clienteId, conceptoId, fecha, hora, valorGasto, estado } = props;

    if (!clienteId) return ['clienteId property is required', undefined];
    if (!conceptoId) return ['conceptoId property is required', undefined];
    if (!fecha) return ['fecha property is required', undefined];
    if (!hora) return ['hora property is required', undefined];
    if (!valorGasto) return ['valorGasto property is required', undefined];
    if (!estado) return ['estado property is required', undefined];

    return [undefined, new CreateGastoDto(clienteId, conceptoId, fecha, hora, valorGasto, estado)];
  }
}
