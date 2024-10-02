import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AutorController } from './controllers/autor.controller';
import { Autor, AutorSchema } from './models/autor.entities';
import { AutorRepository } from './repositories/autor.repository';
import { IAutorRepository } from './repositories/interfaces/autor.interface.repository';
import { AutorService } from './services/autor.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Autor.name,
        schema: AutorSchema,
      },
    ]),
  ],
  providers: [
    {
      provide: IAutorRepository,
      useClass: AutorRepository,
    },
    AutorService,
  ],
  controllers: [AutorController],
})
export class AutorModule {}
