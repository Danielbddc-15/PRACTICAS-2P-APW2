export class UpdateClienteDto {
    values: any;
    private constructor(
      public readonly id: number,
      public readonly nombre?: string,
      public readonly identificacion?: string
    ){}
  
    static create(props: { [key: string]: any }): [string?, UpdateClienteDto?] {
      const { id, nombre, identificacion } = props;
  
      if (!id) return ['id property is required', undefined];
  
      return [undefined, new UpdateClienteDto(id, nombre, identificacion)];
    }
  }
  