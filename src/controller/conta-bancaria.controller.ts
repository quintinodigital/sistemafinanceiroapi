import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ContaBancariaModel } from 'src/model/conta-bancaria-model';
import { ContaBancariaService } from 'src/service/conta-bancaria.service';

@Controller('conta-bancaria')
export class ContaBancariaController {

    constructor(
        private readonly contaBancariaService: ContaBancariaService
    ) {}

    @Post()
    public async saveOne(@Body() contaBancariaModel: ContaBancariaModel) {
        return this.contaBancariaService.saveOne(contaBancariaModel);
    }

    @Get()
    public async findAll() {
        return await this.contaBancariaService.findAll();
    }

    @Get(":contaBancariaID")
    public async findOne(@Param("contaBancariaID") contaBancariaID: number) {
        return await this.contaBancariaService.findOne(contaBancariaID);
    }

}
