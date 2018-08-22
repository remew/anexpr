// @flow
import ExprParser from './parser/expr';
import evalAst from './evalAst';

export default function CalculatorGenerator(operation: {add: Function, sub: Function, mul: Function, div: Function}) {
  return function calc(strings: Array<string>, ...values: Array<any>) {
    const source = strings.reduce((str1, str2, i) => {
      return str1 + '$' + (i - 1) + str2;
    });
    const variableTable = values.reduce((result, value, i) => {
      return {...result, ['$' + i]: value};
    }, {});

    const p = new ExprParser();
    return evalAst(p.parse({str: source, pos: 0,}), variableTable, operation);
  }
}
