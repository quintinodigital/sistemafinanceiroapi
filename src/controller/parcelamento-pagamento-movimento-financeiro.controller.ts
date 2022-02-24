import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ParcelamentoPagamentoMovimentoFinanceiroModel } from 'src/model/parcelamento-pagamento-movimento-financeiro-model';
import { ParcelamentoPagamentoMovimentoFinanceiroService } from 'src/service/parcelamento-pagamento-movimento-financeiro.service';

@Controller('parcelamento-pagamento-movimento-financeiro')
export class ParcelamentoPagamentoMovimentoFinanceiroController {

    constructor(
        private readonly parcelamentoPagamentoMovimentoFinanceiroService: ParcelamentoPagamentoMovimentoFinanceiroService
    ) {}

    @Post()
    public async saveOne(@Body() parcelamentoPagamentoMovimentoFinanceiroModel: ParcelamentoPagamentoMovimentoFinanceiroModel) {
        return this.parcelamentoPagamentoMovimentoFinanceiroService.saveOne(parcelamentoPagamentoMovimentoFinanceiroModel);
    }

    @Post("all")
    public async saveAll(@Body() parcelamentoPagamentoMovimentoFinanceiroModel: ParcelamentoPagamentoMovimentoFinanceiroModel[]) {
        return this.parcelamentoPagamentoMovimentoFinanceiroService.saveAll(parcelamentoPagamentoMovimentoFinanceiroModel);
    }

    @Get()
    public async findAll() {
        return await this.parcelamentoPagamentoMovimentoFinanceiroService.findAll();
    }

    @Get(":parcelamentoPagamentoMovimentoFinanceiroID")
    public async findOne(@Param("produtoServicoID") produtoServicoID: string) {
        return await this.parcelamentoPagamentoMovimentoFinanceiroService.findOne(produtoServicoID);
    }

}
