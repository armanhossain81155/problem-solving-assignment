// 1st + part


function kilometerToMeter(kilo) {
    var meter = 0;
    if (kilo > 0) {
        meter = kilo * 1000;

    } else {
        meter = " this number is not valid";
    }
    return meter;

}




// 2nd + part
function budgetCalculator(watch, phone, laptop) {
    var totalPrice = 0;
    if (watch > 0, phone > 0, laptop > 0) {
        const watchPrice = 50;
        const phonePrice = 100;
        const laptopPrice = 500;
        var watchTotalPrice = watchPrice * watch;
        var phoneTotalPrice = phonePrice * phone;
        var laptopTotalPrice = laptopPrice * laptop;
        totalPrice = watchTotalPrice + phoneTotalPrice + laptopTotalPrice;

    } else {
        totalPrice = " this number is not valid";
    }

    return totalPrice;

}




// 3rd + part
function hotelCost(n) {
    var totalCost = 0;
    if (n > 0 && n <= 10) {
        totalCost = n * 100;
    } else if (n > 0 && n <= 20) {
        var firstPart = 10 * 100;
        var remaining = n - 10;
        var secondPart = remaining * 80;
        totalCost = firstPart + secondPart;
    } else if (n > 20) {
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = n - 20;
        thirdPart = remaining * 50;
        totalCost = firstPart + secondPart + thirdPart;
    } else {
        totalCost = "this is not valid number";
    }
    return totalCost;

}


// 4th + part

var arrayName = ["arman", "omar", "ashraful", "murad", "mohon", "jihad", "jahidur"];

function megaFriend(arrayName) {
    var long = arrayName[0];
    for (var i = 1; i < arrayName.length; i++) {
        if (arrayName[i].length > long.length) {
            long = arrayName[i];
        }
    }
    return long;
}