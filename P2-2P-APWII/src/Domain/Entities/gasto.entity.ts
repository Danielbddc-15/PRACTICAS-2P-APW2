export class GastoEntity {
    constructor(
      public id: number,
      public clienteId: number,
      public conceptoId: number,
      public fecha: string,
      public hora: string,
      public valorGasto: number,
      public estado: string
    ) {}
  
    public static fromObject(object: { [key: string]: any }): GastoEntity {
      const { id, clienteId, conceptoId, fecha, hora, valorGasto, estado } = object;
      if (!id) throw 'Id is required';
      if (!clienteId) throw 'clienteId is required';
      if (!conceptoId) throw 'conceptoId is required';
      if (!fecha) throw 'fecha is required';
      if (!hora) throw 'hora is required';
      if (!valorGasto) throw 'valorGasto is required';
      if (!estado) throw 'estado is required';
  
      return new GastoEntity(id, clienteId, conceptoId, fecha, hora, valorGasto, estado);
    }
  }
  