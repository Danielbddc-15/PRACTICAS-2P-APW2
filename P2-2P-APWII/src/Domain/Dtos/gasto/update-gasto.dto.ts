export class UpdateGastoDto {
    values: any;
    private constructor(
      public readonly id: number,
      public readonly clienteId?: number,
      public readonly conceptoId?: number,
      public readonly fecha?: string,
      public readonly hora?: string,
      public readonly valorGasto?: number,
      public readonly estado?: string
    ){}
  
    static create(props: { [key: string]: any }): [string?, UpdateGastoDto?] {
      const { id, clienteId, conceptoId, fecha, hora, valorGasto, estado } = props;
  
      if (!id) return ['id property is required', undefined];
  
      return [undefined, new UpdateGastoDto(id, clienteId, conceptoId, fecha, hora, valorGasto, estado)];
    }
  }
  