import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuarioRepository } from 'src/repository/usuario-repository';
import { UsuarioController } from './../controller/usuario.controller';
import { UsuarioModel, UsuarioSchema } from './../model/usuario-model';
import { UsuarioService } from './../service/usuario.service';

@Module({
    imports: [
        MongooseModule.forFeature([{name: UsuarioModel.name, schema: UsuarioSchema}]),
    ],
    controllers: [UsuarioController],
    providers: [UsuarioService, UsuarioRepository],
    exports: [UsuarioService]
})
export class UsuarioModule { }
