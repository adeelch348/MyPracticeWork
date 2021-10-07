const Model = function (model) {
  this.model = model;
  this.price = 3000;
};

const samsung = new Model("Galaxy");
const nokia = new Model("7 Plus");
Model.prototype.feature = function (ram, hard) {
  this.ram = ram;
  this.hard = hard;
};
Model.prototype.color = "Black";
samsung.color = "white";
console.log(samsung);
const a = samsung.feature("4gb", "64gb");
// console.log(nokia.a);
