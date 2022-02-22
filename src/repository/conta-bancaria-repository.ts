import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { ContaBancariaModel } from 'src/model/conta-bancaria-model';

@Injectable()
export class ContaBancariaRepository {

    constructor(
        @InjectModel(ContaBancariaModel.name)
        private readonly contaBancariaRepository: Model<ContaBancariaModel>
    ) { }

    public async saveOne(contaBancariaModel: ContaBancariaModel) {
        return await new this.contaBancariaRepository(contaBancariaModel).save();
    }

    public async findAll() {
        return await this.contaBancariaRepository.find();
    }

    public async findOne(contaBancariaID: number) {
        return await this.contaBancariaRepository.findById(contaBancariaID);
    }

}
