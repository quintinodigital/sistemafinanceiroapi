import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ObjectId } from 'bson';

export type ProdutoServicoDocument = ProdutoServicoModel & Document;

@Schema({
    collection: "doc_produto_servico"
})
export class ProdutoServicoModel {

    public _id: ObjectId = new ObjectId();

    @Prop({ required: true, unique: true })
    public nome: string;

}

export const ProdutoServicoSchema = SchemaFactory.createForClass(ProdutoServicoModel);
