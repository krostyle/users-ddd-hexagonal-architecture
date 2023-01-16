import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './model/user.model';
import { DATA_BASE_CONFIG } from 'src/infraestructure/configuration';
import { IDataServices } from '../../../domain/abstract/data-services.abstract';
import { MongoDataService } from './mongo-data-services.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    MongooseModule.forRoot(DATA_BASE_CONFIG.mongoConnectionString),
  ],
  providers: [
    {
      provide: IDataServices,
      useClass: MongoDataService,
    },
  ],
  exports: [IDataServices],
})
export class MongoDataServicesModule {}
