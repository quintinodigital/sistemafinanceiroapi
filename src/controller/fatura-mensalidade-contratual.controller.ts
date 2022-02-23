import { Body, Controller, Get, Post } from '@nestjs/common';
import { FaturaMensalidadeContratualModel } from '../model/fatura-mensalidade-contratual-model';
import { FaturaMensalidadeContratualService } from '../service/fatura-mensalidade-contratual.service';

@Controller('fatura-mensalidade-contratual')
export class FaturaMensalidadeContratualController {

    constructor(
        private readonly faturaMensalidadeContratualService: FaturaMensalidadeContratualService
    ) {}

    @Post()
    public async saveOne(@Body() faturaMensalidadeContratualModel: FaturaMensalidadeContratualModel) {
        return this.faturaMensalidadeContratualService.saveOne(faturaMensalidadeContratualModel);
    }

    @Get()
    public async findAll() {
        return await this.faturaMensalidadeContratualService.findAll();
    }
    
}
