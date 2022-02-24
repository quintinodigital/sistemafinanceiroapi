import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { CategoriaMovimentoFinanceiroModel } from 'src/model/categoria-movimento-financeiro.model';

@Injectable()
export class CategoriaMovimentoFinanceiroRepository {

    constructor(
        @InjectModel(CategoriaMovimentoFinanceiroModel.name) 
        private readonly categoriaMovimentoFinanceiroRepository: Model<CategoriaMovimentoFinanceiroModel>
    ) { }

    public async saveOne(categoriaMovimentoFinanceiroModel: CategoriaMovimentoFinanceiroModel) {
        console.log("Repository: ", categoriaMovimentoFinanceiroModel);
        return await new this.categoriaMovimentoFinanceiroRepository(categoriaMovimentoFinanceiroModel).save();
    }

    public async findAll() {
        return await this.categoriaMovimentoFinanceiroRepository.find();
    }

    public async findOne(categoriaMovimentoFinanceiroID: number) {
        return await this.categoriaMovimentoFinanceiroRepository.findById(categoriaMovimentoFinanceiroID);
    }

}
