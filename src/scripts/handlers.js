document.getElementById("amount").addEventListener("change", myFunction);
 export function myFunction() {
var currency = document.getElementById("amount");
var result = Math.random(currency);
document.getElementById('result').innerHTML=result;
}