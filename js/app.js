'use strict';
console.log('JS loaded');

var $1np = {
  loc: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avrg: 6.3,
  showData: compile
};

var $sta = {
  loc: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avrg: 1.2,
  showData: compile
};

var $seaC = {
  loc: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avrg: 3.7,
  showData: compile
};

var $capHill = {
  loc: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avrg: 2.3,
  showData: compile
};

var $alki = {
  loc: 'Alki',
  minCust: 2,
  maxCust: 16,
  avrg: 4.6,
  showData: compile
};

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
  var locationName = document.createElement('ul'); // personInfo
  locationName.innerHTML = `<h3>${this.loc}</h3>`;
  var locationData;

  for (var i = 6; i <= 20; i++) {
    var averageCookies = getAvrgCookies(this);
    sum = sum + averageCookies;
    // console.log(`${makeTime(i)}: ${averageCookies}.`);
    locationData = document.createElement('li'); // personShoe/name
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

// var totalCookies = getAvrgCookies(location);
// totalCookies = parseInt(totalCookies) + parseInt(totalCookies);
// return console.log(`${makeTime(i)}: ${getAvrgCookies(location)}`);
// return getAvrgCookies(location);
