function first(firstnum,secnum,opp)

{
    if (isNaN(firstnum)!=isNaN(secnum)){
        return(console.log('is nan error'))
    }
    switch(opp){
        case '+':
            return(console.log(firstnum+secnum))
            break
        case '-':
            return(console.log(firstnum-secnum))
            break
        case '*':
            return(console.log(firstnum*secnum))
            break
        case '/':
            return(console.log(firstnum/secnum))
    }

}
const str = prompt('enter your string');
const str2 = str.toUpperCase();
console.log(str2);


//third one
sales = new [Array]();

sales[0] = +prompt('first one');
sales[1] = +prompt('sec one');
sales[2] = +prompt('third one');
sales[3] = +prompt('fouth one');
sales[4] = +prompt('one');

localStorage.qualifier=5;
localStorage.factor=2;

total = 0;

function myFunction() {
     for (i=0;i<sales.length;i++){
          if (sales[i]>localStorage.qualifier) {
               bonus = sales[i]*localStorage.factor;
               total = total + bonus;                 
          };
          avg = total/bonus;
     };
     return avg;
};
const avg=myFunction();
if (avg<=12){
    alert('shoma mashroti')
}

alert(extraPay())