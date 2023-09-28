import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AtualizaUsuarioDTO } from './dto/AtualizaUsuario.dto';
import { CriaUsuarioDTO } from './dto/CriaUsuario.dto';
import { ListaUsuarioDTO } from './dto/ListaUsuario.dto';
import { UsuarioRepository } from './usuario.repository';
import { UsuarioService } from './usuario.service';

/* The UsuarioController class defines route handlers for creating, retrieving,
updating, and removing users in the system. */
@Controller('/usuarios')
export class UsuarioController {
  constructor(
    private usuarioRepository: UsuarioRepository,
    private readonly usuarioService: UsuarioService,
  ) {}

  /* The code snippet is defining a POST route handler for creating a new user in the system. */
  @Post()
  async criaUsuario(@Body() dadosDoUsuario: CriaUsuarioDTO) {
    const usuarioCriado = await this.usuarioService.criaUsuario(dadosDoUsuario);

    return {
      usuario: new ListaUsuarioDTO(usuarioCriado.id, usuarioCriado.nome),
      messagem: 'usuário criado com sucesso',
    };
  }

  /* The code snippet is defining a GET route handler for retrieving a list of Fusers from the system. */
  @Get()
  async listUsuarios() {
    const usuariosSalvos = await this.usuarioService.listaUsuarios();

    return usuariosSalvos;
  }

  /* The code snippet is defining a PUT route handler for updating a user in the
  system. */
  @Put('/:id')
  async atualizaUsuario(
    @Param('id') id: string,
    @Body() novosDados: AtualizaUsuarioDTO,
  ) {
    const usuarioAtualizado = await this.usuarioService.atualizarUsuario(
      id,
      novosDados,
    );

    return {
      usuario: usuarioAtualizado,
      messagem: 'usuário atualizado com sucesso',
    };
  }

  /* The code snippet is defining a DELETE route handler for removing a user from the system. */
  @Delete('/:id')
  async removeUsuario(@Param('id') id: string) {
    const usuarioRemovido = await this.usuarioService.deletarUsuario(id);

    return {
      usuario: usuarioRemovido,
      messagem: 'usuário removido com suceso',
    };
  }
}
