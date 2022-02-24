import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProdutoServicoModel } from 'src/model/produto-servico.model';
import { ProdutoServicoService } from 'src/service/produto-servico.service';

@Controller('produto-servico')
export class ProdutoServicoController {

    constructor(
        private readonly produtoServicoService: ProdutoServicoService
    ) {}

    @Post()
    public async saveOne(@Body() produtoServicoModel: ProdutoServicoModel) {
        return this.produtoServicoService.saveOne(produtoServicoModel);
    }

    @Post("all")
    public async saveAll(@Body() produtoServicoModel: ProdutoServicoModel[]) {
        return this.produtoServicoService.saveAll(produtoServicoModel);
    }

    @Get()
    public async findAll() {
        return await this.produtoServicoService.findAll();
    }

    @Get(":produtoServicoID")
    public async findOne(@Param("produtoServicoID") produtoServicoID: string) {
        return await this.produtoServicoService.findOne(produtoServicoID);
    }

}
