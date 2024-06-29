import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from '../Cliente/dto/create-cliente.dto';
import { UpdateClienteDto } from '../Cliente/dto/update-cliente.dto';
import { Cliente } from '../Cliente/entities/Cliente.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>
  ) {
    
  }
  async create(createClienteDto: CreateClienteDto) {
    const Cliente = this.clienteRepository.create(createClienteDto);
    return this.clienteRepository.save(Cliente);
  }

  async findAll() {
    return await this.clienteRepository.find();
  }

  async findOne(id: string) {
    return await this.clienteRepository.findOneBy({id});
  }

  async update(id: string, updateCiudadanoDto: UpdateClienteDto) {
    const updated= await this.clienteRepository.update(id, updateCiudadanoDto);
    return await this.findOne(id)
    
  }

  async remove(id: string) {
    const deleted = await this.clienteRepository.delete(id);
    return deleted;
  }
}