import { Request, Response } from 'express';
import { prisma } from '../../Data/Postgres';
import { CreateGastoDto, UpdateGastoDto} from '../../Domain/Dtos';
import { GastoRepository } from '../../Domain';

export class GastosController {

  //* Dependency Injection
  constructor(
    private readonly gastoRepository: GastoRepository,
  ) { }


  public getGasto = async ( req: Request, res: Response ) => {
    const gasto = await this.gastoRepository.getAll();
    return res.json( gasto );
  };

  public getGastoById = async ( req: Request, res: Response ) => {
    const id = +req.params.id;

    try {
      const gasto = await this.gastoRepository.findById( id );
      res.json( gasto );

    } catch ( error ) {
      res.status( 400 ).json( { error } );
    }

  };

  public createGasto= async ( req: Request, res: Response ) => {
    const [ error, createGastoDto ] = CreateGastoDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    const todo = await this.gastoRepository.create( createGastoDto! );
    res.json( todo );

  };

  public updateGasto = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateGastoDto ] = UpdateGastoDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    const updateGasto = await this.gastoRepository.updateById( updateGastoDto! );
    return res.json( updateGasto );

  };


  public deleteGasto = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const deletedTodo = await this.gastoRepository.deleteById( id );
    res.json( deletedTodo );

  };
}