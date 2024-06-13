export class ClienteEntity {
    constructor(
      public id: number,
      public nombre: string,
      public identificacion: string
    ) {}
  
    public static fromObject(object: { [key: string]: any }): ClienteEntity {
      const { id, nombre, identificacion } = object;
      if (!id) throw 'Id is required';
      if (!nombre) throw 'Nombre is required';
      if (!identificacion) throw 'Identificacion is required';
  
     
  
      return new ClienteEntity(id, nombre, identificacion);
    }
  }
  