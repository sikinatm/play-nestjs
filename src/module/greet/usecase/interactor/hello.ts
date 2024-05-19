import { Injectable, Provider } from '@nestjs/common';
import {
  HELLO_USECASE_TOKEN,
  HelloUseCase,
  HelloUseCaseInput,
  HelloUseCaseOutput,
} from '../port/hello';
import { Greet } from '../../domain/entity/hello';

@Injectable()
export class HelloInteractor implements HelloUseCase {
  handle = (input: HelloUseCaseInput): HelloUseCaseOutput => {
    const hello = new Greet(input.name);
    return hello.getHello();
  };
}

export const GreetInteractorProvider: Provider = {
  provide: HELLO_USECASE_TOKEN,
  useClass: HelloInteractor,
};
