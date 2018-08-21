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
          value: '$1',
        },
        operator: '*',
        right: {
          type: 'NumberLiteral',
          value: 2,
        },
      },
      operator: '/',
      right: {
        type: 'NumberLiteral',
        value: 3,
      }
    });
    expect(p.parse({str: '1', pos: 0})).toEqual({type: 'NumberLiteral', value: 1});
    expect(p.parse({str: '$1', pos: 0})).toEqual({type: 'Variable', value: '$1'});
  });
  // TODO: error test
});
