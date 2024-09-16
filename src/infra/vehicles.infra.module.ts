import { Module } from '@nestjs/common';
import { MockDataset } from './db/mock/mock-dataset';
import { DatasetRepository } from './repositories/dataset.repository';
import { User } from './entities/user.entity';
import { UserRepository } from './repositories/user/user.repository';
import { Locality } from './entities/locality.entity';
import { LocalityRepository } from './repositories/locality/locality.repository';
import { Country } from './entities/country.entity';
import { CountryRepository } from './repositories/country/country.repository';

@Module({
  imports: [],
  providers: [
    MockDataset,
    {
      useValue: DatasetRepository<User>,
      provide: 'USER_REPOSITORY',
      useClass: UserRepository,
    },
    {
      useValue: DatasetRepository<Locality>,
      provide: 'LOCALITY_REPOSITORY',
      useClass: LocalityRepository,
    },
    {
      useValue: DatasetRepository<Country>,
      provide: 'COUNTRY_REPOSITORY',
      useClass: CountryRepository,
    },
  ],
  exports: [
    MockDataset,
    {
      useValue: DatasetRepository<User>,
      provide: 'USER_REPOSITORY',
      useClass: UserRepository,
    },
    {
      useValue: DatasetRepository<Locality>,
      provide: 'LOCALITY_REPOSITORY',
      useClass: LocalityRepository,
    },
    {
      useValue: DatasetRepository<Country>,
      provide: 'COUNTRY_REPOSITORY',
      useClass: CountryRepository,
    },
  ],
})
export class VehiclesInfraModule {}
