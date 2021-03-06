'use strict';

console.log('utils loaded');


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Good isPrime function
function isPrime(num) {
	if (num < 2)          return false;
	if (num === 2)        return true;
	if (num % 2 === 0)	  return false;
	
	var limit = Math.sqrt(num);
	for(var i = 3; i <= limit; i += 2) {
		if (num % i === 0) return false;
	}
	return true;
}