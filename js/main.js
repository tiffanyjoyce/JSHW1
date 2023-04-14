let dog_string = 'Hello Max, my name is Dog, and I have purple eyes!'
let dog_name = ["Max", "HAS", "PuRple", "dog"]

function findWords(str, arr){
    for(let i = 0; i < arr.length; i++){
        if (str.includes(arr[i])){
            console.log('Matched ' + arr[i]);
        } else {
            console.log('No Matches');
        }
    };
};findWords(dog_string, dog_name);

let given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens (arr) {
    for(let i = 0; i < arr.length; i += 2){
        arr[i] = "even index"
    };
    console.log(arr)
};
replaceEvens(given_arr);

/* def repeat_str(repeat, string):
    return repeat * string */

/*My friend wants a new band name for her band. 
She like bands that use the formula: "The" + a noun with 
the first letter capitalized, for example:

"dolphin" -> "The Dolphin"

However, when a noun STARTS and ENDS with the same letter, 
she likes to repeat the noun twice and connect them together 
with the first and last letter, combined into one word 
(WITHOUT "The" in front), like this:

"alaska" -> "Alaskalaska"

Complete the function that takes a noun as a string, 
and returns her preferred band name written as a string. */

let bandname = 'hand'
let new_bandname = ''

function bandname_genrator(name){
    if (name.slice(0,1) === name.slice(-1)){
        new_bandname= name.charAt(0).toUpperCase() + name.slice(1,-1) + name
        new_bandname.charAt(0).toUpperCase()
    } else {
        new_bandname= 'The ' + name.charAt(0).toUpperCase() + name.slice(1)
    };
    console.log(new_bandname);
};

bandname_genrator(bandname);

/* Write a function that accepts an integer n and a string s
 as parameters, and returns a string of s repeated exactly 
 n times. */

/* def repeat_str(repeat, string):
    return repeat * string */

let random_string = "Hello"
let new_string = ''

function repeatString(num, str){
    console.log(str.repeat(num));
};

repeatString(4, random_string);