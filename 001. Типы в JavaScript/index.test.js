const {checkNumber, getType, checkObject, checkArray, checkFunction} = require('.')

test('Проверка на функцию', () => {
    function testFunction1(){}
    const testFunction2 = () => {}
    expect(checkFunction(testFunction1)).toBe(true)
    expect(checkFunction(testFunction2)).toBe(true)
})

test('Проверка на массив', () => {
    expect(checkArray([])).toBe(true)
})

test('Проверка типа object', () => {
    expect(checkObject({})).toBe(true)
    expect(checkObject([])).toBe(true)
    expect(checkObject(null)).toBe(true)
})

test('Просмотр типа передаваемого значения',() => {
    expect(getType('qwerty')).toBe('string')
    expect(getType(2)).toBe('number')
    expect(getType(true)).toBe('boolean')
    expect(getType()).toBe('undefined')
})

test('Возвращает true, если передаем число', () => {
    expect(checkNumber(2)).toBe(true)
})

test('Возвращает false, если передаем не число', () => {
    expect(checkNumber('2')).toBe(false)
})




