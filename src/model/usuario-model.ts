import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ObjectId } from 'bson';
import * as mongoose from "mongoose";

export type UsuarioDocument = UsuarioModel & Document;

@Schema({
    collection: "doc_usuario"
})
export class UsuarioModel {

    public _id: ObjectId = new ObjectId();

    @Prop({ required: true })
    public nome: string;

    @Prop({ required: true })
    public email: string;

    @Prop({ required: true })
    public telefone: string;

    @Prop({ required: true })
    public senha: string;

    @Prop({ required: true })
    public dataHoraCadastro: Date;

    @Prop({ required: true })
    public isAtivo: boolean;

}

export const UsuarioSchema = SchemaFactory.createForClass(UsuarioModel);
