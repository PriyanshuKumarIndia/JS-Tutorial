// some basic questions of javascript for practice


// console.log("Hello India!");

// a=prompt("Enter the age ");
// console.log("You",((a>10 && a<20) ? "are right" : "are Wrong"));

let a=prompt("Enter the number:");
a=Number.parseInt(a);
if(a%2==0 && a%3==0){
    console.log(`${a} is divisible by both 2 and 3\n:)`);
}
else{
    console.log("Not divisible by both 2 and 3\n:(");
}