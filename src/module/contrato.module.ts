import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ContratoController } from './../controller/contrato.controller';
import { ContratoModel, ContratoSchema } from './../model/contrato-model';
import { ContratoRepository } from './../repository/contrato-repository';
import { ContratoService } from './../service/contrato.service';

@Module({
    imports: [
        MongooseModule.forFeature([{name: ContratoModel.name, schema: ContratoSchema}]),
    ],
    controllers: [ContratoController],
    providers: [ContratoService, ContratoRepository],
    exports: [ContratoService]
})
export class ContratoModule { }
