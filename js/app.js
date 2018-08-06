'use strict';
console.log('JS leaded');

// need to make objects with properties
// each object is a store
// each property is data for the store

//we have 5 stores total, to start
//1st and Pike


// Objects for every location
var $1np = {
  loc: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avrg: 6.3
};

var $sta = {
  loc: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avrg: 1.2
};

var $seaC = {
  loc: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avrg: 3.7
};

var $capHill = {
  loc: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avrg: 2.3
};

var $alki = {
  loc: 'Alki',
  minCust: 2,
  maxCust: 16,
  avrg: 4.6
};

// The RNG needs to be between the min & max customers. Then Multiply it by the average. Function?

// FUNCTION (STORENAME)
// STORENAME.avrg * RNG

function getAvrgCookies(location) {
  var randNum = Math.floor(Math.random() * (location.maxCust - location.minCust + 1) + location.minCust);
  console.log(`the random number generated for ${$1np.loc} was ${randNum}`);
  var total = location.avrg * randNum;
  return Math.round(total);
}

console.log(`${$1np.loc} got ${getAvrgCookies($1np)}.`);

for (var i = 6; i <= 20; i++) {
  console.log(`${i}: ${getAvrgCookies($1np)}`);
}