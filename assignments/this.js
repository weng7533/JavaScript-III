/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. in the global scope, 'this' will be the the whole JS console. 
* 2. in implicit Binding, 'this' will be the object before the '.'.
* 3. in New bindling, 'this' will be the point to the new object that is being created by constructor function.
* 4. in Explicit bindling, 'this' will be the point to object x in .call(x).
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2

// code example for Implicit Binding

const obj1 = {
    a: 'good',
    b: function(){
        console.log(this.a);
    }
};

// Principle 3

// code example for New Binding

function Cf(cons){
    this.greeting = 'Hello';
    this.testing = 'test';
}

const newfun = new Cf({greeting:'yes',testing:'good'})
// Principle 4

// code example for Explicit Binding
function Ob1(){
    this.T1 = 'yes';
    this.T2 = 'no';
}

function Ob2(){
    Ob1.call(this);
}
