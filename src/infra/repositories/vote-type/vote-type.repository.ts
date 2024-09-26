import { Injectable } from '@nestjs/common';
import { DatasetRepository } from '../dataset.repository';
import { VoteType } from '../../entities/voteType.entity';
import { MockDataset } from '../../db/mock/mock-dataset';

@Injectable()
export class VoteTypeRepository extends DatasetRepository<VoteType> {
  constructor(private readonly mockDb: MockDataset) {
    super();
  }
  getAll(): VoteType[] {
    return this.mockDb.voteTypes.getAll();
  }
  getById(id: string): VoteType {
    return this.mockDb.voteTypes.getById(id);
  }
  save(entity: VoteType): string {
    return this.mockDb.voteTypes.save(entity);
  }
  update(id: string, entity: VoteType): void {
    this.mockDb.voteTypes.update(entity);
  }
  delete(id: string): void {
    this.mockDb.voteTypes.delete(id);
  }
  // TODO: Implement
}
