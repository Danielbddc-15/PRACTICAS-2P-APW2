// src/libro/areasocial.gateway.ts
import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { AreaSocial } from '../entities/areasocial.entity';

interface User {
  id: string;
  sockets: string[];
}

@WebSocketGateway({ cors: { origin: '*', methods: ['GET', 'POST'] } })
export class AreaSocialGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  private users: Record<string, User> = {};

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

  @SubscribeMessage('examen6B')
  handleSubscribeMessage(client: Socket, payload: AreaSocial): void {
    // Emitir solo a clientes que están en la misma empresa
    for (const userId in this.users) {
      const user = this.users[userId];
      user.sockets.forEach(socketId => {
        this.server.to(socketId).emit('area-social', payload);
      });
    }
  }
}
const io = require('socket.io-client');

// Conéctate al servidor WebSocket
const socket = io('http://localhost:3000', {
  query: { userId: 'user123' }
});

socket.on('connect', () => {
  console.log('Conectado al servidor');

  // Enviar un mensaje al servidor
  const areaSocialMessage = {
    id: '1',
    Codigo: '123',
    DetalleCondominio: 'Sample Detail',
    clase: 'Class A',
    Responsable: 'John Doe',
    ValorH: 100,
    FechaUU: '2024-07-25',
    Empresa: 'Company XYZ',
    isDeleted: false,
  };

  // Emitir un mensaje usando el evento suscribir-message
  socket.emit('suscribir-message', areaSocialMessage);
});

socket.on('area-social-message', (message) => {
  console.log('Mensaje recibido:', message);
});
