// @flow

export type NumberTree = {|
  type: 'NumberLiteral',
  value: number,
|};

export type VariableTree = {|
  type: 'Variable',
  value: string,
|};

export type OperandTree = NumberTree | VariableTree;

export type OperatorEnum = '+' | '-' | '*' | '/';

export type BinaryOperationTree = {|
  type: 'BinaryOperation',
  left: OperandTree | BinaryOperationTree,
  operand: OperatorEnum,
  right: OperandTree | BinaryOperationTree,
|};

export type AST = NumberTree | VariableTree | BinaryOperationTree;

export interface IParser {
  parse(s: Source): AST;
}

export type Source = {
  str: string,
  pos: number,
}
