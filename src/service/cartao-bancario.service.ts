import { Injectable } from '@nestjs/common';
import { CartaoBancarioModel } from './../model/cartao-bancario-model';
import { CartaoBancarioRepository } from './../repository/cartao-bancario-repository';

@Injectable()
export class CartaoBancarioService {

    constructor(
        private readonly cartaoBancarioRepository: CartaoBancarioRepository
    ) {}

    public async saveOne(cartaoBancarioModel: CartaoBancarioModel) {
        return this.cartaoBancarioRepository.saveOne(cartaoBancarioModel);
    }

    public async findAll() {
        return this.cartaoBancarioRepository.findAll();
    }

    public async findOne(cartaoBancarioID: number) {
        return await this.cartaoBancarioRepository.findOne(cartaoBancarioID);
    }

}
