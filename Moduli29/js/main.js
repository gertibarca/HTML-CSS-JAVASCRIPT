var programminglang = ['Java', 'Html', 'Css', 'JavaScript', 'C#'];

// console.log(programminglang);

programminglang.push('Python');
console.log(programminglang);

programminglang.pop();
console.log(programminglang);

programminglang.unshift('Test');
console.log(programminglang);

programminglang.shift();
console.log(programminglang);

programminglang.splice(0,4,'C++');
console.log(programminglang);

console.log(Math.random()*5);
console.log(Math.floor(Math.random()*100));


var students = ['Gerti', 'Joni', 'Deon'];
var [s1, s2, s3] = students;
console.log(s2);
console.log(s1);
console.log(s3);


var numbers = [1,2,3,4,5,6,7,8,9];

var[one,two, ...otherNumbers] = numbers;
console.log(one);
console.log(two);
console.log(otherNumbers);