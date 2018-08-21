// @flow
import NumberParser from './number';
import SyntaxError from '../util/SyntaxError';
import type {Source, IParser, NumberTree, VariableTree} from '../types';

export default class OperandParser implements IParser {
  parse(s: Source): NumberTree | VariableTree  {
    let token = '';
    while (s.str[s.pos] === ' ' || s.str[s.pos] === '\n') s.pos++; // skip whitespaces

    const type = (s.str[s.pos] === '$') ? 'Variable' : 'NumberLiteral';
    if (type === 'Variable') {
      s.pos++;
    }

    try {
      const numberParser: NumberParser = new NumberParser();
      const numberTree: NumberTree = numberParser.parse(s);
      const num: number = numberTree.value;
      const value = type === 'Variable' ? '$' + num : num;
      return {
        type,
        value,
      }
    } catch (e) {
      throw new SyntaxError(`it should be variable or number. ${s.str[s.pos]} is not beginning of variable or valid number`);
    }
  }
}
