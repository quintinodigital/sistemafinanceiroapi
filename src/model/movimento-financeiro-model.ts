import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ObjectId } from 'bson';
import * as mongoose from "mongoose";
import { CategoriaMovimentoFinanceiroModel } from "./categoria-movimento-financeiro-model";
import { PagamentoMovimentoFinanceiroModel } from "./pagamento-movimento-financeiro-model";
import { PessoaModel } from "./pessoa-model";
import { ProdutoServicoModel } from "./produto-servico.model";

export type MovimentoFinanceiroDocument = MovimentoFinanceiroModel & Document;

@Schema({
    collection: "doc_movimento_financeiro"
})
export class MovimentoFinanceiroModel {

    public _id: ObjectId = new ObjectId();

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: PessoaModel.name, required: true })
    public pessoaFavorecidoModel: PessoaModel;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: CategoriaMovimentoFinanceiroModel.name, required: true })
    public categoriaMovimentoFinanceiroModel: CategoriaMovimentoFinanceiroModel;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: ProdutoServicoModel.name, required: true })
    public produtoServicoModelList: ProdutoServicoModel[];

    // FIXME -- Implementar no módulo de Gerenciar Arquivos
    public documentoModel: any[];

    @Prop({ required: true })
    public valorTotal: number;

    @Prop({ required: true, default: Date })
    public dataMovimentoFinanceiro: Date;

}

export const MovimentoFinanceiroSchema = SchemaFactory.createForClass(MovimentoFinanceiroModel);
