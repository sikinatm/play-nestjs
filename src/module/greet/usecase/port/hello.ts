export type HelloUseCaseInput = {
  name: string;
};

export type HelloUseCaseOutput = string;

export const HELLO_USECASE_TOKEN = 'HELLO_USEDCASE_TOKEN';

export interface HelloUseCase {
  handle(input: HelloUseCaseInput): HelloUseCaseOutput;
}
