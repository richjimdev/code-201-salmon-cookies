'use strict';
console.log('JS loaded');

//Constructor to create each location
function SalmonCookies(loc, minCust, maxCust, avrg) {
  this.loc = loc,
  this.minCust = minCust,
  this.maxCust = maxCust,
  this.avrg = avrg;
}

//All location objects being created by the constructor
var $1np = new SalmonCookies('1st and Pike', 23, 65, 6.3);
var $sta = new SalmonCookies('SeaTac Airport', 3, 24, 1.2);
var $seaC = new SalmonCookies('Seattle Center', 11, 38, 3.7);
var $capHill = new SalmonCookies('Capitol Hill', 20, 38, 2.3);
var $alki = new SalmonCookies('Alki', 2, 16, 4.6);

//giving the rendering to table function to all location objects
SalmonCookies.prototype.showData = compile;

// RNG function
function getAvrgCookies(location) {
  var randNum = Math.floor(Math.random() * (location.maxCust - location.minCust + 1) + location.minCust);
  // console.log(`the random number generated for ${$1np.loc} was ${randNum}`);
  var total = location.avrg * randNum;
  return Math.round(total);
}

//function to display time in 12hour format - yay google
function makeTime(hour) {
  var date = new Date(`August 06, 2018 ${hour}:00:00`);
  var dateOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  };
  return date.toLocaleString('en-US', dateOptions);
}

// creating the table head row (6am - 8pm)
var timesOnTable;
var timeOnTableRow = document.getElementById('times-row');

for (var i = 6; i <= 20; i++) {
  timesOnTable = document.createElement('th');
  timesOnTable.textContent = makeTime(i);
  timeOnTableRow.appendChild(timesOnTable);
}

//function to be used as method to render cookie data to table
function compile() {
  var sum = 0;
  var locationRow = document.getElementById('locations-and-data');
  var locationName = document.createElement('tr');
  locationName.textContent = this.loc;
  locationName.className = 'column1';
  var totalPerHour = [];

  for (var i = 6; i <= 20; i++) {
    var averageCookies = getAvrgCookies(this);
    sum += averageCookies;
    totalPerHour.push(averageCookies); // adds an array to the function with all numbers per hour
    var locationData = document.createElement('td');
    locationData.textContent = averageCookies;
    locationName.appendChild(locationData);
    locationRow.appendChild(locationName);
  }
  var showTotal = document.createElement('td');
  showTotal.textContent = sum;
  locationName.appendChild(showTotal);
  console.log(`${this.loc}'s total is ${sum}`);
  return this.perHourSold = totalPerHour;
}

// rendering cookie data for all locations
$1np.showData();
$sta.showData();
$seaC.showData();
$capHill.showData();
$alki.showData();

// 'Total' row header
var totalHeader = document.createElement('th');
totalHeader.textContent = 'Total';
timeOnTableRow.appendChild(totalHeader);

// footer with numbers
var hourlyTotalsRow = document.getElementById('hourly-totals');
var allLocs = [$1np, $sta, $seaC, $capHill, $alki]
var calcGrandTotal = 0;

// loop that adds the totals per hour
for (var e = 0; e < 15; e++){
  var perHourSum = 0;
  for (var f = 0; f < 5; f++) {
    perHourSum += allLocs[f].perHourSold[e];
  }
  var hourlyTotal = document.createElement('td');
  hourlyTotal.textContent = perHourSum;
  hourlyTotalsRow.appendChild(hourlyTotal);
  console.log(perHourSum);
  calcGrandTotal += perHourSum;
}

//And finally, the grand total
var grandTotal = document.createElement('td');
grandTotal.textContent = `Grand Total: ${calcGrandTotal}`;
hourlyTotalsRow.appendChild(grandTotal);