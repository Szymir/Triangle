var a = prompt('Enter a'),
	h = prompt('Enter h'),
	b = prompt('Enter b'),
	triangleArea = a*h/2;
	math = (a * a) - (2 * a * b) - (b * b);

console.log('Triangle field with base a: ' + a + ' and height h: ' + h + ' is equal to: ' + triangleArea);
console.log(math);

if (math > 0) {
	console.log("Wynik dodatni");
}
else if (math == 0) {
	console.log("Wynik to 0");
}
else {
	console.log("Wynik ujemny");
}


