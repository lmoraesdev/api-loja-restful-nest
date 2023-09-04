import { Column } from 'typeorm';

export class UsuarioEntity {
  @Column({})
  id: string;
  nome: string;
  email: string;
  senha: string;
}
