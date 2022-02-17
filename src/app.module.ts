import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://josequintino:sistemafinanceiro@cluster0.srvgt.mongodb.net/db_sistema_financeiro?retryWrites=true&w=majority"),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
