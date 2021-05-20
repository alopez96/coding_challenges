// Cracking the coding interview 1.2 (pg 90)

// Check permutation - Given two strings, write a method to decide if one is a permutation of the other.

// note: a permutation exists if you can rearrange the letters and come up with the other string


function isPermutation(string1, string2){
    // verify input
    if( !isVerified(string1, string2) ){
      return;
    }

    // first, check if the lengths are the same
    // if they dont have same length, they cannot be permutations
    if(!compareLengths(string1, string2)){
      return false;
    }

    // check if string1 is a perm of string2
    for(var i = 0; i < string2.length; i++){
      
    }

    //the longer string cannot be a permutation of the shorter once
    // therefore, we will loop through longer string
    // for(var i = 0; i < s2_length; i++){

    //   if(covered_letters.includes(testString[i])){
    //     console.log('duplicate', testString[i], 'found!')
    //     return;
    //   }
      
    //   // otherwise, continue loop
    //   covered_letters.push(testString[i])
    // }
}
  
  
  
  
// helper function
function isVerified(x, y){
    // verify input
    if((!x || x.length == 0) || (!y || y.length == 0)){
        console.log('Please provide 2 inputs')
        return false;
    }

    if(typeof(x) != 'string' || typeof(y) != 'string'){
        console.log('Please provide 2 valid strings')
        return false;
    }

    return true;
}

function compareLengths(x, y){
  // get max length of each string
    var s1_length = x.length
    var s2_length = y.length

    if(s1_length != s2_length){
      console.log('Strings are not permutation of one another')
      return false;
    } else {
      return true;
    }
}



// call function for testing
isPermutation('testing123', 'ttesing123')