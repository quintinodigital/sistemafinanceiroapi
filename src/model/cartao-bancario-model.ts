import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ObjectId } from 'bson';
import * as mongoose from "mongoose";
import { ContaBancariaModel } from './conta-bancaria-model';
import { ContratoModel } from "./contrato-model";

export type CartaoBancarioDocument = CartaoBancarioModel & Document;

@Schema({
    collection: "doc_cartao-bancario"
})
export class CartaoBancarioModel {

    public _id: ObjectId = new ObjectId();

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: ContratoModel.name, required: true })
    public contaBancariaModel: ContaBancariaModel;

    @Prop({ required: true })
    public numeroCartao: string;

    @Prop({ required: true })
    public dataVencimento: Date;

    @Prop({ required: true, default: 0.0 })
    public valorLimiteCartao: number;

    @Prop({ required: true, default: true })
    public isAtivo: boolean;

}

export const CartaoBancarioSchema = SchemaFactory.createForClass(CartaoBancarioModel);
