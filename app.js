let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromEuroToDollar(euro){
let priceDollar=oneEuroIs.USD;
let totalDollar=euro*priceDollar;
return totalDollar;
}
//monto en dólares -monto equivalente en yenes japoneses
function fromDollarToYen(dollar){
let priceYen=oneEuroIs.JPY;
let priceDollar=oneEuroIs.USD;
let totalEuro=dollar/priceDollar;
let totalYen=totalEuro*priceYen;
return totalYen;
}
//monto en euros-monto equivalente en dólares estadounidenses


//monto en yenes -monto equivalente en libras esterlinas
function fromYenToPound(yen){
let priceYen=oneEuroIs.JPY;
let pricePound=oneEuroIs.GBP;
let totalEuro=yen/priceYen;
let totalPound=totalEuro*pricePound;
return totalPound;
}
 
console.log(fromEuroToDollar(3.5));
console.log(fromDollarToYen(3.5));
console.log(fromYenToPound(3.5));

module.exports={fromEuroToDollar,fromDollarToYen ,fromYenToPound};