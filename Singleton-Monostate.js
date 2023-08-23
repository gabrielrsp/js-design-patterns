class Monostate {
  static data = [];

  addItem(item) {
    Monostate.data.push(item);
  }

  getData() {
    return Monostate.data;
  }
}

const instance1 = new Monostate()
instance1.addItem('first')
console.log(instance1.getData())

const instance2 = new Monostate()
instance2.addItem('second')
console.log(instance2.getData())

console.log(instance1 === instance2);  //Should be False

//////////////////////////////////////////////////

 class Singleton {

  constructor() {
    if (!Singleton.instance) {
      this.data = [];
      Singleton.instance = this;
    }
    return Singleton.instance;
  }

  addItem(item) {
    this.data.push(item);
  }

  getData() {
    return this.data;
  }

}

const singleton1 = new Singleton()
singleton1.addItem('first')
console.log(singleton1.data)

const singleton2 = new Singleton()
singleton2.addItem('second')
console.log(singleton2.data)

console.log(singleton1 === singleton2) //Should be True