const chai = require("chai")

let expect = chai.expect
let should = chai.should()


const add = (x,y) => {
  return x + y
}

describe('add', () => {
  it('should add positive numbers', () => {
    // expect(add(1,2).to.equal(3))
    add(1,2).should.be.equal(3)
  })
})
