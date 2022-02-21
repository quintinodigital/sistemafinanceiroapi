import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ContratoModel } from './../model/contrato-model';
import { ContratoService } from './../service/contrato.service';

@Controller('contrato')
export class ContratoController {

    constructor(
        private readonly contratoService: ContratoService
    ) {}

    @Post()
    public async saveOne(@Body() contratoModel: ContratoModel) {
        return this.contratoService.saveOne(contratoModel);
    }

    @Get()
    public async findAll() {
        return await this.contratoService.findAll();
    }

    @Get(":contratoID")
    public async findOne(@Param("contratoID") contratoID: number) {
        return await this.contratoService.findOne(contratoID);
    }

}
