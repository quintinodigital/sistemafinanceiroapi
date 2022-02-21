import { Injectable } from '@nestjs/common';
import { PessoaModel } from './../model/pessoa-model';
import { PessoaRepository } from './../repository/pessoa-repository';

@Injectable()
export class PessoaService {

    constructor(
        private readonly pessoaRepository: PessoaRepository
    ) {}

    public async saveOne(pessoaModel: PessoaModel) {
        return this.pessoaRepository.saveOne(pessoaModel);
    }

    public async findAll() {
        return this.pessoaRepository.findAll();
    }

    public async findOne(usuarioID: number) {
        return await this.pessoaRepository.findOne(usuarioID);
    }

}
