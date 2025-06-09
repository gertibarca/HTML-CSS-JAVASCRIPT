function showMessage() {
    alert("Hello");
}

showMessage();

function sum(sum1, sum2) {
    return sum1 + sum2;
}

console.log(sum(5, 7));

var allow = () => {
    alert("test");
};

var testFunction = function(name) {
    alert("hello " + name);
};

testFunction("gerti");

function dsfunction() {
    var localvar = "digital school";
    alert(localvar);
}

dsfunction();

function toSeconds(min) {
    return min * 60;
}

console.log(toSeconds(20));

function siptrekendeshit(a, h) {
    return 0.5 * a * h;
}

console.log(siptrekendeshit(5, 7));

var car = {
    name: "bmw",
    color: "red",
    year: 2025
};

var school = {
    name: "shkolla digjitale",
    subject: "programim",
    students: 2000
};

alert(car.name);

var computer = new Object();
computer.name = "acer";
computer.ram = "48gb ram";
computer.ssd = "1512gb ssd";
computer.cpu = "Intel i7";
computer.gpu = "NVIDIA RTX 3080";
computer.os = "Windows 11";

console.log(computer);
