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

console.log(value1);

const arr = [10, 23, 334, 4, 23];

// eslint-disable-next-line no-param-reassign
const newArr = arr.map((val) => {
  // eslint-disable-next-line no-param-reassign
  val++;
  return val;
});
console.log(newArr);
