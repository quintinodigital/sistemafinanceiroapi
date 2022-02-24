import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriaMovimentoFinanceiroController } from 'src/controller/categoria-movimento-financeiro.controller';
import { CategoriaMovimentoFinanceiroModel, CategoriaMovimentoFinanceiroSchema } from 'src/model/categoria-movimento-financeiro-model';
import { CategoriaMovimentoFinanceiroRepository } from 'src/repository/categoria-movimento-financeiro-repository';
import { CategoriaMovimentoFinanceiroService } from 'src/service/categoria-movimento-financeiro.service';

@Module({
    imports: [
        MongooseModule.forFeature([{name: CategoriaMovimentoFinanceiroModel.name, schema: CategoriaMovimentoFinanceiroSchema}]),
    ],
    controllers: [CategoriaMovimentoFinanceiroController],
    providers: [CategoriaMovimentoFinanceiroService, CategoriaMovimentoFinanceiroRepository],
    exports: [CategoriaMovimentoFinanceiroService]
})
export class CategoriaMovimentoFinanceiroModule { }
