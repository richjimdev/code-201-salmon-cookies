'use strict';
console.log('JS loaded');

//Constructor to create each location
function SalmonCookies(loc, minCust, maxCust, avrg) {
  this.loc = loc,
  this.minCust = minCust,
  this. maxCust = maxCust,
  this.avrg = avrg;
}

//All location objects being created by the constructor
var $1np = new SalmonCookies('1st and Pike', 23, 65, 6.3);
var $sta = new SalmonCookies('SeaTac Airport', 3, 24, 1.2);
var $seaC = new SalmonCookies('Seattle Center', 11, 38, 1.2);
var $capHill = new SalmonCookies('Capitol Hill', 20, 38, 3.7);
var $alki = new SalmonCookies('Alki', 2, 16, 4.6);

//giving the compile function to all location objects
SalmonCookies.prototype.showData = compile;

//function to calculate the random customers
function getAvrgCookies(location) {
  var randNum = Math.floor(Math.random() * (location.maxCust - location.minCust + 1) + location.minCust);
  // console.log(`the random number generated for ${$1np.loc} was ${randNum}`);
  var total = location.avrg * randNum;
  return Math.round(total);
}

//function to display time in 12hour format
function makeTime(hour) {
  var date = new Date(`August 06, 2018 ${hour}:00:00`);
  var dateOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  };
  return date.toLocaleString('en-US', dateOptions);
}

// creates the table head row
var timesOnTable;
var timeOnTableRow = document.getElementById('times-row');
for (var i = 6; i <= 20; i++) {
  timesOnTable = document.createElement('th');
  timesOnTable.textContent = makeTime(i);
  timeOnTableRow.appendChild(timesOnTable);
}

var totalHeader = document.createElement('tr');
totalHeader.textContent = 'Total';
timeOnTableRow.appendChild(totalHeader);

var sum = 0;

function compile() {
  var locationRow = document.getElementById('locations-and-data');
  var locationName = document.createElement('tr');
  locationName.textContent = this.loc;

  for (var i = 6; i <= 20; i++) {
    var averageCookies = getAvrgCookies(this);
    sum = sum + averageCookies;
    // console.log(`${makeTime(i)}: ${averageCookies}.`);
    var locationData = document.createElement('td');
    locationData.textContent = averageCookies;
    locationName.appendChild(locationData);
    locationRow.appendChild(locationName);
    // locationData.setAttribute('class', 'location-data');
  }
  // locationName.setAttribute('class', 'location-name');
  var showTotal = document.createElement('td');
  showTotal.textContent = sum;
  locationName.appendChild(showTotal);
  console.log(`${this.loc}'s total is ${sum}`);
  // showTotal.setAttribute('class', 'location-total');
}

$1np.showData();
$sta.showData();
$seaC.showData();
$capHill.showData();
$alki.showData();