import { Module } from '@nestjs/common';
import { UserUseCasesService } from './user.use-cases.service';
import { UserFactoryService } from './user-factory.use-cases.service';
import { DataServicesModule } from '../../../infraestructure/services/data-services.module';

@Module({
  imports: [DataServicesModule],
  providers: [UserUseCasesService, UserFactoryService],
  exports: [UserUseCasesService, UserFactoryService],
})
export class UserUseCasesModule {}
