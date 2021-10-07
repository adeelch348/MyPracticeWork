const myMap = new Map();

const key1 = "myStr";
const key2 = {};
const key3 = function () {};

// Settings values in map
myMap.set(key1, "I am Adeel");
myMap.set(key2, "I am Jibran");
myMap.set(key3, "I am Nabeel");

console.log(myMap);

const value1 = myMap.get(key1);
