// @flow
import OperandParser from './operand';
import ExprParser from './expr';
import type {Source, IParser, AST} from '../types';

export default class FactorParser implements IParser {
  parse(s: Source): AST {
    while (s.str[s.pos] === ' ' || s.str[s.pos] === '\n') s.pos++; // skip whitespaces
    if (s.str[s.pos] === '(') {
      s.pos++;
      const parser = new ExprParser();
      const tree = parser.parse(s);
      s.pos++; // skip ')'
      return tree;
    }
    const parser = new OperandParser();
    return parser.parse(s);
  }
}
