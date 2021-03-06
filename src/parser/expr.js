// @flow
import TermParser from './term';
import type {Source, IParser, AST} from '../types';

export default class ExprParser implements IParser {
  parse(s: Source): AST {
    while (s.str[s.pos] === ' ' || s.str[s.pos] === '\n') s.pos++; // skip whitespaces
    const termParser: TermParser = new TermParser();

    let left: AST = termParser.parse(s);
    while (s.pos < s.str.length) {
      while (s.str[s.pos] === ' ' || s.str[s.pos] === '\n') s.pos++; // skip whitespaces
      if (s.pos === s.str.length) {
        return left;
      }

      switch (s.str[s.pos]) {
        case '+':
        case '-':
          const operand = s.str[s.pos];
          s.pos++;
          while (s.str[s.pos] === ' ' || s.str[s.pos] === '\n') s.pos++; // skip whitespaces
          const right = termParser.parse(s);
          const tree: AST = {
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
    return left;
  }
}
