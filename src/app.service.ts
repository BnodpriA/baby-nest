import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(name:string | null = 'Binod'): string {
    const finalName = name ?? 'Bunny';
    return `${finalName} the great!`;
  }
}
