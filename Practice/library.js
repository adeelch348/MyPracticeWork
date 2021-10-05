export default function( ){
    console.log("Adeel");
}


let message = "ES6 Modules";

function user(name) {
    return `${name} is best to learn`;
}


class test {
    constructor() {
        console.log("Constructor Method");
    }
}


export { message, user, test }