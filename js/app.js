'use strict';

var StoreLocation = function(
  storeLocation, 
  minCustPerHour, 
  maxCustPerHour, 
  avgCookiePerCust,
  openingHour,
  closingHour,
  totalCookiesSold ) {
  this.storeLocation = storeLocation;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiePerCust = avgCookiePerCust;
  this.openingHour = openingHour;
  this.closingHour = closingHour;
  this.totalCookiesSold = totalCookiesSold;
};


var seattle = new StoreLocation('Seattle', 23, 65, 6.3, 6, 20, [], 0);
var tokyo = new StoreLocation('Tokyo', 3, 24, 1.2, 6, 20, [], 0);
var dubai = new StoreLocation('Dubai', 11, 38, 3.7, 6, 20, [], 0);
var paris = new StoreLocation('Paris',20, 38, 2.3, 6, 20, [], 0);
var lima = new StoreLocation('Lima', 2, 16, 4.6, 6, 20, [], 0);

st(seattle);
     function st(location){
      var maxCustPerHour = location.maxCustPerHour;
      var minCustPerHour = location.minCustPerHour;
      var avgCookiePerCust = location.avgCookiePerCust;
      var custPerHour = [];
      var hoursOfOperation = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
      for (var i=0; i<hoursOfOperation.length; i++){
      var randomCust = Math.floor(Math.random()*(maxCustPerHour - minCustPerHour + 1) + minCustPerHour);
      custPerHour.push(randomCust);
      document.writeln(hoursOfOperation[i] + ' : ' + custPerHour[i] + ' cookies');
      document.write("<br/>");
            }
      }
  ;
//gyuiuhyiuoiuoiuoiopi
    