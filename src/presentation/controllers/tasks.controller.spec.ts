import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { FindByIdTasks } from '../../domain/modules/usecases/tasks/find-by-id';
import { Tasks } from '../../domain/modules/entities/tasks';
import { FindAllTasks } from '../../domain/modules/usecases/tasks/find-all';
import { TasksController } from './tasks.controller';
import { SaveTasks } from '../../domain/modules/usecases/tasks/save';

const list: Tasks[] = [new Tasks({ id: 1, task: 'test', done: false })];
const unique: Tasks = new Tasks({ id: 1, task: 'test', done: false });
describe('TasksController', () => {
  let tasksController: TasksController;
  let findAllTasks: FindAllTasks;
  let findByIdTasks: FindByIdTasks;
  let saveTasks: SaveTasks;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [
        {
          provide: FindAllTasks,
          useValue: {
            call: jest.fn().mockResolvedValue(list),
          },
        },
        {
          provide: FindByIdTasks,
          useValue: {
            call: jest.fn().mockResolvedValue(unique),
          },
        },
        {
          provide: SaveTasks,
          useValue: {
            call: jest.fn().mockResolvedValue(unique),
          },
        },
      ],
    }).compile();

    tasksController = module.get<TasksController>(TasksController);
    findAllTasks = module.get<FindAllTasks>(FindAllTasks);
    findByIdTasks = module.get<FindByIdTasks>(FindByIdTasks);
    saveTasks = module.get<SaveTasks>(SaveTasks);
  });

  it('should be defined', () => {
    expect(tasksController).toBeDefined();
  });

  describe('FindAll', () => {
    it('should be defined', async () => {
      expect(findAllTasks).toBeDefined();
    });

    it('should be equal success', async () => {
      expect(await tasksController.findAll()).toEqual(list);
      expect(findAllTasks.call).toHaveBeenCalledTimes(1);
    });

    it('should be equal exception', async () => {
      jest
        .spyOn(findAllTasks, 'call')
        .mockRejectedValueOnce(new BadRequestException());
      expect(tasksController.findAll()).rejects.toThrow(
        new BadRequestException(),
      );
    });
  });

  describe('FindById', () => {
    it('should be defined', async () => {
      expect(findByIdTasks).toBeDefined();
    });

    it('should be equal success', async () => {
      expect(await tasksController.findById(1)).toEqual(unique);
      expect(findByIdTasks.call).toHaveBeenCalledTimes(1);
    });

    it('should be equal exception', async () => {
      jest
        .spyOn(findByIdTasks, 'call')
        .mockRejectedValueOnce(new BadRequestException());
      expect(tasksController.findById(1)).rejects.toThrow(
        new BadRequestException(),
      );
    });
  });

  describe('Save', () => {
    it('should be defined', async () => {
      expect(saveTasks).toBeDefined();
    });

    it('should be equal success', async () => {
      expect(await tasksController.save(unique)).toEqual(unique);
      expect(saveTasks.call).toHaveBeenCalledTimes(1);
    });

    it('should be equal exception', async () => {
      jest
        .spyOn(saveTasks, 'call')
        .mockRejectedValueOnce(new BadRequestException());
      expect(tasksController.save(unique)).rejects.toThrow(
        new BadRequestException(),
      );
    });
  });
});
