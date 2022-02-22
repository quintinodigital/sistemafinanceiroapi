import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ObjectId } from 'bson';
import * as mongoose from "mongoose";
import { ContratoModel } from "./contrato-model";

export type ContaBancariaDocument = ContaBancariaModel & Document;

@Schema({
    collection: "doc_conta_bancaria"
})
export class ContaBancariaModel {

    public _id: ObjectId = new ObjectId();

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: ContratoModel.name, required: true })
    public contratoModel: ContratoModel;

    @Prop({ required: true })
    public numeroAgencia: string;

    @Prop()
    public numeroContaBancaria: string;

    @Prop({ required: true, default: true })
    public isAtivo: boolean;

}

export const ContaBancariaSchema = SchemaFactory.createForClass(ContaBancariaModel);
