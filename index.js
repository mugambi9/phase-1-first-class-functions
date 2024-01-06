let Spy
function receivesAFunction(callback) {
    
    if (typeof  Spy  !== 'undefined') {
      callback( Spy );
    } else {
   
      console.error('Error: drivers is not defined');
    }
  }
  
 
  function returnsANamedFunction() {

    function namedFunction() {
 
    }
    return namedFunction;
  }
  
 
  function returnsAnAnonymousFunction() {
  
    return function() {

    };
  }
  
 
  module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction,
  };


const indexFunctions = require('../path/to/index'); 
const assert = require('assert');

describe('index', () => {
  it('receivesAFunction( Spy )', () => {
    
      Spy  = jest.fn(); 
    indexFunctions.receivesAFunction( Spy );
    expect( Spy ).toHaveBeenCalledWith( );
  });

  it('returnsANamedFunction()', () => {
    
    const result = indexFunctions.returnsANamedFunction();
    assert.strictEqual(typeof result, 'function', 'Expected a function');
    assert.strictEqual(result.name, 'namedFunction', 'Expected a named function');
  });

  it('returnsAnAnonymousFunction()', () => {
    
    const result = indexFunctions.returnsAnAnonymousFunction();
    assert.strictEqual(typeof result, 'function', 'Expected a function');
    assert.strictEqual(result.name, '', 'Expected an anonymous function');
  });
});
  