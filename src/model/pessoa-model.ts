import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ObjectId } from 'bson';

export type PessoaDocument = PessoaModel & Document;

@Schema({
    collection: "doc_pessoa"
})
export class PessoaModel {

    public _id: ObjectId = new ObjectId();

    @Prop({ required: true })
    public nome: string;
    
    @Prop({ required: true, default: Date() })
    public dataHoraCadastro: Date;

    @Prop({ required: true, default: true })
    public isAtivo: boolean;

}

export const PessoaSchema = SchemaFactory.createForClass(PessoaModel);
