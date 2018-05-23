const assert = require('chai').assert;
const expect = require('chai').expect;
const allFunctions = require('../index');

describe('all tests for your functions',()=>{

  //ADD
  describe('add tests',()=>{
    const addFunc = allFunctions.add;
    it('should add positive numbers',()=>{
      assert.equal(addFunc(1,3),4);
      assert.equal(addFunc(8,2),10);
    });
    it('should add negative numbers',()=>{
      assert.equal(addFunc(-1,-3),-4);
      assert.equal(addFunc(-10,-3),-13);
    });
    it('should output number',()=>{
      assert.isNumber(addFunc(5,5));
    });
  })

  //SUBTRACT
  describe('subtract tests',()=>{
    const subFunc = allFunctions.subtract;

    it('should subtract positive numbers',()=>{
      assert.equal(subFunc(1,3),-2);
      assert.equal(subFunc(100,87),13);
    })
    it('should subtract negative numbers',()=>{
      assert.equal(subFunc(-1,-3),2)
      assert.equal(subFunc(-39,-11),-28)
    })
    it('should output number',()=>{
      assert.isNumber(subFunc(8,1));
    });
  })

  //CALCULATESUM
  describe('calculate sum tests', ()=> {
    const calculateSum = allFunctions.calculateSum;

    it('should add the indexes in an array together', ()=>{
      assert.equal(calculateSum([1, 2, 3]), 6);
      assert.equal(calculateSum([2, 4, 6]), 12);
    })

    it('should have an array as its input', ()=>{
      assert.isArray(([1, 2, 3]), "is an array");
    })

    it('should output number', ()=>{
      assert.isNumber(calculateSum([1, 2, 3]));
    })

    it('should handle negative numbers', ()=>{
      assert.equal(calculateSum([-1, 2, 3, -4]), 0);
    })
  })

  //MAP
    describe('Array', function() {

      describe('#map()', function() {
      //expect([1, 2]).to.be.an.instanceof(Array);
        it('should output a new array', ()=>{
          expect([1,2,3].map(callback).to.be.an.instanceOf(Array));
        });

        it('should be called on an array', ()=>{
          expect([1,2,3]).to.be.an.instanceOf(Array);
        });

        it('should have one parameter which is a function', ()=>{
          expect(callback()).to.be.an.instanceOf(Function);
        });
  });
});

  //   it('should be called on an array', ()=> {
  //     assert.isArray([1, 2, 3].map())
  //   })
  //
  //   it('should output a new array', ()=> {
  //     assert.isArray();
  //   })
  //
  //   it('should return an array that has the same length as the input array', ()=>{
  //
  //   })
  //
  //   it('should have one parameter which is a function')
  // })


  //filter


  //reverseLettersInPlace


  //allSimpleCombinations


  //alphabeticalOrder


  //returnLongestWord


  //isPrime


  //returnCoinBreakdown


  //countVowels


})
