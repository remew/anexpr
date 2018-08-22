import FactorParser from './factor';
import SyntaxError from '../util/SyntaxError';

describe('FactorParser', () => {
  it('should be parse number', () => {
    const p = new FactorParser();
    expect(p.parse({str: '1 + 2', pos: 0})).toEqual({type: 'NumberLiteral', value: 1});
    expect(p.parse({str: '1 + 2', pos: 3})).toEqual({type: 'NumberLiteral', value: 2});
  });
  it('should be parse variable', () => {
    const p = new FactorParser();
    expect(p.parse({str: '$1 + $2', pos: 0})).toEqual({type: 'Variable', id: '$1'});
    expect(p.parse({str: '$1 + $2', pos: 4})).toEqual({type: 'Variable', id: '$2'});
  });
  it('should be parse expr', () => {
    const p = new FactorParser();
    expect(p.parse({str: '(2 + 3) * 3', pos: 0})).toEqual({
      type: 'BinaryOperation',
      left: {
        type: 'NumberLiteral',
        value: 2,
      },
      operand: '+',
      right: {
        type: 'NumberLiteral',
        value: 3,
      },
    });
  });
  it('may throw SyntaxError', () => {
    const p = new FactorParser();
    expect(() => p.parse({str: '1 + hoge', pos: 3})).toThrow(SyntaxError);
  });
});
