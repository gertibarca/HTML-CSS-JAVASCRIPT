// var input= document.getElementById("input_id");
var input= document.getElementById("btn_id");
var input= document.getElementById("text_id");

// button.onclick=function(){
//     text.innerHTML=input.value;
// }

// var input=document.querySelector("#input_id")
// var input2=document.querySelector('input2_id')

// button.addEventListener('click',function(){
//     // text.innerHTML=input.value+' ' +input2.value;
//     text.innerHTML=parseInt(input.value)+parseInt(input2.value);
// })

var text="The best school in the world is Digital School";
// var result=text.search("Digital School");
var result=text.search(/Digital School/);
document.getElementById('result1').innerHTML=result;

var text="The best school in the world is Digital School";
var result=text.replace(/Digital School/,"Mitrush Kuteli");
document.getElementById("result2").innerHTML=result;

var text="abcdef";
var redex=new RegExp('abc');
document.getElementById('results3').innerHTML=redex.test(text);

var text="My school is the best school in the world";
var redex=/school/g;
document.getElementById("result4").innerHTML=text.match(redex);

var text="My schooooool is the best school in the top ten schools in thw world";
// var redex=/i/g;
// var redex=/[abc]/g;
// var redex=/[0-9]/g;
// var redex=/(top|best|school)/g;
// var redex=/o+/g;
// var redex=/cho/g;
// var redex/o{3}/g;


document.getElementById("results5").innerHTML=text.match(redex);
