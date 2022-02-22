import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ContaBancariaController } from 'src/controller/conta-bancaria.controller';
import { ContaBancariaModel, ContaBancariaSchema } from 'src/model/conta-bancaria-model';
import { ContaBancariaRepository } from 'src/repository/conta-bancaria-repository';
import { ContaBancariaService } from 'src/service/conta-bancaria.service';

@Module({
    imports: [
        MongooseModule.forFeature([{name: ContaBancariaModel.name, schema: ContaBancariaSchema}]),
    ],
    controllers: [ContaBancariaController],
    providers: [ContaBancariaService, ContaBancariaRepository],
    exports: [ContaBancariaService]
})
export class ContaBancariaModule { }
