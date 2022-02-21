import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PessoaController } from './../controller/pessoa.controller';
import { PessoaModel, PessoaSchema } from './../model/pessoa-model';
import { PessoaRepository } from './../repository/pessoa-repository';
import { PessoaService } from './../service/pessoa.service';

@Module({
    imports: [
        MongooseModule.forFeature([{name: PessoaModel.name, schema: PessoaSchema}]),
    ],
    controllers: [PessoaController],
    providers: [PessoaService, PessoaRepository],
    exports: [PessoaService]
})
export class PessoaModule { }
