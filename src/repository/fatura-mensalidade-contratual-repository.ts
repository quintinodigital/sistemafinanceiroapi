import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { FaturaMensalidadeContratualModel } from '../model/fatura-mensalidade-contratual-model';

@Injectable()
export class FaturaMensalidadeContratualRepository {

    constructor(
        @InjectModel(FaturaMensalidadeContratualModel.name)
        public readonly faturaMensalidadeContratualRepository: Model<FaturaMensalidadeContratualRepository>
    ) { }

    public async saveOne(faturaMensalidadeContratualModel: FaturaMensalidadeContratualModel) {
        return await new this.faturaMensalidadeContratualRepository(faturaMensalidadeContratualModel).save();
    }

    public async findAll() {
        return await this.faturaMensalidadeContratualRepository.find();
    }

}
