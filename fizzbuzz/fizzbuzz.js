const fizz = require('./fizz.js')
const buzz = require('./buzz')
const fizzBuzzFunction = require('./fizzbuzz-function.js')

module.exports = function fizzbuzz(i) {
    if(i % 3 === 0 && i % 5 === 0){
      return fizzBuzzFunction()
    } else if(i % 3 === 0){
      return fizz()
    } else if(i % 5 === 0){
      return buzz()
    } else {
      console.log(i)
    } 
}
