const students = [
  { name: "John", age: 20, score: 85 },
  { name: "Jane", age: 22, score: 92 },
  { name: "Jim", age: 19, score: 75 },
  { name: "Jill", age: 21, score: 65 },
  { name: "Jack", age: 23, score: 95 },
];

// 1. getTopScoringStudents — отримати студентів з високими балами
function getTopScoringStudents(students) {
  return students
    .filter(student => student.score > 80)
    .map(student => student.name);
}

// 2. getAverageAge — отримати середній вік студентів
function getAverageAge(students) {
  if (students.length === 0) return 0;
  const totalAge = students.reduce((sum, student) => sum + student.age, 0);
  return totalAge / students.length;
}

// 3. addStudent — додати нового студента
function addStudent(students, student) {
  students.push(student);
  return students;
}

// 4. removeStudentByName — видалити студента за ім’ям
function removeStudentByName(students, name) {
  return students.filter(student => student.name !== name);
}

console.log("1. Студенти з високими балами (більше 80):");
console.log(getTopScoringStudents(students));

console.log("\n2. Середній вік студентів:");
console.log(getAverageAge(students));

console.log("\n3. Додавання нового студента (Judy, 20 років, бал 88):");
const newStudent = { name: "Judy", age: 20, score: 88 };
console.log(addStudent(students, newStudent));

console.log("\n4. Видалення студента 'Jim':");
console.log(removeStudentByName(students, "Jim"));

module.exports = { getTopScoringStudents, getAverageAge, addStudent, removeStudentByName };


        //       ,___  _______  ___,
        //         \ \`       `/ /
        //     _    /  0       0  \  
        //   ( \  >=      Y      =<
        //     ) )  \__    w    __/
        //   ( (    /`+=+=o=+=+`\
        //     \ \__/             \__
        //     \/   )           (   \ 
        //     /   /             \   \
        //     \  / /           \ \  /
        // jgs  \/ /-._________.-\ \/
        //     (((_)             (_)))