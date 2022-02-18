import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './module/usuario.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://josequintino:sistemafinanceiro@cluster0.srvgt.mongodb.net/db_sistema_financeiro?retryWrites=true&w=majority"),
    // MongooseModule.forRoot("mongodb://localhost/db_sistema_financeiro"),
    UsuarioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
