// The prices of watch,mobile and laptops are fixed

const watch_per_price = 50;
const mobile_per_price = 100;
const laptop_per_price = 500;

// The function name is "budgetCalculator"

function budgetCalculator(quantityOf_watch,quantityOf_mobile,quantityOf_laptop){
        var watch_price = watch_per_price * quantityOf_watch;
        var mobile_price= mobile_per_price * quantityOf_mobile;
        var laptop_price = laptop_per_price * quantityOf_laptop;
        var total_price = watch_price + mobile_price + laptop_price;
        return total_price;
}

// The function is called from here with parameter

var myCheck = budgetCalculator(1,2,3);
console.log(myCheck);