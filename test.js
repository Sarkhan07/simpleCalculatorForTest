let calculator = require('./calculator');

test('add 1 + 3 should be 3', () => {
    expect(calculator.add(1, 2)).toBe(3);
});
test('substract 5 - 3 should be 2', () => {
    expect(calculator.substract(5, 3)).toBe(2);
});
test('multiple 3 * 3 should be 9', () => {
    expect(calculator.multiplier(3, 3)).toBe(9);
});
test('devide 6 / 2 should be 3', () => {
    expect(calculator.divider(6, 2)).toBe(3);
});
