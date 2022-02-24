import { Injectable } from '@nestjs/common';
import { ProdutoServicoModel } from 'src/model/produto-servico.model';
import { ProdutoServicoRepository } from 'src/repository/produto-servico-repository';

@Injectable()
export class ProdutoServicoService {

    constructor(
        private readonly produtoServicoRepository: ProdutoServicoRepository
    ) {}

    public async saveOne(produtoServicoModel: ProdutoServicoModel) {
        return this.produtoServicoRepository.saveOne(produtoServicoModel);
    }

    public async saveAll(produtoServicoModelList: ProdutoServicoModel[]) {
        return this.produtoServicoRepository.saveAll(produtoServicoModelList);
    }

    public async findAll() {
        return this.produtoServicoRepository.findAll();
    }

    public async findOne(produtoServicoID: string) {
        return await this.produtoServicoRepository.findOne(produtoServicoID);
    }

}
