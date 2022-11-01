const {checkNumber} = require('./index');

test('Возвращает true, если передаем число', () => {
    expect(checkNumber(2)).toBe(true)
});

test('Возвращает false, если передаем не число', () => {
    expect(checkNumber('2')).toBe(false)
});



