const testFn = require('./getBMIMeaning')

test('output#1', (calculateBMI) =>  {
  expect(testFn(65, 1.8)).toBe('Normal weight')
})

test('output#2', (calculateBMI) => {
  expect(testFn(80, 1.7)).toBe('Overweight')
})

test('output#3', (calculateBMI) => {
  expect(testFn(44, 1.6)).toBe('Underweight')
})

