import { Test } from '@nestjs/testing';

import { VehiclesDomainModule, VersionDto } from '../../../domain';
import { NotFoundException } from '@nestjs/common';
import { VersionController } from './version.controller';

describe(VersionController.name, () => {
  let controller: VersionController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [VehiclesDomainModule],
      controllers: [VersionController],
      exports: [],
    }).compile();

    controller = module.get<VersionController>(VersionController);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return initial 3 on getAll registered by seed', () => {
    expect(controller.getAll()).toHaveLength(3);
  });

  it('should return throw NotFoundException', () => {
    try {
      controller.getById('version-undefined');
    } catch (error: Error | any) {
      expect(error).toBeInstanceOf(NotFoundException);
      expect(error.message).toBe('Version not found');
    }
  });

  it('should return first item', () => {
    const result = controller.getById('1');

    expect(result).toMatchObject(
      expect.objectContaining({
        id: '1',
        version: 'version1',
      }),
    );
  });

  it('should return a new registered version', () => {
    const request = new VersionDto('Test version');
    const versionId = controller.addVersion(request);

    expect(controller.getById(versionId).id).toBe(versionId);
  });
});
