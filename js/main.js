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