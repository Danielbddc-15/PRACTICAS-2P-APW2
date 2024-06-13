export class ConceptoEntity {
    constructor(
      public id: number,
      public descripcion: string
    ) {}
  
    public static fromObject(object: { [key: string]: any }): ConceptoEntity {
      const { id, descripcion } = object;
      if (!id) throw 'Id is required';
      if (!descripcion) throw 'Descripcion is required';
  
      return new ConceptoEntity(id, descripcion);
    }
  }
  