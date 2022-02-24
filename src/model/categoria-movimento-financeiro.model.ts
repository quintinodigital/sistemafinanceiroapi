import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ObjectId } from 'bson';

export type CategoriaMovimentoFinanceiroDocument = CategoriaMovimentoFinanceiroModel & Document;

@Schema({ collection: "doc_categoria_movimento_financeiro" })
export class CategoriaMovimentoFinanceiroModel {

    public _id: ObjectId = new ObjectId();    
    
    @Prop({ required: true })
    public descricao: string;

}

export const CategoriaMovimentoFinanceiroSchema = SchemaFactory.createForClass(CategoriaMovimentoFinanceiroModel);
