[1,2,3].map((x) => x * 2);

var someFunc() {
  var foo = 2;
  var bar = 3;

  return { foo, bar }
};


var someOtherFunc() {
  var x = 3;
  if(x == 3) {
    let foo = 5;
  } else {
    let foo = 6;
  }
  // foo undefined
};

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  isJack() {
    return this.name === 'jack';
  }
}

class Child extends Person {
  constructor(name, age, favouriteToy) {
    super(name, age);
    this.favouriteToy = favouriteToy;
  }
}

var littleJack = new Child('jack', 22, 'lego');
littleJack.isJack() // inherited from Person
