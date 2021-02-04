// Kilo to Meter
function kilometerToMeter(kilo) {
    var kilometers = kilo * 1000;
    console.log(kilometers);
}
kilometerToMeter(1);
// budgetCalculator
function budgetCalculator(phone, clock, laptop) {
    var phonePrice = phone * 200; 
    var clockPrice = clock * 100;
    var laptopPrice = laptop * 300;
    var total = phonePrice + clockPrice + laptopPrice;
    console.log(total);
}
budgetCalculator(2, 2, 2);
// hotelCost
function hotelCost(number) {
    if (number <= 10) {
        var oneToTen = number * 100;
        console.log(oneToTen);
    } 
    else if (number <= 20) {
        var extraDays = number - 10;
        var elevenToTwenty = (10*100) + extraDays * 80;
        console.log(elevenToTwenty);
    }
    else {
        var extraDays = number - 20;
        var moreThenTwenty = (10*100) + (10*80) + extraDays * 50;
        console.log(moreThenTwenty);
    }
}
hotelCost(21);
// Big Name Handler
const bigName = (nameArray) => {
    const length = nameArray.map(function (word) {
        return word.length
    })
    let i = length.indexOf(Math.max(...length));
    return nameArray[i];
}
const nameArray = ["Rafiq", "karim", "ShobujAlom", "Sabid", "sumona", "Jhankar Mahbub"];
console.log(bigName(nameArray));