function calculateTotalPrice(prices: number[], discount: number): number {
    // Write your code here
    // To debug: console.error('Debug messages...');
    console.log(prices)
    console.log(discount)
    let mostExpensive = Math.max(...prices);

    let discountedPrice = Math.floor(mostExpensive - (mostExpensive *(discount / 100)));

    
    let totalPrice = 0;
    let discountWasApplied = 0;
    prices.forEach((price)=>{
        if(discountWasApplied==0 && price !== mostExpensive){
            totalPrice += price;
            discountWasApplied = 1;
        }
    })

    totalPrice += discountedPrice;

    return totalPrice;
}

