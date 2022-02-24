import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CategoriaMovimentoFinanceiroModel } from 'src/model/categoria-movimento-financeiro.model';
import { CategoriaMovimentoFinanceiroService } from 'src/service/categoria-movimento-financeiro.service';

@Controller('categoria-movimento-financeiro')
export class CategoriaMovimentoFinanceiroController {

    constructor(
        private readonly categoriaMovimentoFinanceiroService: CategoriaMovimentoFinanceiroService
    ) {}

    @Post()
    public async saveOne(@Body() categoriaMovimentoFinanceiroModel: CategoriaMovimentoFinanceiroModel) {
        return this.categoriaMovimentoFinanceiroService.saveOne(categoriaMovimentoFinanceiroModel);
    }

    @Post("all")
    public async saveAll(@Body() categoriaMovimentoFinanceiroModelList: CategoriaMovimentoFinanceiroModel[]) {
        return this.categoriaMovimentoFinanceiroService.saveAll(categoriaMovimentoFinanceiroModelList);
    }

    @Get()
    public async findAll() {
        return await this.categoriaMovimentoFinanceiroService.findAll();
    }

    @Get(":categoriaMovimentoFinanceiroID")
    public async findOne(@Param("categoriaMovimentoFinanceiroID") categoriaMovimentoFinanceiroID: number) {
        return await this.categoriaMovimentoFinanceiroService.findOne(categoriaMovimentoFinanceiroID);
    }

}
