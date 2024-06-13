import { Request, Response } from 'express';
import { prisma } from '../../Data/Postgres';
import { CreateConceptoDto, UpdateConceptoDto } from '../../Domain/Dtos';
import { ConceptoRepository } from '../../Domain';

export class ConceptosController {

  //* Dependency Injection
  constructor(
    private readonly conceptoRepository: ConceptoRepository,
  ) { }


  public getConcepto = async ( req: Request, res: Response ) => {
    const concepto = await this.conceptoRepository.getAll();
    return res.json( concepto );
  };

  public getConceptoById = async ( req: Request, res: Response ) => {
    const id = +req.params.id;

    try {
      const concepto = await this.conceptoRepository.findById( id );
      res.json( concepto );

    } catch ( error ) {
      res.status( 400 ).json( { error } );
    }

  };

  public createConcepto= async ( req: Request, res: Response ) => {
    const [ error, createConceptoDto ] = CreateConceptoDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    const todo = await this.conceptoRepository.create( createConceptoDto! );
    res.json( todo );

  };

  public updateConcepto = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateConceptoDto ] = UpdateConceptoDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    const updateConcepto = await this.conceptoRepository.updateById( updateConceptoDto! );
    return res.json( updateConcepto );

  };


  public deleteConcepto = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const deletedTodo = await this.conceptoRepository.deleteById( id );
    res.json( deletedTodo );

  };
}