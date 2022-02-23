import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CartaoBancarioController } from './../controller/cartao-bancario.controller';
import { CartaoBancarioModel, CartaoBancarioSchema } from './../model/cartao-bancario-model';
import { CartaoBancarioRepository } from './../repository/cartao-bancario-repository';
import { CartaoBancarioService } from './../service/cartao-bancario.service';

@Module({
    imports: [
        MongooseModule.forFeature([{name: CartaoBancarioModel.name, schema: CartaoBancarioSchema}]),
    ],
    controllers: [CartaoBancarioController],
    providers: [CartaoBancarioService, CartaoBancarioRepository],
    exports: [CartaoBancarioService]
})
export class CartaoBancarioModule { }
