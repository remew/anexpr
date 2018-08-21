// @flow

export default class ParseError extends Error {
  constructor(message: string) {
    super('ParseError: ' + message);
  }
}
