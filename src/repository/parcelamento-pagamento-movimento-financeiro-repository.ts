import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { ParcelamentoPagamentoMovimentoFinanceiroModel } from 'src/model/parcelamento-pagamento-movimento-financeiro-model';

@Injectable()
export class ParcelamentoPagamentoMovimentoFinanceiroRepository {

    constructor(
        @InjectModel(ParcelamentoPagamentoMovimentoFinanceiroModel.name)
        private readonly parcelamentoPagamentoMovimentoFinanceiroRepository: Model<ParcelamentoPagamentoMovimentoFinanceiroModel>
    ) { }

    public async saveOne(parcelamentoPagamentoMovimentoFinanceiroModel: ParcelamentoPagamentoMovimentoFinanceiroModel) {
        return await new this.parcelamentoPagamentoMovimentoFinanceiroRepository(parcelamentoPagamentoMovimentoFinanceiroModel).save();
    }

    public async saveAll(parcelamentoPagamentoMovimentoFinanceiroModelList: ParcelamentoPagamentoMovimentoFinanceiroModel[]) {
        for(let parcelamentoPagamentoMovimentoFinanceiro of parcelamentoPagamentoMovimentoFinanceiroModelList) {
            this.saveOne(parcelamentoPagamentoMovimentoFinanceiro);
        }
        return parcelamentoPagamentoMovimentoFinanceiroModelList;
    }

    public async findAll() {
        return await this.parcelamentoPagamentoMovimentoFinanceiroRepository.find();
    }

    public async findOne(parcelamentoPagamentoMovimentoFinanceiroID: string) {
        return await this.parcelamentoPagamentoMovimentoFinanceiroRepository.findById(parcelamentoPagamentoMovimentoFinanceiroID);
    }

}
