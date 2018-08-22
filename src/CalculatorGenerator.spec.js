import CalculatorGenerator from './CalculatorGenerator';

describe('CalculatorGenerator', () => {
  it('should generate calculator', () => {
    const calc = CalculatorGenerator({
      add: (a, b) => a + b,
      sub: (a, b) => a - b,
      mul: (a, b) => a * b,
      div: (a, b) => a / b,
    });
    const a = 10;
    const b = 20;
    expect(calc`(${a} * ${b} + 10) / (${a} + ${b})`).toEqual(7);
  });
  // TODO: error test
});
