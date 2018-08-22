import ExprParser from './parser/expr'
import evalAst from './evalAst';

describe('evalAst', () => {
  const variableTable = {
    $1: 10,
    $2: 20,
  };
  const generalOperation = {
      add: (a, b) => a + b,
      sub: (a, b) => a - b,
      mul: (a, b) => a * b,
      div: (a, b) => a / b,
    };
  it('should be parse expr', () => {
    const p = new ExprParser();
    expect(evalAst(p.parse({str: '$1 + 2 * $2', pos: 0}), variableTable, generalOperation)).toEqual(50);
  });
  it('should be parse complex expr', () => {
    const p = new ExprParser();
    expect(evalAst(p.parse({str: '($1 + 2) * $2 + (($1 + $2) / 2)', pos: 0}), variableTable, generalOperation)).toEqual(255);
  });
  // TODO: error test
});
