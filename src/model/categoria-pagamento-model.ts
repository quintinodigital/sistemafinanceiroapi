import { Schema, SchemaFactory } from "@nestjs/mongoose";
import { ObjectId } from 'bson';

export type CategoriaPagamentoDocument = CategoriaPagamentoModel & Document;

@Schema({
    collection: "doc_categoria_pagamento"
})
export class CategoriaPagamentoModel {

    public _id: ObjectId = new ObjectId();

    public descricao: string;

}

export const CategoriaPagamentoSchema = SchemaFactory.createForClass(CategoriaPagamentoModel);
