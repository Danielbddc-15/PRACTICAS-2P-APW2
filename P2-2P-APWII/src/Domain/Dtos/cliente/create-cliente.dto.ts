import { Estado } from '@prisma/client';

export class CreateClienteDto {
  constructor(
    public readonly nombre: string,
    public readonly identificacion: string,
    public readonly estado: Estado // Añadido estado
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateClienteDto?] {
    const { nombre, identificacion, estado } = props;

    if (!nombre) return ['nombre property is required', undefined];
    if (!identificacion) return ['identificacion property is required', undefined];
    if (!estado) return ['estado property is required', undefined];

    return [undefined, new CreateClienteDto(nombre, identificacion, estado)];
  }
}
