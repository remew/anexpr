// @flow

export type NumberTree = {|
  type: 'NumberLiteral',
  value: number,
|};

export type AST = NumberTree;

export interface IParser {
  parse(s: Source): AST;
}

export type Source = {
  str: string,
  pos: number,
}
