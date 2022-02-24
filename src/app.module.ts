import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CartaoBancarioModule } from './module/cartao-bancario.module';
import { CategoriaMovimentoFinanceiroModule } from './module/categoria-movimento-financeiro.module';
import { ContaBancariaModule } from './module/conta-bancaria.module';
import { ContratoModule } from './module/contrato.module';
import { FaturaMensalidadeContratualModule } from './module/fatura-mensalidade-contratual.module';
import { ParcelamentoPagamentoMovimentoFinanceiroModule } from './module/parcelamento-pagamento-movimento-financeiro.module';
import { PessoaModule } from './module/pessoa.module';
import { ProdutoServicoModule } from './module/produto-servico.module';
import { UsuarioModule } from './module/usuario.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://josequintino:sistemafinanceiro@cluster0.srvgt.mongodb.net/db_sistema_financeiro?retryWrites=true&w=majority"),
    // MongooseModule.forRoot("mongodb://localhost/db_sistema_financeiro"),
    UsuarioModule,
    PessoaModule,
    ContratoModule,
    ContaBancariaModule,
    CartaoBancarioModule,
    FaturaMensalidadeContratualModule,
    CategoriaMovimentoFinanceiroModule,
    ProdutoServicoModule,
    ParcelamentoPagamentoMovimentoFinanceiroModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
