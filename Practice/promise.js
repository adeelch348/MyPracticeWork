// const proObj = new Promise((resol , rej)=>{
//     let num = 30;
//         resol(num);
// }).then(
//     (val) => { console.log(val)
//     return val + 10;
//     },
//     //(err) => { console.log(err) },
// ).then((val)=>{
//         console.log(val);
// }).catch(
//     (err) => { console.log(err) })








// const proObj = new Promise((resol , rej)=>{
//     let num = 30;
//         resol(num);
// }).then(
//     (val) => { console.log(val)
//     return val + 10;
//     },
//     //(err) => { console.log(err) },
// ).then((val)=>{
//         console.log(val);
// }).catch(
//     (err) => { console.log(err) }
//     ).finally(
//         ()=>{
//             console.log("Cleaned Up");
//         }
//     )



function getName(name, callback) {
    setTimeout(() => {
        console.log("Inside Name setTimeOut")
        callback(name);
    }, 2000);
}

function getHobbies(name, callback) {
    setTimeout(() => {
        console.log("Inside Hobbies setTimeOut")
        callback(['Cricket', 'Football', 'Hockey'])
    }, 1000);
}

// const nm = getName('Adeel', (nm) => {
//     getHobbies(nm, hobby => {
//         console.log(hobby)
//         console.log(nm)
//     })
// })

// Refactor using Promise to get rid of callback hell

function getName(name) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("Inside Name setTimeOut")
            res(name);
        }, 2000);
    })
}

function getHobbies(name) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("Inside Hobbies setTimeOut")
            res(['Cricket', 'Football', 'Hockey'])
        }, 1000);
    })
}

// const nm = getName('Adeel', (nm) => {
//     getHobbies(nm, hobby => {
//         console.log(hobby)
//         console.log(nm)
//     })
// })


// getName('Adeel')
// .then(nm=>getHobbies(nm))
// .then(hobby=> console.log(hobby))


async function showHobby(){
    try{
    const nm = await getName('Adeel')
    const hobby = await getHobbies(nm)
    console.log(hobby);
    }catch{
        console.log("Not able to fetch data");
    }
}

showHobby();


// single threaded concept in nodejs
// Event-loops in node js
// map,reduce, etc







