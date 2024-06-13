import { Estado } from '@prisma/client';

export class CreateConceptoDto {
  constructor(
    public readonly descripcion: string,
    public readonly estado: Estado // Añadido estado
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateConceptoDto?] {
    const { descripcion, estado } = props;

    if (!descripcion) return ['descripcion property is required', undefined];
    if (!estado) return ['estado property is required', undefined];

    return [undefined, new CreateConceptoDto(descripcion, estado)];
  }
}
