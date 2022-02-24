import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ObjectId } from 'bson';
import * as mongoose from "mongoose";
import { CategoriaPagamentoModel } from "./categoria-pagamento-model";
import { MovimentoFinanceiroModel } from "./movimento-financeiro-model";
import { PessoaModel } from "./pessoa-model";

export type PagamentoMovimentoFinanceiroDocument = PagamentoMovimentoFinanceiroModel & Document;

@Schema({
    collection: "doc_pagamento_movimento_financeiro"
})
export class PagamentoMovimentoFinanceiroModel {

    public _id: ObjectId = new ObjectId();

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: PessoaModel.name, required: true })
    public pessoaPagamentoModel: PessoaModel;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: CategoriaPagamentoModel.name, required: true })
    public categoriaPagamentoModel: CategoriaPagamentoModel;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: PessoaModel.name, required: true })
    public pessoaFontePagamentoModel: PessoaModel;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: MovimentoFinanceiroModel.name, required: true })
    public movimentoFinanceiroModel: MovimentoFinanceiroModel;

    @Prop({ required: true, default: 0.0 })
    public valorPagamento: number;

    @Prop()
    public dataPagamentoMovimentoFinanceiro: Date;

}

export const PagamentoMovimentoFinanceiroSchema = SchemaFactory.createForClass(PagamentoMovimentoFinanceiroModel);
