// @flow

export type NumberTree = {|
  type: 'NumberLiteral',
  value: number,
|};

export type VariableTree = {|
  type: 'Variable',
  value: string,
|};

export type AST = NumberTree | VariableTree;

export interface IParser {
  parse(s: Source): AST;
}

export type Source = {
  str: string,
  pos: number,
}
