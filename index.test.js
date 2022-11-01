const helloWorld = require('.')

test('Формирование фразы "Hello, world"!', () => {
  expect(helloWorld()).toBe('Hello, world!')
})

test('Формирование фразы "Привет, мир!"', () => {
  expect(helloWorld("Привет", "мир")).toBe('Привет, мир!')
})