//operators
//arithmetic operators(+,-,/,*,**,%)


var loanAmount=200000
var interestRate=9
var tenure=20
 
//p=principal
//r=interest rate per month/12
//i=r/100
//n=year*12

p=loanAmount
r=interestRate/12
i=r/100
n=tenure*12

EMI=(p*i*(1+i)**n)/(((1+i)**n)-1)
console.log("EMI=",EMI);

totalPayableAmount=EMI*n
console.log("Total Payment=",totalPayableAmount);

totalInterestPayable=totalPayableAmount-p
console.log("Total Interest=",totalInterestPayable);