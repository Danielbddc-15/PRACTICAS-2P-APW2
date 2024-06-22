export class UpdateConceptoDto {
    values: any;
    private constructor(
      public readonly id: number,
      public readonly descripcion?: string
    ){}
  
    static create(props: { [key: string]: any }): [string?, UpdateConceptoDto?] {
      const { id, descripcion } = props;
  
      if (!id) return ['id property is required', undefined];
  
      return [undefined, new UpdateConceptoDto(id, descripcion)];
    }
  }
  