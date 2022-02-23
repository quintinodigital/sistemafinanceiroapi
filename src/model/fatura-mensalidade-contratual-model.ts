import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ObjectId } from 'bson';
import * as mongoose from "mongoose";
import { CartaoBancarioModel } from './cartao-bancario-model';
import { ContratoModel } from "./contrato-model";

export type FaturaMensalidadeContratualDocument = FaturaMensalidadeContratualModel & Document;

@Schema({
    collection: "doc_fatura_mensalidade_contratual"
})
export class FaturaMensalidadeContratualModel {

    public _id: ObjectId = new ObjectId();

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: CartaoBancarioModel.name, required: false })
    public cartaoBancarioModel: CartaoBancarioModel;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: ContratoModel.name, required: false })
    public contratoModel: ContratoModel;

    @Prop({ required: true })
    public dataVencimento: Date;

    @Prop()
    public dataPagamento: Date;

}

export const FaturaMensalidadeContratualSchema = SchemaFactory.createForClass(FaturaMensalidadeContratualModel);
