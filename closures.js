var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
};


//////////////////PROBLEM 1////////////////////

// Above you're given a function that returns another function which has a closure over the name variable.
// Invoke outer saving the return value into another variable called 'inner'.

var inner = outer();// Code Here


//Once you do that, invoke inner.

  inner(name);//Code Here



//////////////////PROBLEM 2////////////////////


var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};


// Above you're given a callFriend function that returns another function.
// Create a makeCall function that when invoked logs  'Calling Jake at 435-215-9248' in your console.

var makeCall = callFriend();
console.log(makeCall("801-404-1608"));

//Code Here








//////////////////PROBLEM 3////////////////////



/*
  Write a function called makeCounter that makes the following code work properly.
*/

var makeCounter = function() {
  var num = 0;
   function incNum(){
     num++
     return num;
   }
   return incNum;
}

//Code Here

//Uncomment this once you make your function
  var count = makeCounter();
  count(); // 1
  count(); // 2
  count(); // 3
  count(); // 4



//////////////////PROBLEM 4////////////////////


// Inside the function called counterFactory
// return two functions that implement up/down counter.
// The first function is called inc, this function is responsible for incrementing the value once
// The second function is called dec, this function is responsible for decrementing the value by one
// You will need to use the module pattern to achieve this.

function counterFactory(value) {
  function inc(){
    value++
    return value;
  }// Code here.

  function dec(){
    value--
    return value;
  }
  return {
    inc:inc,
    dec:dec
  }
}


counter = counterFactory(10);




//////////////////PROBLEM 5////////////////////



// Inside the motivation function create another function called message that will return 'You're doing awesome, keep it up firstname lastname.'

function motivation(firstname, lastname){
   var welcomeText = 'You\'re doing awesome, keep it up ';

   message = function (){
     return	welcomeText + firstname + " " + lastname + "."
   }
   // code message function here.


   //Uncommment this to return the value of your invoked message function

   return message()
 }

 motivation('Billy', 'Bob'); // 'Your doing awesome keep it up Billy Bob



//////////////////PROBLEM 6////////////////////

// Inside the return create a publicMethod property that is a function that invokes privateMethod. After you create the privateMethod
// Invoke it by calling module.publicMethod(); outside the module scope

  var module = (function() {
    var person = {
      name: "phillip",
      age: 29,
      location: 'Utah'
    };

    var privateMethod = function(){
      return "Hi, I'm " + person.name + ", age " + person.age + " from " + person.location;
    };

    // Anything that is being returned is made public and can be invoked from outside our lexical scope

    return {
      publicMethod:privateMethod,
      } // Code here.
  })();

//Uncomment this after you create your public method
  module.publicMethod();



//////////////////PROBLEM 7////////////////////
// Here we have a for loop that will iterate as long as i is less than or equal to 5. What we need to do is console.log(i)
// So that it logs ( 0 then 1 then 2 then 3, etc). Run this code in your console to see what the output is.


function timeOutCounter() {
  for (var i = 0; i <= 5; i++) {
    delayMessage(i, i * 1000)

  }

  function delayMessage(message, delay) {
  	setTimeout(function(){
  	console.log(message)
  	}, delay)

  }
}
timeOutCounter();
  // To make this code work you will need to create a new scope for every iteration.





//////////////////PROBLEM 8////////////////////

var funcArray = [];

function makeReturn(num){
  return function(){

  }

}

/*
  Make the following code work

  funcArray[0]() //0
  funcArray[1]() //1
  funcArray[2]() //2
  funcArray[3]() //3
  funcArray[4]() //4
  funcArray[5]() //5

  *Hint: Don't let this fool you. Break down what's really happening here.
*/
