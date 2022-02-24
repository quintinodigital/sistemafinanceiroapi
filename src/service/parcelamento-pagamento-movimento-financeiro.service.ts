import { Injectable } from '@nestjs/common';
import { ParcelamentoPagamentoMovimentoFinanceiroModel } from 'src/model/parcelamento-pagamento-movimento-financeiro-model';
import { ParcelamentoPagamentoMovimentoFinanceiroRepository } from 'src/repository/parcelamento-pagamento-movimento-financeiro-repository';

@Injectable()
export class ParcelamentoPagamentoMovimentoFinanceiroService {

    constructor(
        private readonly parcelamentoPagamentoMovimentoFinanceiroRepository: ParcelamentoPagamentoMovimentoFinanceiroRepository
    ) {}

    public async saveOne(parcelamentoPagamentoMovimentoFinanceiroModel: ParcelamentoPagamentoMovimentoFinanceiroModel) {
        return this.parcelamentoPagamentoMovimentoFinanceiroRepository.saveOne(parcelamentoPagamentoMovimentoFinanceiroModel);
    }

    public async saveAll(parcelamentoPagamentoMovimentoFinanceiroModelList: ParcelamentoPagamentoMovimentoFinanceiroModel[]) {
        return this.parcelamentoPagamentoMovimentoFinanceiroRepository.saveAll(parcelamentoPagamentoMovimentoFinanceiroModelList);
    }

    public async findAll() {
        return this.parcelamentoPagamentoMovimentoFinanceiroRepository.findAll();
    }

    public async findOne(produtoServicoID: string) {
        return await this.parcelamentoPagamentoMovimentoFinanceiroRepository.findOne(produtoServicoID);
    }

}
