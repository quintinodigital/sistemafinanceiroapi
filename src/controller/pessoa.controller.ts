import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PessoaModel } from './../model/pessoa-model';
import { PessoaService } from './../service/pessoa.service';

@Controller('pessoa')
export class PessoaController {

    constructor(
        private readonly pessoaService: PessoaService
    ) {}

    @Post()
    public async saveOne(@Body() pessoaModel: PessoaModel) {
        return this.pessoaService.saveOne(pessoaModel);
    }

    @Get()
    public async findAll() {
        return await this.pessoaService.findAll();
    }

    @Get(":pessoaID")
    public async findOne(@Param("pessoaID") pessoaID: number) {
        return await this.pessoaService.findOne(pessoaID);
    }

}
