import { Module } from '@nestjs/common';
import { GreetController } from './greet/adapter/controller/hello';
import { GreetInteractorProvider } from './greet/usecase/interactor/hello';

@Module({
  imports: [],
  controllers: [GreetController],
  providers: [GreetInteractorProvider],
})
export class GreetModule {}
