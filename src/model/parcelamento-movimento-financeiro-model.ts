import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ObjectId } from 'bson';

export type ParcelamentoMovimentoFinanceiroDocument = ParcelamentoMovimentoFinanceiroModel & Document;

@Schema({
    collection: "doc_parcelamento_movimento_financeiro"
})
export class ParcelamentoMovimentoFinanceiroModel {

    public _id: ObjectId = new ObjectId();

    @Prop({ required: true, default: 0.0 })
    public valorParcela: number;

    @Prop({ required: true })
    public dataVencimentoParcela: Date;

    @Prop({ required: true })
    public dataPagamentoParcela: Date;

    @Prop({ required: true, default: 1 })
    public numeroParcela: number;

    @Prop({ required: true, default: 1 })
    public numeroMaximoParcela: number;

}

export const ParcelamentoMovimentoFinanceiroSchema = SchemaFactory.createForClass(ParcelamentoMovimentoFinanceiroModel);
