import ExprParser from './expr';

describe('ExprParser', () => {
  it('should be parse expr', () => {
    const p = new ExprParser();
    expect(p.parse({str: '$1 + 2 * $2', pos: 0})).toEqual({
      type: 'BinaryOperation',
      left: {
        type: 'Variable',
        id: '$1',
      },
      operand: '+',
      right: {
        type: 'BinaryOperation',
        left: {
          type: 'NumberLiteral',
          value: 2,
        },
        operand: '*',
        right: {
          type: 'Variable',
          id: '$2',
        },
      },
    });
    expect(p.parse({str: '1', pos: 0})).toEqual({type: 'NumberLiteral', value: 1});
    expect(p.parse({str: '$1', pos: 0})).toEqual({type: 'Variable', id: '$1'});
  });
  it('should be parse complex expr', () => {
    const p = new ExprParser();
    expect(p.parse({str: '($1 + 2) * $2 + (($1 + $2) / 2)', pos: 0})).toEqual({
      type: 'BinaryOperation',
      left: {
        type: 'BinaryOperation',
        left: {
          type: 'BinaryOperation',
          left: {
            type: 'Variable',
            id: '$1',
          },
          operand: '+',
          right: {
            type: 'NumberLiteral',
            value: 2,
          },
        },
        operand: '*',
        right: {
          type: 'Variable',
          id: '$2',
        },
      },
      operand: '+',
      right: {
        type: 'BinaryOperation',
        left: {
          type: 'BinaryOperation',
          left: {
            type: 'Variable',
            id: '$1',
          },
          operand: '+',
          right: {
            type: 'Variable',
            id: '$2',
          },
        },
        operand: '/',
        right: {
          type: 'NumberLiteral',
          value: 2,
        },
      },
    });
  });
  // TODO: error test
});
