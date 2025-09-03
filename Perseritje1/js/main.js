var a = 50 + 50;
console.log(a);

var b = 10;
var f = 12;
var results = b * f
console.log(results)

var n = 99;
n++;
console.log(n);

var o=100; 
n--
console.log(o);

var v=10;
var w=11;

console.log( v == w);

var g = 13;
var z = 13;

console.log(g != z);


function showmessage() {
    alert("Test")
}
showmessage();


function toseconds(minutes) {
    return minutes * 60;

}

console.log(toseconds(15));

function siperfaqja(a,b) {
    return 0.5 * a * b;

}
console.log(siperfaqja(15,20));

var school = {
    name:"Digital School",
    subject:"Programming",
    students:"2000",
    year:"2016",
}

alert(school.name);

var car = {
    name:"Mercedes",
    color:"black",
    start: function(){
        alert("start");
    }
}

var button1 = document.getElementById("btn1");

button1.onclick = function() {
    alert("Hello");
}

button1.onclick= function() {
    text1.style.color = "red";
    text1.style.background = "blue";
    text1.style.textAlign = "center";
    text1.style.fontSize = "100px";
    text1.style.padding = "20px";

}

button1.onclick = function(){
    text1.setAttribute("class","test");
}