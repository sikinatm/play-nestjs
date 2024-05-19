export class Greet {
  constructor(private readonly name: string) {}

  getHello(): string {
    return `Hello ${this.name}!`;
  }
}
