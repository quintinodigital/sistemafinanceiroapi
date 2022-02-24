import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { ProdutoServicoModel } from 'src/model/produto-servico.model';

@Injectable()
export class ProdutoServicoRepository {

    constructor(
        @InjectModel(ProdutoServicoModel.name) 
        private readonly produtoServicoRepository: Model<ProdutoServicoModel>
    ) { }

    public async saveOne(produtoServicoModel: ProdutoServicoModel) {
        return await new this.produtoServicoRepository(produtoServicoModel).save();
    }

    public async saveAll(produtoServicoModelList: ProdutoServicoModel[]) {
        for(let produtoServico of produtoServicoModelList) {
            this.saveOne(produtoServico);
        }
        return produtoServicoModelList;
    }

    public async findAll() {
        return await this.produtoServicoRepository.find();
    }

    public async findOne(produtoServicoID: string) {
        return await this.produtoServicoRepository.findById(produtoServicoID);
    }

}
