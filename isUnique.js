// Cracking the coding interview (pg 90)

// Is Unique - determine if a string has all unique characters. What if you cannot use aditional data structures?


function isUnique(testString){
    // verify input
    if(!isVerified(testString)){
      return;
    }
  
    // implementation 1. brute force
    // define array to track letters we've covered
    let covered_letters = []
  
    for(var i = 0; i < testString.length; i++){
      current_letter = testString[i]
  
      if(covered_letters.includes(testString[i])){
        console.log('duplicate', testString[i], 'found!')
        return;
      }
      
      // otherwise, continue loop
      covered_letters.push(testString[i])
    }
  
    // if we make it out the for loop, that means no dups
    console.log('string does not have duplicate letters')
    return true;
}
  
  
//2. No additional data structures
function isUniqueOptimized(testString){
    
  
}
  
  
  
  
// helper function
function isVerified(x){
    // verify input
    if(!x || x.length == 0){
        console.log('No input provided')
        return false;
    }

    if(typeof(x) != 'string'){
        console.log('Input is not a string. Please provide a string value.')
        console.log('input given is a', typeof(x))
        return false;
    }

    return true;
}



// call function for testing
isUnique('')
isUnique('testing')
isUnique('tesing123')
  