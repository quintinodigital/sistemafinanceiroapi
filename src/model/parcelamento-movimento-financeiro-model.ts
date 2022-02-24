import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ObjectId } from 'bson';
import * as mongoose from "mongoose";
import { MovimentoFinanceiroModel } from "./movimento-financeiro-model";

export type ParcelamentoMovimentoFinanceiroDocument = ParcelamentoMovimentoFinanceiroModel & Document;

@Schema({
    collection: "doc_parcelamento_movimento_financeiro"
})
export class ParcelamentoMovimentoFinanceiroModel {

    public _id: ObjectId = new ObjectId();

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: MovimentoFinanceiroModel.name, required: true })
    public movimentoFinanceiroModel: MovimentoFinanceiroModel;

    @Prop({ required: true, default: 0.0 })
    public valorParcela: number;

    @Prop({ required: true })
    public dataVencimentoParcela: Date;

    @Prop({ required: true })
    public dataPagamentoParcela: Date;

    @Prop({ required: true, default: 1 })
    public numeroParcela: number;

    @Prop({ required: true, default: 1 })
    public quantidadeParcela: number;

}

export const ParcelamentoMovimentoFinanceiroSchema = SchemaFactory.createForClass(ParcelamentoMovimentoFinanceiroModel);
