import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { PessoaModel } from '../model/Pessoa-model';

@Injectable()
export class PessoaRepository {

    constructor(
        @InjectModel(PessoaModel.name) 
        private readonly pessoaRepository: Model<PessoaModel>
    ) { }

    public async saveOne(pessoaModel: PessoaModel) {
        return await new this.pessoaRepository(pessoaModel).save();
    }

    public async saveAll(pessoaModelList: PessoaModel[]) {
        for(let Pessoa of pessoaModelList) {
            await this.saveOne(Pessoa);
        }
        return pessoaModelList;
    }

    public async findAll() {
        return await this.pessoaRepository.find();
    }

    public async findOne(pessoaID: number) {
        return await this.pessoaRepository.findById(pessoaID);
    }

}
