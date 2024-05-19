import { Controller, Get, Inject } from '@nestjs/common';
import { HELLO_USECASE_TOKEN, HelloUseCase } from '../../usecase/port/hello';

@Controller()
export class GreetController {
  constructor(
    @Inject(HELLO_USECASE_TOKEN) private readonly helloUseCase: HelloUseCase,
  ) {}

  @Get()
  getHello(name: string): string {
    return this.helloUseCase.handle({ name });
  }
}
