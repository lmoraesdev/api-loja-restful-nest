import { IsEmail, IsNotEmpty, Matches } from 'class-validator';
import { EmailEhUnico } from '../validacao/email-eh-unico.validator';

export class CriaUsuarioDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  nome: string;

  @IsEmail(undefined, { message: 'O e-mail informado é inválido' })
  @EmailEhUnico({ message: 'Já existe um usuário com este e-mail' })
  email: string;

  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W+)(.{10,30})$/, {
    message:
      'A senha deve conter pelo menos uma letra minúscula, uma letra maiúscula, um dígito, um caractere especial e ter entre 8 e 30 caracteres',
  })
  senha: string;
}
