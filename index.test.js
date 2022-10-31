const helloWorld = require('.')

test('Формирование фразы "Hello, World"!', () => {
  expect(helloWorld()).toBe('Hello, World!')
})

test('Формирование фразы "Привет, мир!"', () => {
  expect(helloWorld("Привет", "мир")).toBe('Привет, мир!')
})

