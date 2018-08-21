import ExprParser from './expr';

describe('ExprParser', () => {
  it('should be parse term', () => {
    const p = new ExprParser();
    expect(p.parse({str: '$1 + 2 * $2', pos: 0})).toEqual({
      type: 'BinaryOperation',
      left: {
        type: 'Variable',
        value: '$1',
      },
      operator: '+',
      right: {
        type: 'BinaryOperation',
        left: {
          type: 'NumberLiteral',
          value: 2,
        },
        operator: '*',
        right: {
          type: 'Variable',
          value: '$2',
        },
      },
    });
    expect(p.parse({str: '1', pos: 0})).toEqual({type: 'NumberLiteral', value: 1});
    expect(p.parse({str: '$1', pos: 0})).toEqual({type: 'Variable', value: '$1'});
  });
  // TODO: error test
});
