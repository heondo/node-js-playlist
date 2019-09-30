import events from 'events';


class Person extends events.EventEmitter {
  constructor(name){
    super();
    this.name = name;
  }
}

const james = new Person('james');
const mary = new Person('mary');
const david = new Person('david');

const people = [james, mary, david];

people.forEach((person) =>{
  person.on('speak', (mssg) => {
    console.log(person.name + " said " + mssg);
  })
})

james.emit('speak', 'my name is james')
