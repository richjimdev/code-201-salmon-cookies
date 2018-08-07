'use strict';
console.log('JS loaded');

//Constructor to create each location
function SalmonCookies(loc, minCust, maxCust, avrg) {
  this.loc = loc,
  this.minCust = minCust,
  this. maxCust = maxCust,
  this.avrg = avrg;
}

var $1np = new SalmonCookies('1st and Pike', 23, 65, 6.3);
var $sta = new SalmonCookies('SeaTac Airport', 3, 24, 1.2);
var $seaC = new SalmonCookies('Seattle Center', 11, 38, 1.2);
var $capHill = new SalmonCookies('Capitol Hill', 20, 38, 3.7);
var $alki = new SalmonCookies('Alki', 2, 16, 4.6);
SalmonCookies.prototype.showData = compile;

function getAvrgCookies(location) {
  var randNum = Math.floor(Math.random() * (location.maxCust - location.minCust + 1) + location.minCust);
  // console.log(`the random number generated for ${$1np.loc} was ${randNum}`);
  var total = location.avrg * randNum;
  return Math.round(total);
}

function makeTime(hour) {
  var date = new Date(`August 06, 2018 ${hour}:00:00`);
  var dateOptions = {
    hour: 'numeric',
    hour12: true
  };
  return date.toLocaleString('en-US', dateOptions);
}

var sum = 0;

function compile() {
  var eachLocation = document.getElementById('locations');
  var locationName = document.createElement('ul');
  locationName.innerHTML = `<h3>${this.loc}</h3>`;
  var locationData;

  for (var i = 6; i <= 20; i++) {
    var averageCookies = getAvrgCookies(this);
    sum = sum + averageCookies;
    // console.log(`${makeTime(i)}: ${averageCookies}.`);
    locationData = document.createElement('li');
    locationData.textContent = `${makeTime(i)}: ${averageCookies} cookies.`;
    locationName.appendChild(locationData);
    eachLocation.appendChild(locationName);
    locationData.setAttribute('class', 'location-data');
  }
  locationName.setAttribute('class', 'location-name');
  console.log(`${this.loc}'s total is ${sum}`);
  var showTotal = document.createElement('li');
  showTotal.textContent = `Total: ${sum}`;
  locationName.appendChild(showTotal);
  showTotal.setAttribute('class', 'location-total');
}

$1np.showData();
$sta.showData();
$seaC.showData();
$capHill.showData();
$alki.showData();