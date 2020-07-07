jest.mock('./fizz')
jest.mock('./buzz')
jest.mock('./fizzbuzz-function')
const fizzbuzz = require('./fizzbuzz')
const fizz = require('./fizz')
const buzz = require('./buzz')
const fizzbuzzFunction = require('./fizzbuzz-function')


describe('Fizz Buzz test suite', () => {
  it('should be defined', () => {
    expect(fizzbuzz).toBeDefined()
  })
  it('should return "fizz" when the input is 6', () => {
    fizz.mockReturnValue('fizz')
    expect(fizzbuzz(6)).toBe('fizz')
  })
  it('should return "fizz" when the input is 3', () => {
    fizz.mockImplementation(() => {
      return 'fizz'
    })
    expect(fizzbuzz(3)).toBe('fizz')
  })
  it('should return "buzz" when the input is 6', () => {
    buzz.mockReturnValue('buzz')
    expect(fizzbuzz(5)).toBe('buzz')
  })
  it('should return "buzz" when the input is 3', () => {
    buzz.mockImplementation(() => {
      return 'buzz'
    })
    expect(fizzbuzz(10)).toBe('buzz')
  })
  it('should return "fizzbuzz" when the input is 3', () => {
    fizzbuzzFunction.mockImplementation(() => {
      return 'fizzbuzz'
    })
    expect(fizzbuzz(15)).toBe('fizzbuzz')
  })
})