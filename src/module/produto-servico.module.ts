import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProdutoServicoController } from 'src/controller/produto-servico.controller';
import { ProdutoServicoModel, ProdutoServicoSchema } from 'src/model/produto-servico.model';
import { ProdutoServicoRepository } from 'src/repository/produto-servico-repository';
import { ProdutoServicoService } from 'src/service/produto-servico.service';

@Module({
    imports: [
        MongooseModule.forFeature([{name: ProdutoServicoModel.name, schema: ProdutoServicoSchema}]),
    ],
    controllers: [ProdutoServicoController],
    providers: [ProdutoServicoService, ProdutoServicoRepository],
    exports: [ProdutoServicoService]
})
export class ProdutoServicoModule { }
