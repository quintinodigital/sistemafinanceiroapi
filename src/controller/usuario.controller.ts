import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsuarioModel } from './../model/usuario-model';
import { UsuarioService } from './../service/usuario.service';

@Controller('usuario')
export class UsuarioController {

    constructor(
        private readonly usuarioService: UsuarioService
    ) {}

    @Post()
    public async saveOne(@Body() usuarioModel: UsuarioModel) {
        return this.usuarioService.saveOne(usuarioModel);
    }

    @Get()
    public async findAll() {
        return await this.usuarioService.findAll();
    }

    @Get(":usuarioID")
    public async findOne(@Param("usuarioID") usuarioID: number) {
        return await this.usuarioService.findOne(usuarioID);
    }

    @Post("autenticador")
    public async autenticarUsuario(@Body() { identificador, senha }) {
        return await this.usuarioService.autenticarUsuario(identificador, senha);
    }

}
