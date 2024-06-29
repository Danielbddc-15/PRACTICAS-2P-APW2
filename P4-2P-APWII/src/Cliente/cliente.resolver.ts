import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ClienteService } from './cliente.service';
import { Cliente } from './entities/cliente.entity'; // Asegúrate de que la ruta sea correcta
import { CreateClienteInput } from './dto/create-cliente.input';
import { UpdateClienteInput } from './dto/update-cliente.input';

@Resolver(() => Cliente)
export class ClientesResolver {
  constructor(private readonly clienteService: ClienteService) {}

  @Mutation(() => Cliente)
  createCliente(@Args('createClienteInput') createClienteInput: CreateClienteInput): Promise<Cliente> {
    return this.clienteService.create(createClienteInput);
  }

  @Query(() => [Cliente], { name: 'clientes' }) // Cambia el nombre a 'clientes' en lugar de 'Cliente'
  findAll(): Promise<Cliente[]> {
    return this.clienteService.findAll();
  }

  @Query(() => Cliente, { name: 'cliente' }) // Cambia el nombre a 'cliente' en lugar de 'Cliente'
  findOne(@Args('id', { type: () => Int }) id: number): Promise<Cliente> {
    return this.clienteService.findOne(id);
  }

  @Mutation(() => Cliente)
  updateCliente(@Args('updateClienteInput') updateClienteInput: UpdateClienteInput): Promise<Cliente> {
    return this.clienteService.update(updateClienteInput.id, updateClienteInput);
  }

  @Mutation(() => Cliente)
  removeCliente(@Args('id', { type: () => Int }) id: number): Promise<Cliente> {
    return this.clienteService.remove(id);
  }
}
