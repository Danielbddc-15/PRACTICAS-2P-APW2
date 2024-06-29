import { Injectable } from '@nestjs/common';
import { CreateClienteInput } from './dto/create-cliente.input';
import { UpdateClienteInput } from './dto/update-cliente.input';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from './entities/Cliente.entity';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,
  ) {}
  async create(CreateClienteInput: CreateClienteInput): Promise<Cliente> {
    const clientes= this.clienteRepository.create(CreateClienteInput) ;
    return this.clienteRepository.save(clientes) ;

  }

  async findAll(): Promise<Cliente[]> {
    return this.clienteRepository.find() ;
  }

  async findOne(id: number): Promise<Cliente> {
    return this.clienteRepository.findOne({ where: { id: id}});
  }

  async update(id: number, UpdateClienteInput: UpdateClienteInput): Promise<Cliente> {
    const clientes= await this.clienteRepository.preload(UpdateClienteInput);
    if (!clientes) {
      throw new Error(`Cliente con id ${id} no encontrado`);
    }
    return this.clienteRepository.save(clientes);
    
  }

  async remove(id: number): Promise<Cliente> {
    const clientes= await this.clienteRepository.findOneBy({id});
    console.log(clientes)
    if (!clientes) {
      throw new Error(`Cliente con id ${id} no encontrado`);
    }
    await this.clienteRepository.remove(clientes);
    console.log(clientes)
    return {...clientes, id};
  }
}