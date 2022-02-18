import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from "bcrypt";
import { ObjectId } from 'bson';
import { Model } from "mongoose";
import { UsuarioModel } from './../model/usuario-model';

@Injectable()
export class UsuarioRepository {

    constructor(
        @InjectModel(UsuarioModel.name) 
        private readonly usuarioRepository: Model<UsuarioModel>
    ) { }

    public async saveOne(usuarioModel: UsuarioModel) {
        return await new this.usuarioRepository(usuarioModel).save();
    }

    public async saveAll(usuarioModelList: UsuarioModel[]) {
        for(let usuario of usuarioModelList) {
            await this.saveOne(usuario);
        }
        return usuarioModelList;
    }

    public async findAll() {
        return await this.usuarioRepository.find();
    }

    public async findOne(usuarioID: number) {
        return await this.usuarioRepository.findById(usuarioID);
    }

    // FIXME --
    public async updateOne(usuarioModelParameter: UsuarioModel) { }

    // FIXME --
    public async updateAll(usuarioModelParameter: UsuarioModel) { }

    // FIXME --
    public async deleteOne(usuarioModelParameter: UsuarioModel) { }

    // FIXME --
    public async deleteAll(usuarioModelParameter: UsuarioModel) { }

    // FIXME --
    public async inativarUsuarioSistema(usuarioModelParameter: UsuarioModel) { }

    public async autenticarUsuario(identificador: string, senha: string) : Promise<ObjectId> {
        for(let usuario of await this.findAll()) {
            if((identificador == usuario.email || identificador == usuario.telefone) && await bcrypt.compare(senha, usuario.senha)) {
                return usuario._id;
            }
        }
    }

}
