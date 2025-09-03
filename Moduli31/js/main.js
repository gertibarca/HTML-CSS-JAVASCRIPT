// var i = 0;
// while (i < 10) {
//   console.log("Vlera e variablës i është: " + i);
//   i++;
// }

// var person = {
//   firstName: "Gerti",
//   lastName: "Novoberdaliu",
//   mosha: 15
// };


// var keys = Object.keys(person);
// var index = 0;
// var text = "";

// while (index < keys.length) {
//   var key = keys[index];
//   text += person[key] + " ";
//   console.log(text);
//   index++;
// }


function shfaqNumrat() {
  // Deklarojmë një varg me numrat 1 deri në 10
  var numrat = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  // Përdorim një for loop për t'i shfaqur në console
  for (var i = 0; i < numrat.length; i++) {
    console.log("Numri është: " + numrat[i]);
  }
}

// Thërrasim funksionin
shfaqNumrat();

