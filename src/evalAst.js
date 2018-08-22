// @flow
import type {AST} from "./types";

export default function evalAst(ast: AST, variables: Object, operation: {add: Function, sub: Function, mul: Function, div: Function}): number {
  if (ast.type === 'NumberLiteral') {
    return ast.value;
  }
  if (ast.type === 'Variable') {
    return variables[ast.value];
  }
  if (ast.type === 'BinaryOperation') {
    const {operator} = ast;
    const left = evalAst(ast.left, variables, operation);
    const right = evalAst(ast.right, variables, operation);

    switch (operator) {
      case '+':
        return operation.add(left, right);
      case '-':
        return operation.sub(left, right);
      case '*':
        return operation.mul(left, right);
      case '/':
        return operation.div(left, right);
    }
  }
  throw new Error(`Unknown AST Type:${ast.type}`)
}
