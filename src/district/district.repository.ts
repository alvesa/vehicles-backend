import { Injectable } from '@nestjs/common';

export class DistrictEntity {
  id: string;
  name: string;
}

@Injectable()
export class DistrictRepository {
  district: DistrictEntity[] = [];

  constructor() {
    this.district = [
      {
        id: '1',
        name: 'District 1',
      },
      {
        id: '2',
        name: 'District 2',
      },
      {
        id: '3',
        name: 'District 3',
      },
      {
        id: '4',
        name: 'District 4',
      },
      {
        id: '5',
        name: 'District 5',
      },
    ];
  }

  getAll(): DistrictEntity[] {
    return this.district;
  }
}
