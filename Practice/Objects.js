let obj = {
    fname : "Adeel",
    lname : "Yaseen",
    age : 25,
    email : 'adeel.yaseen@invozone.com',
    favMovie : ["Sci_fic", "Lesson full"],
    living : {
        city : "Gujranwala",
        state : "Punjab",
        country : "Pakistan"
    },
    salary : function(){
        return 20000; 
    },
    fullname : function(){
        return this.fname + this.lname;
    }
}
// console.log(obj.fname);
// console.log(obj.salary());
// console.log(obj.fullname());
// console.log(obj.living.city);

// for(let a in obj){
//     console.log(obj[a]);
// }

let obj1 = new Object();

obj1.fname = "Nabeel";
obj1.lname = "yaseen";
obj1.age = 27;

console.log(obj.lname);