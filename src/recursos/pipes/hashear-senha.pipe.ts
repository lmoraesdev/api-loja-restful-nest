import { ConfigService } from '@nestjs/config';
import { Injectable, PipeTransform } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class HashearSenhaPipe implements PipeTransform {
  constructor(private configService: ConfigService) {}
  async transform(senha: string) {
    const sal = this.configService.get<string>('SAL_SENHA');

    const senhaHasheada = await bcrypt.hash(senha, sal!);
    return senhaHasheada;
  }
}
