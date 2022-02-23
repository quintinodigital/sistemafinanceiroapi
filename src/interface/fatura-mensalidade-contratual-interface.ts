import { FaturaMensalidadeContratualModel } from '../model/fatura-mensalidade-contratual-model';
export class FaturaMensalidadeContratualInterface {

    public async saveOne(faturaMensalidadeContratualModel: any) { }

    public async saveAll(faturaMensalidadeContratualModelList: FaturaMensalidadeContratualModel[]) { }

    public async findOne(faturaMensalidadeContratualID: number) { }

    public async findAll() { }

    public async updateOne(faturaMensalidadeContratualModel: FaturaMensalidadeContratualModel) { }

    public async updateAll() { }

    public async deleteOne(faturaMensalidadeContratualModel: FaturaMensalidadeContratualModel) { }

    public async deleteAll() { }

}
