import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IDataServices } from 'src/domain/abstract/data-services.abstract';
import { MongoGenericRepository } from './mongo-generic-repository';
import { User, UserDocument } from './model/user.model';

@Injectable()
export class MongoDataService implements IDataServices, OnApplicationBootstrap {
  users: MongoGenericRepository<User>;
  constructor(
    @InjectModel(User.name)
    private UserRepository: Model<User>,
  ) {}

  onApplicationBootstrap() {
    this.users = new MongoGenericRepository<User>(this.UserRepository);
  }
}
