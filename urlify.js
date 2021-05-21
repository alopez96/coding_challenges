/* Cracking the coding interview 1.3 (pg 90)

URLify - Replace all white spaces in a string with '%20'. Assume you are given the true length of the string.

example:
input: "Mr John Smith    ", 13
output: "Mr%20John%20Smith"

*/

function urlify(str, len){

    // no need to verify len
    // verify str
    if(!isValidString(str)){
        return;
    }


    // method 1: brute force
    var white_space_count = 0
    for(var i = 0; i < len; i++){
        if (str[i] == ' '){
        white_space_count++
        }
    }

    var url_string = str;
    for(var i = 0; i < white_space_count; i++){
        url_string = url_string.replace(' ', '%20')
    }

    return url_string;
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



// helper function
function isValidString(x){
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

urlify('Mr John Smith    ', 13)