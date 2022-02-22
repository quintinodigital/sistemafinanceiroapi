import { Injectable } from '@nestjs/common';
import { ContaBancariaModel } from 'src/model/conta-bancaria-model';
import { ContaBancariaRepository } from 'src/repository/conta-bancaria-repository';

@Injectable()
export class ContaBancariaService {

    constructor(
        private readonly contaBancariaRepository: ContaBancariaRepository
    ) {}

    public async saveOne(contaBancariaModel: ContaBancariaModel) {
        return this.contaBancariaRepository.saveOne(contaBancariaModel);
    }

    public async findAll() {
        return this.contaBancariaRepository.findAll();
    }

    public async findOne(contaBancariaID: number) {
        return await this.contaBancariaRepository.findOne(contaBancariaID);
    }

}
