import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CartaoBancarioModel } from './../model/cartao-bancario-model';
import { CartaoBancarioService } from './../service/cartao-bancario.service';

@Controller('cartao-bancario')
export class CartaoBancarioController {

    constructor(
        private readonly cartaoBancarioService: CartaoBancarioService
    ) {}

    @Post()
    public async saveOne(@Body() cartaoBancarioModel: CartaoBancarioModel) {
        return this.cartaoBancarioService.saveOne(cartaoBancarioModel);
    }

    @Get()
    public async findAll() {
        return await this.cartaoBancarioService.findAll();
    }

    @Get(":cartaoBancarioID")
    public async findOne(@Param("cartaoBancarioID") cartaoBancarioID: number) {
        return await this.cartaoBancarioService.findOne(cartaoBancarioID);
    }

}
