var num = 12345;
var str = "67890";

// Convertir número a cadena
var strNum = String(num);
var strNum = num.toString();
var strNum = "" + num;

console.log("Número a cadena:", strNum, typeof strNum); // "12345" "string"

// Convertir cadena a número
var numFromStr = Number(str);
var numFromStr = parseInt(str, 10);
var numFromStr = +str;

console.log("Cadena a número:", numFromStr, typeof numFromStr); // 67890 "number"