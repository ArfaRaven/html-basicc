function filterAdults(people) {
  return people.filter(person => person.age >= 18);
}

const people = [
  { name: 'Асатаріон', age: 242 },
  { name: 'Лаезель', age: 22 },
  { name: 'Гейл', age: 35 },
  { name: 'Арабела', age: 9 }
];

console.log(filterAdults(people));

module.exports = filterAdults;


    //  )\   _,
    //  | "^" (
    //  (e  a )
    // =-\Y  -=
    //    T"^)   _
    //   /   (  ((
    //  /    < _ ';,
    // (      ) )  \\
    //  \ Y  '  /  ))
    //   || ;  /   //
    //   )| ( (__,</
    // c{{i.}}=oo-^ 