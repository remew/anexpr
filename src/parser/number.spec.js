import NumberParser from './number';
import SyntaxError from '../util/SyntaxError';
import ParseError from '../util/ParseError';

describe('NumberParser', () => {
  it('should be parse number', () => {
    const p = new NumberParser();
    expect(p.parse({str: '1 + 2', pos: 0})).toEqual({type: 'NumberLiteral', value: 1});
    expect(p.parse({str: '1 + 2', pos: 3})).toEqual({type: 'NumberLiteral', value: 2});
  });
  it('may throw SyntaxError', () => {
    const p = new NumberParser();
    expect(() => p.parse({str: '', pos: 0})).toThrow(SyntaxError);
  });
  it('may throw ParseError', () => {
    const p = new NumberParser();
    expect(() => p.parse({str: '42hoge', pos: 0})).toThrow(ParseError);
  });
});
