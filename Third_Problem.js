// Day Per costs are fixed

const first_10days_cost = 100;
const second_10days_cost = 80;
const third_10days_cost = 50;
var total_hotel_cost;
var remaining_days;

// The function name is "NumberOf_Day"

function hotelCost(NumberOf_Day){
     if (NumberOf_Day>0 && NumberOf_Day<=10){
        total_hotel_cost =  NumberOf_Day * first_10days_cost;
     }
     else if (NumberOf_Day>10 && NumberOf_Day<=20){
        remaining_days = NumberOf_Day-10;
        total_hotel_cost = (first_10days_cost*10) + (remaining_days*second_10days_cost);
     }
     else {
        remaining_days = NumberOf_Day-20;
        total_hotel_cost = (first_10days_cost*10)+(second_10days_cost*10)+(remaining_days*third_10days_cost);
     }

     return total_hotel_cost;


}
// function is called from here with parameter

var myCheck = hotelCost(30);
console.log(myCheck);