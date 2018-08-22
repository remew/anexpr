import TermParser from './term';

describe('TermParser', () => {
  it('should be parse term', () => {
    const p = new TermParser();
    expect(p.parse({str: '$1 * 2 / 3', pos: 0})).toEqual({
      type: 'BinaryOperation',
      left: {
        type: 'BinaryOperation',
        left: {
          type: 'Variable',
          id: '$1',
        },
        operand: '*',
        right: {
          type: 'NumberLiteral',
          value: 2,
        },
      },
      operand: '/',
      right: {
        type: 'NumberLiteral',
        value: 3,
      }
    });
    expect(p.parse({str: '1', pos: 0})).toEqual({type: 'NumberLiteral', value: 1});
    expect(p.parse({str: '$1', pos: 0})).toEqual({type: 'Variable', id: '$1'});
  });
  // TODO: error test
});
