import { Test, TestingModule } from '@nestjs/testing';
import { GreetController } from './hello';
import { GreetInteractorProvider } from '../../usecase/interactor/hello';

describe('GreetController', () => {
  let helloController: GreetController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GreetController],
      providers: [GreetInteractorProvider],
    }).compile();

    helloController = app.get<GreetController>(GreetController);
  });

  describe('root', () => {
    it('should return "Greet World!"', () => {
      expect(helloController.getHello('Tom')).toBe('Hello Tom!');
    });
  });
});
