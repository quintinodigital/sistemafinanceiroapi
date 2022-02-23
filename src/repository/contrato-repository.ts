import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { ContratoModel } from './../model/contrato-model';

@Injectable()
export class ContratoRepository {

    constructor(
        @InjectModel(ContratoModel.name)
        private readonly contratoRepository: Model<ContratoModel>
    ) { }

    public async saveOne(contratoModel: ContratoModel) {
        return await new this.contratoRepository(contratoModel).save();
    }

    public async findAll() {
        return await this.contratoRepository.find().populate("pessoaContratadaModel");
    }

    public async findOne(contratoID: number) {
        return await this.contratoRepository.findById(contratoID);
    }

}
