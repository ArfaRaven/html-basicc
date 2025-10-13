function findByName(people, name) {
  return people.find(person => person.name === name);
}

const people = [
  { name: "John", age: 20, score: 85 },
  { name: "Jane", age: 22, score: 92 },
  { name: "Jim", age: 19, score: 75 },
];

console.log("1. Пошук людини на ім'я 'Jane' :");
console.log(findByName(people, "Jane"));


module.exports = findByName;


      //                   _
      //                   /;)
      //                 (;(
      //   A,=,A  ,;;;;,  );)
      //   /;6;6;\/;;;;;;\/;/
      // =\;;t;;/=;;;;/;;;/
      //   `==;;;;;""|;;;/
      //       ||;|  \\;\
      //      ((;;|  ((;;\
      //       ``"`   ``"`