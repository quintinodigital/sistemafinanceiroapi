import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ObjectId } from 'bson';
import * as mongoose from "mongoose";
import { PessoaModel } from './pessoa-model';

export type ContratoDocument = ContratoModel & Document;

@Schema({
    collection: "doc_contrato"
})
export class ContratoModel {

    public _id: ObjectId = new ObjectId();

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: PessoaModel.name, required: true })
    public pessoaModel: PessoaModel;

    @Prop({ required: true })
    public identificador: string;

    @Prop()
    public dataInicioContrato: Date;

    @Prop()
    public dataFimContrato: Date;

    @Prop({ required: true })
    public diaVencimentoFaturaMensalidade: Date;

    @Prop({ required: true, default: true })
    public isAtivo: boolean;

}

export const ContratoSchema = SchemaFactory.createForClass(ContratoModel);
