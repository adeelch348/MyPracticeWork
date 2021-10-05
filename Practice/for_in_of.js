arr = ["Adeel","Nabeel","Huzaifa"];

// for_in loop used with iterable objects
for(let name in arr){
    console.log(arr[name]);
}

//We can use the for_in loop to loop through all the characters.
str = "My name is adeel";

// for(let char in str){
//     console.log(str[char]);
// }

// for(let name of arr){
//     console.log(name);
// }


// for(let char of str){
//     console.log(char);
// }


for (var i = 0; i < str.length; i++) {
    console.log(str.charAt(i));
  }