// @flow
import TermParser from './term';
import type {Source, IParser, BinaryOperationTree} from '../types';

export default class ExprParser implements IParser {
  parse(s: Source): BinaryOperationTree {
    while (s.str[s.pos] === ' ' || s.str[s.pos] === '\n') s.pos++; // skip whitespaces
    const termParser: TermParser = new TermParser();

    let left = termParser.parse(s);
    while (true) {
      while (s.str[s.pos] === ' ' || s.str[s.pos] === '\n') s.pos++; // skip whitespaces
      if (s.pos === s.str.length) {
        return left;
      }

      switch (s.str[s.pos]) {
        case '+':
        case '-':
          const operator = s.str[s.pos];
          s.pos++;
          while (s.str[s.pos] === ' ' || s.str[s.pos] === '\n') s.pos++; // skip whitespaces
          const right = termParser.parse(s);
          const tree = {
            type: 'BinaryOperation',
            left,
            operator,
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
