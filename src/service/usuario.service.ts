import { Injectable } from '@nestjs/common';
import * as bcrypt from "bcrypt";
import { UsuarioRepository } from 'src/repository/usuario-repository';
import { UsuarioModel } from './../model/usuario-model';

@Injectable()
export class UsuarioService {

    constructor(
        private readonly usuarioRepository: UsuarioRepository
    ) {}

    public async saveOne(usuarioModel: UsuarioModel) {
        return this.usuarioRepository.saveOne(await this.configurarUsuarioModel(usuarioModel));
    }

    public async findAll() {
        return this.usuarioRepository.findAll();
    }

    public async findOne(usuarioID: number) {
        return await this.usuarioRepository.findOne(usuarioID);
    }

    private async configurarUsuarioModel(usuarioModelParameter: UsuarioModel) {
        const usuarioModel = usuarioModelParameter;
            usuarioModel.dataHoraCadastro = new Date();
            usuarioModel.senha = await bcrypt.hash(usuarioModel.senha, 12);
            usuarioModel.isAtivo = true;
        return usuarioModel;
    }

    public async autenticarUsuario(identificador: string, senha: string) {
        return this.usuarioRepository.autenticarUsuario(identificador, senha);
    }

}
