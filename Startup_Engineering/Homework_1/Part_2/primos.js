#!/usr/bin/env node

var fs = require('fs');
var outfile = "primos.txt";
var primos = "";
var count = 1;
var i = 2;

esPrimo = function(numero){
	for (var i = 2; i < numero; i++) {
		if((numero % i) == 0) { return false; }
	}
	return true;
}

while(count <= 100){
	if(esPrimo(i)) { primos += i + ",";  count++; }
	i++;
}
primos = primos.substr(0,primos.length-1);
fs.writeFileSync(outfile, primos);  
console.log("Output File: " + outfile + "\nContent: "+ primos); 
