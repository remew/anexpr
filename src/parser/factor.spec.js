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
    expect(p.parse({str: '$1 + $2', pos: 0})).toEqual({type: 'Variable', value: '$1'});
    expect(p.parse({str: '$1 + $2', pos: 4})).toEqual({type: 'Variable', value: '$2'});
  });
  it('may throw SyntaxError', () => {
    const p = new FactorParser();
    expect(() => p.parse({str: '1 + hoge', pos: 3})).toThrow(SyntaxError);
  });
});
