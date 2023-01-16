import { Model } from 'mongoose';
import { IGenericRepository } from 'src/domain/abstract/generic-repository.abstract';

export class MongoGenericRepository<T> implements IGenericRepository<T> {
  private _repository: Model<T>;
  private _populateOnFind: string[];

  constructor(repository: Model<T>, populateOnFind: string[] = []) {
    this._repository = repository;
    this._populateOnFind = populateOnFind;
  }

  findAll(): Promise<T[]> {
    return this._repository.find().populate(this._populateOnFind).exec();
  }

  findById(id: any): Promise<any> {
    return this._repository.findById(id).populate(this._populateOnFind).exec();
  }

  create(item: T): Promise<T> {
    return this._repository.create(item);
  }

  update(id: any, item: T): Promise<T> {
    return this._repository.findByIdAndUpdate(id, item, { new: true }).exec();
  }

  delete(id: any): Promise<T> {
    return this._repository.findByIdAndDelete(id).exec();
  }
}
