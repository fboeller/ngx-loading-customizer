export class LoadableError extends Error {
  constructor(public readonly message: string) {
    super(message);
    this.name = 'LoadableError';
  }
}
