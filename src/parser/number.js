// @flow
import SyntaxError from '../util/SyntaxError';
import ParseError from '../util/ParseError';
import type {Source, IParser, NumberTree} from '../types';

export default class NumberParser implements IParser {
  parse(s: Source): NumberTree {
    let token = '';
    while (s.str[s.pos] === ' ' || s.str[s.pos] === '\n') s.pos++; // skip whitespaces
    while (s.pos < s.str.length) {
      const c = s.str[s.pos];
      if (c === ' ' || c === '\n' || c === ')') {
        break;
      }
      token += c;
      s.pos++;
    }
    if (token === '') {
      throw new SyntaxError(`it should be some number. '${s.str[s.pos]}' is not beginning of valid number`);
    }

    const v = +token;
    if (Number.isNaN(v)) {
      throw new ParseError(`${v} is not a valid number`);
    }

    return {
      type: 'NumberLiteral',
      value: v,
    }
  }
}
