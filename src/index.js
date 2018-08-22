// @flow
import {Animated} from 'react-native';
import CalculatorGenerator from './CalculatorGenerator';

export default CalculatorGenerator({
  add: (a, b) => Animated.add(a, b),
  sub: (a, b) => Animated.subtract(a, b),
  mul: (a, b) => Animated.multiply(a, b),
  div: (a, b) => Animated.divide(a, b),
});
