const companies = [
  { name: "IBEX", category: "IT", points: "100" },
  { name: "InvoZone", category: "Software", points: "180" },
  { name: "AquilaTech", category: "Websites", points: "000" },
];

const ages = [27, 25, 10, 5];

// forLoop
for (let i = 0; i < companies.length; i++) {
  //   console.log(companies[i].name);
}

// forEach
companies.forEach((company) => {
  //   console.log(company.category);
});

// filter

// eslint-disable-next-line array-callback-return
// eslint-disable-next-line consistent-return
// eslint-disable-next-line array-callback-return
// const canDrink = ages.filter((age) => {
//   if (age >= 25) {
//     return true;
//   }
// });

const canDrink = ages.filter((age) => age >= 25);

console.log(canDrink);

// filter IT companies

const itCompany = companies.filter((company) => company.category === "IT");

// console.log(itCompany);

// map

const companyName = companies.map((company) => company.name);
const ageSquare = ages.map((age) => Math.sqrt(age));
const ageTimesTwo = ages.map((age) => age * 2);

const ageMap = ages.map((age) => Math.sqrt(age)).map((age) => age * 2);
// console.log(ageSquare);
// console.log(ageTimesTwo);
// console.log(ageMap);

// sort

const sortCompany = companies.sort((c1, c2) =>
  c1.points > c2.points ? 1 : -1
);
// console.log(sortCompany);

const sortages = ages.sort((a, b) => a - b);
console.log(sortages);
// console.log(ages.sort());

// reduce

const ageSum = ages.reduce((total, val) => total + val, 0);
// console.log(ageSum);

const combinedAll = ages
  .map((age) => age * 2)
  .filter((age) => age >= 40)
  .sort((a, b) => a - b)
  .reduce((total, val) => total + val, 0);

console.log(combinedAll);
