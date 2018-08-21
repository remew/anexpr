// @flow

export default class SyntaxError extends Error {
  constructor(message: string) {
    super('SyntaxError: ' + message);
  }
}
