//ckeck if a leap year 
function leapyear(year){
    if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
        return `${year} is a leap year.`
    }
    else{ 
        return `${year} is not leap year`
    }
}    
//ticket price
function ticketprice(age){
    let price;
    if(age <= 12){
             price = 10}
    else if (age >= 13 && age <= 17){
        price = 15

    }
    else{
        price = 20
    }
    return `the ticket price is $${price}`
}

//fabionaci sequence
function fabionaci(n){
    if(n <= 1){
        return n;
    }
    else{
        return fabionaci(n - 1) + fabionaci(n - 2)
    }
}
//power function
function power(exponent, base){

    if(exponent === 1){
        return 0;
    }
    else if(exponent < 1){
        return 1/power(base , -exponent);
    }
    else{
        return base * power(base , exponent - 1)
    }
}