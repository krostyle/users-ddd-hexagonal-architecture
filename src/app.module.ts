import { Module } from '@nestjs/common';
import { UserUseCasesModule } from './application/use-cases/user';
import { UserController } from './infraestructure/controllers/user/user.controller';
import { DataServicesModule } from './infraestructure/services/data-services.module';

@Module({
  imports: [UserUseCasesModule, DataServicesModule],
  controllers: [UserController],
  providers: [],
})
export class AppModule {}
