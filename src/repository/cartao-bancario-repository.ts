import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { CartaoBancarioModel } from '../model/cartao-bancario-model';

@Injectable()
export class CartaoBancarioRepository {

    constructor(
        @InjectModel(CartaoBancarioModel.name) 
        private readonly cartaoBancarioRepository: Model<CartaoBancarioModel>
    ) { }

    public async saveOne(cartaoBancarioModel: CartaoBancarioModel) {
        return await new this.cartaoBancarioRepository(cartaoBancarioModel).save();
    }

    public async saveAll(cartaoBancarioModelList: CartaoBancarioModel[]) {
        for(let Pessoa of cartaoBancarioModelList) {
            await this.saveOne(Pessoa);
        }
        return cartaoBancarioModelList;
    }

    public async findAll() {
        return await this.cartaoBancarioRepository.find();
    }

    public async findOne(cartaoBancarioID: number) {
        return await this.cartaoBancarioRepository.findById(cartaoBancarioID);
    }

}
