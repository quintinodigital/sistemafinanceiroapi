import { Injectable } from '@nestjs/common';
import { ContratoModel } from './../model/contrato-model';
import { ContratoRepository } from './../repository/contrato-repository';

@Injectable()
export class ContratoService {

    constructor(
        private readonly contratoRepository: ContratoRepository
    ) {}

    public async saveOne(contratoModel: ContratoModel) {
        return this.contratoRepository.saveOne(contratoModel);
    }

    public async findAll() {
        return this.contratoRepository.findAll();
    }

    public async findOne(contratoID: number) {
        return await this.contratoRepository.findOne(contratoID);
    }

}
