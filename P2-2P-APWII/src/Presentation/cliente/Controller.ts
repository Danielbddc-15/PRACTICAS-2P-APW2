import { Request, Response } from 'express';
import { prisma } from '../../Data/Postgres';
import { CreateClienteDto, UpdateClienteDto } from '../../Domain/Dtos';
import { ClienteRepository } from '../../Domain';


export class ClientesController {

  //* Dependency Injection
  constructor(
    private readonly clienteRepository: ClienteRepository,
  ) { }


  public getCliente = async ( req: Request, res: Response ) => {
    const cliente = await this.clienteRepository.getAll();
    return res.json( cliente );
  };

  public getClienteById = async ( req: Request, res: Response ) => {
    const id = +req.params.id;

    try {
      const cliente = await this.clienteRepository.findById( id );
      res.json( cliente );

    } catch ( error ) {
      res.status( 400 ).json( { error } );
    }

  };

  public createCliente = async ( req: Request, res: Response ) => {
    const [ error, createClienteDto ] = CreateClienteDto.create( req.body );
    if ( error ) return res.status( 400 ).json( { error } );

    const todo = await this.clienteRepository.create( createClienteDto! );
    res.json( todo );

  };

  public updateCliente = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const [ error, updateClienteDto ] = UpdateClienteDto.create( { ...req.body, id } );
    if ( error ) return res.status( 400 ).json( { error } );

    const updateCliente = await this.clienteRepository.updateById( updateClienteDto! );
    return res.json( updateCliente);

  };


  public deleteCliente = async ( req: Request, res: Response ) => {
    const id = +req.params.id;
    const deletedTodo = await this.clienteRepository.deleteById( id );
    res.json( deletedTodo );

  };
}