const numbers = [1,2,3,4,5,6];

// const sum = numbers.reduce(function(accum, currval){
//     return accum + currval;
// });
const sum = numbers.reduce((accum,curval) =>{
        return accum + curval;
},5);
console.log(sum);
