import { Injectable, OnModuleInit } from '@nestjs/common';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
@Injectable()
export class AppService implements OnModuleInit {
  constructor(private eventEmitter: EventEmitter2) {}

  onModuleInit() {
    this.getHello();
  }

  getHello(): string {
    const message = 'Emitting event in AppService->getHello()';
    console.log('get hello was trigged!');
    this.eventEmitter.emit('message', message);
    console.log(this.eventEmitter.listeners());
    return message;
  }

  @OnEvent('message')
  async onMessageReceived(payload: string) {
    console.log('showing payload', payload);
  }
}
