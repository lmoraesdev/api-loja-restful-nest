import { AtualizaUsuarioDTO } from './dto/AtualizaUsuario.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ListaUsuarioDTO } from './dto/ListaUsuario.dto';
import { UsuarioEntity } from './usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(UsuarioEntity)
    private readonly usuarioRepository: Repository<UsuarioEntity>,
  ) {}

  async criarUsuario(UsuarioEntity: UsuarioEntity) {
    await this.usuarioRepository.save(UsuarioEntity);
  }

  async listaUsuarios() {
    const usuariosSalvos = await this.usuarioRepository.find();
    const usuariosLista = usuariosSalvos.map(
      (usuario) => new ListaUsuarioDTO(usuario.id, usuario.nome),
    );

    return usuariosLista;
  }

  async atualizarUsuario(id: string, UsuarioEntity: AtualizaUsuarioDTO) {
    await this.usuarioRepository.update(id, UsuarioEntity);
  }

  async deletarUsuario(id: string) {
    await this.usuarioRepository.delete(id);
  }
}
