[1,2,3].map(function(x) {
  return x * 2;
}); // [2, 4, 6]

var someFunc() {
  var foo = 2;
  var bar = 3;

  return {
    foo: foo,
    bar: bar
  }
};

var someOtherFunc() {
  var x = 3;
  if(x == 3) {
    var foo = 5;
  } else {
    var foo = 6;
  }
  // foo = 5
};

var Person = function(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.isJack = function() {
  return this.name === 'jack';
}

