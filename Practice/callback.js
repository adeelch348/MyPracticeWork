const std = 
[{name: "Adeel",subject : "JavaScript"},
{name: "Huzaifa",subject: "Python"}];

function enrollStd(student,callback){
    setTimeout(function(){
        std.push(student);
        console.log("Student has been enrolled");
        callback();
    },5000);
}

function getStd(){
    setTimeout(function(){
        let str = "";
        std.forEach(function(student){
                str += student.name;
                str += student.subject
        });
        console.log(str);
    },1000);
}

let newStd = { name: "Nabeel",subject: "SQL"}
enrollStd(newStd,getStd);
getStd();

