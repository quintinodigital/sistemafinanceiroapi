import { Injectable } from '@nestjs/common';
import { CategoriaMovimentoFinanceiroModel } from 'src/model/categoria-movimento-financeiro-model';
import { CategoriaMovimentoFinanceiroRepository } from 'src/repository/categoria-movimento-financeiro-repository';

@Injectable()
export class CategoriaMovimentoFinanceiroService {

    constructor(
        private readonly categoriaMovimentoFinanceiroRepository: CategoriaMovimentoFinanceiroRepository
    ) {}

    public async saveOne(categoriaMovimentoFinanceiroModel: CategoriaMovimentoFinanceiroModel) {
        return this.categoriaMovimentoFinanceiroRepository.saveOne(categoriaMovimentoFinanceiroModel);
    }

    public async saveAll(categoriaMovimentoFinanceiroModelList: CategoriaMovimentoFinanceiroModel[]) {
        return this.categoriaMovimentoFinanceiroRepository.saveAll(categoriaMovimentoFinanceiroModelList);
    }

    public async findAll() {
        return this.categoriaMovimentoFinanceiroRepository.findAll();
    }

    public async findOne(categoriaMovimentoFinanceiroID: number) {
        return await this.categoriaMovimentoFinanceiroRepository.findOne(categoriaMovimentoFinanceiroID);
    }

}
