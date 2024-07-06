import {
    SubscribeMessage,
    WebSocketGateway,
    OnGatewayConnection,
    OnGatewayDisconnect,
    WebSocketServer,
  } from '@nestjs/websockets';
  import { Server, Socket } from 'socket.io';
  
  interface User {
    id: string;
    sockets: string[];
  }
  
  interface Gastos {
    id?: string;
    clienteId: string;
    conceptoId: string;
    fecha: string;
    hora: string;
    valorgasto: number;
  }
  
  @WebSocketGateway({ cors: true })
  export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer() server: Server;
    private users: Record<string, User> = {};
    private activeTransactions: Gastos[] = [];
  
    handleConnection(client: Socket) {
      const userId = client.handshake.query.userId as string;
      if (!this.users[userId]) {
        this.users[userId] = { id: userId, sockets: [] };
      }
  
      if (this.users[userId].sockets.length >= 3) {
        client.disconnect();
        return;
      }
  
      this.users[userId].sockets.push(client.id);
    }
  
    handleDisconnect(client: Socket) {
      const userId = client.handshake.query.userId as string;
      if (this.users[userId]) {
        this.users[userId].sockets = this.users[userId].sockets.filter(id => id !== client.id);
        if (this.users[userId].sockets.length === 0) {
          delete this.users[userId];
        }
      }
    }
  
    @SubscribeMessage('agregar-Gastos')
    async handleAddTransaction(client: Socket, payload: Gastos): Promise<void> {
      const newTransaction: Gastos = { ...payload, id: Date.now().toString() };
      this.activeTransactions.push(newTransaction);
      this.server.emit('nuevos-Gastos', newTransaction);
    }
  
    @SubscribeMessage('consultar-Gastos')
    handleGetActiveTransactions(client: Socket): void {
      this.server.emit('lista-Gastos', this.activeTransactions);
    }
  }