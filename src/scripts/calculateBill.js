function calculateBill (billAmounnt,taxRate = 0.13, tipRate =     0.15){
    console.log('Running calculate Bill')
    console.log('billAmount:' +billAmounnt + 'taxRate' +taxRate,  'tipRate' +tipRate);
    const total = billAmounnt + billAmounnt *taxRate + billAmounnt * tipRate;
    return total;
}
// let calculateBillamount=calculateBill(100);
// console.log(calculateBillamount);

calculateBill(100);

calculateBill(100,0.66);

calculateBill(100,undefined,0.66);