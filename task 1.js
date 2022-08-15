//q1
let num=prompt("Enter Number to check if even or odd! ")

if (num%2==0){
console.log("Number is odd");

}
else if (num%2!=0){
console.log("Number is odd");

}
//q2
let num=prompt("Enter Number");
if(num%3==0&&num%5==0){
console.log("FizzBuzz");
}
else if (num%3==0){
console.log("Fizz");
}
else if (num%5==0){
    console.log("Buzz");
}
else{
console.log(num);

}
//q3
let txt="Welcome!";
let result="";

for(let i =txt.length-1;i>=0;i--){
    result+=txt[i];
}
console.log(result);
//4
let r =prompt("Enter Radius");
let area=Math.PI*r*r;
let Circumference=Math.PI*r*2;

console.log(`Area is :${area}`);

console.log(`Circumference is :${Circumference}`);


//5
//6
let num1=prompt("Enter First number  : ");
let num2=prompt("Enter Second number :  ");

if (num1>0&&num2>0){
console.log("The 2 numbers are positive ");
}
else if(num1>0&&num2<0){
    console.log("First num is positive and the second is negative ");
}
else if(num1<0&&num2>0){
    console.log("First num is -ve and the second is +ve ");
}

else if(num1<0&&num2<0){
    console.log("The 2 numbers are negative ");
}
else {
console.log("Both are equal to Zero");

}
//7
//8
let num1=prompt("enter number ");
let num2=prompt("enter number ");
let num3=prompt("enter number ");

let max=0;


if(num1>num2&&num1>num3){
max=num1;
console.log(`Max number is :${max}`);
}

else if(num2>num3&&num2>num1){
    max=num2;
    console.log(`Max number is :${max}`);
    }


    else if(num3>num2&&num3>num1){
        max=num3;
        console.log(`Max number is :${max}`);
        }
//9
function sumGofNumbers(n){
    let sum = 0;
    for(let i = 1 ; i <= n; i++){
        // Sum = sum + i
        sum += i;
    }
    return sum;
}
console.log(sumGofNumbers(15));

//10
let rows = 5;
let i, j;
for (i = 1; i <= rows; i++) {
  for (j = 1; j <= i; j++) {
    document.write("*"); //to make it visibe in main page
  }

  document.write("<br>"); //line break
  document.write("<br>");
}

//11
let num = prompt("Enter a number: ");


if (num > 0) {
    console.log("The number is positive");
}
else if(num < 0) {
     console.log("The number is negative");
}
//12
for(let i = 0 ; i < 10; i++){
  numbers[i]=prompt("Enter Array Elements :");  
}

console.log("elements are :");

for(let i = 0 ; i < 10; i++){

    console.log(`The Value of index ${i} is ${numbers[i]}`);
}
//13
function Sum(){
    
    let n1=Number(prompt("Enter first number  :"));
    let n2=Number(prompt("Enter Second number :"));
    
    let sum=0;
    sum=n1+n2;
    
    return sum;
}
console.log(`The Sum is ${Sum()}`);

//14
function Fact(n){

    if(n == 0 || n == 1){
        return 1;
    }

    else{
    
        return n * Fact(n-1);

    }

    
}
console.log(`The factorial is ${Fact(4)}`);

//15
function Calculator() {
  var message = prompt(
    "which arithmetic operation you want to execute? ( +, -, * or / ): "
  );
  var num1 = Number(prompt("Enter first number: "));
  var num2 = Number(prompt("Enter second number: "));
  var res;

  if (message == "+") {
    res = num1 + num2;
  } else if (message == "-") {
    res = num1 - num2;
  } else if (message == "*") {
    res = num1 * num2;
  } else {
    res = num1 / num2;
  }

  console.log(`The result is ${res}.`);
}
Calculator();
