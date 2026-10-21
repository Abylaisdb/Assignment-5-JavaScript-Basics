console.log("Name: Abylai Duisim");
console.log("Group: SE-2530");

function showHello() {
  alert("Hello, JavaScript World!");
}

document.getElementById("alertBtn").addEventListener("click", showHello);
window.addEventListener("load", showHello);

const outputBox = document.getElementById("output");

function log(message) {
  console.log(message);
  outputBox.textContent += message + "\n";
}

const firstName = "Abylai";
const lastName = "Duisim";
let age = 19;
let a = 12;
let b = 5;
let isStudent = true;

log("--- Data types ---");
log("firstName: " + firstName + " (" + typeof firstName + ")");
log("age: " + age + " (" + typeof age + ")");
log("isStudent: " + isStudent + " (" + typeof isStudent + ")");

log("--- Arithmetic (a = " + a + ", b = " + b + ") ---");
log("a + b = " + (a + b));
log("a - b = " + (a - b));
log("a * b = " + (a * b));
log("a / b = " + (a / b));
log("a % b = " + (a % b));
log("a ** b = " + (a ** b));

log("--- Concatenation ---");
const fullName = firstName + " " + lastName;
log("Full name: " + fullName);
log("Greeting: " + "Hello, " + fullName + "! You are " + age + " years old.");
log(`Template literal: ${fullName} is a student: ${isStudent}`);
