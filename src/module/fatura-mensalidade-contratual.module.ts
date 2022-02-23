import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FaturaMensalidadeContratualController } from '../controller/fatura-mensalidade-contratual.controller';
import { FaturaMensalidadeContratualModel, FaturaMensalidadeContratualSchema } from '../model/fatura-mensalidade-contratual-model';
import { FaturaMensalidadeContratualRepository } from '../repository/fatura-mensalidade-contratual-repository';
import { FaturaMensalidadeContratualService } from '../service/fatura-mensalidade-contratual.service';

@Module({
    imports: [
        MongooseModule.forFeature([{name: FaturaMensalidadeContratualModel.name, schema: FaturaMensalidadeContratualSchema}]),
    ],
    controllers: [FaturaMensalidadeContratualController],
    providers: [FaturaMensalidadeContratualService, FaturaMensalidadeContratualRepository],
    exports: [FaturaMensalidadeContratualService]
})
export class FaturaMensalidadeContratualModule { }
