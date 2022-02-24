import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ParcelamentoPagamentoMovimentoFinanceiroController } from 'src/controller/parcelamento-pagamento-movimento-financeiro.controller';
import { ParcelamentoPagamentoMovimentoFinanceiroModel, ParcelamentoPagamentoMovimentoFinanceiroSchema } from 'src/model/parcelamento-pagamento-movimento-financeiro-model';
import { ParcelamentoPagamentoMovimentoFinanceiroRepository } from 'src/repository/parcelamento-pagamento-movimento-financeiro-repository';
import { ParcelamentoPagamentoMovimentoFinanceiroService } from 'src/service/parcelamento-pagamento-movimento-financeiro.service';

@Module({
    imports: [
        MongooseModule.forFeature([{name: ParcelamentoPagamentoMovimentoFinanceiroModel.name, schema: ParcelamentoPagamentoMovimentoFinanceiroSchema }]),
    ],
    controllers: [ParcelamentoPagamentoMovimentoFinanceiroController],
    providers: [ParcelamentoPagamentoMovimentoFinanceiroService, ParcelamentoPagamentoMovimentoFinanceiroRepository],
    exports: [ParcelamentoPagamentoMovimentoFinanceiroService]
})
export class ParcelamentoPagamentoMovimentoFinanceiroModule { }
