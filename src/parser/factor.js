// @flow
import OperandParser from './operand';
import type {Source, IParser, NumberTree, VariableTree} from '../types';

export default class FactorParser implements IParser {
  parse(s: Source): NumberTree | VariableTree {
    const parser = new OperandParser();
    return parser.parse(s);
  }
}
