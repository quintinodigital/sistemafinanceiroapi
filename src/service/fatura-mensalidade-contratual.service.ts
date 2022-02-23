import { Injectable } from '@nestjs/common';
import { FaturaMensalidadeContratualModel } from '../model/fatura-mensalidade-contratual-model';
import { FaturaMensalidadeContratualRepository } from '../repository/fatura-mensalidade-contratual-repository';

@Injectable()
export class FaturaMensalidadeContratualService {

    constructor(
        private readonly faturaMensalidadeContratualRepository: FaturaMensalidadeContratualRepository
    ) {}

    public async saveOne(faturaMensalidadeContratualModel: FaturaMensalidadeContratualModel) {
        return this.faturaMensalidadeContratualRepository.saveOne(faturaMensalidadeContratualModel);
    }

    public async findAll() {
        return this.faturaMensalidadeContratualRepository.findAll();
    }

}
