// @flow
import FactorParser from './factor';
import type {Source, IParser, AST} from '../types';

export default class TermParser implements IParser {
  parse(s: Source): AST {
    while (s.str[s.pos] === ' ' || s.str[s.pos] === '\n') s.pos++; // skip whitespaces
    const factorParser: FactorParser = new FactorParser();

    let left = factorParser.parse(s);
    while (true) {
      while (s.str[s.pos] === ' ' || s.str[s.pos] === '\n') s.pos++; // skip whitespaces
      if (s.pos === s.str.length) {
        return left;
      }

      switch (s.str[s.pos]) {
        case '*':
        case '/':
          const operand = s.str[s.pos];
          s.pos++;
          while (s.str[s.pos] === ' ' || s.str[s.pos] === '\n') s.pos++; // skip whitespaces
          const right = factorParser.parse(s);
          const tree = {
            type: 'BinaryOperation',
            left,
            operand,
            right,
          };
          left = tree;
          break;
        default:
          return left;
      }
    }
  }
}
