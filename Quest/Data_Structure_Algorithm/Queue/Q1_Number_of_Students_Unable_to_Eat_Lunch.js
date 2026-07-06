/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  const count = [0, 0];

  for (let i = 0; i < students.length; i++) count[students[i]]++;

  for (let i = 0; i < sandwiches.length; i++) {
    if (count[sandwiches[i]] === 0) {
      return sandwiches.length - i;
    }
    count[sandwiches[i]]--;
  }

  return sandwiches.length;
};

const students = [1, 1, 1, 0, 1, 1];
const sandwiches = [1, 0, 0, 0, 1, 1];
console.log(countStudents(students, sandwiches));
