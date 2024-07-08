//WAP to print marks of students using object and for in loop

/*
let obj = {
    Harry: 90,
    Priyanshu: 95,
    Rishabh: 30,
    Saurabh: 5
};

console.log(obj);

for(let i in obj){
    console.log(i," : ",obj[i]);
}
*/

//WAP to print try again until user enters correct password

/*
let key = 777;
let num=0;
while(num!==key){
    num = prompt("Enter the password :");
    num = Number.parseInt(num);
    if(num!==key){
        console.log("Try again...");
    }
    else{
        console.log("Correct password!");
    }
}
*/

//WAF to find mean of n numbers

const mean = (arr)=>{
    let sum = parseInt(0);
    for(let x of arr){
        sum+=arr;
    }
    let n=arr.length;
    return sum/n;
}

let n = prompt("Enter the size of the array :");
let arr=[];
console.log(`Enter ${n} values :`);
for(let i=0;i<n;i++){
    let temp=prompt();
    temp=Number.parseInt(temp);
    arr.push(temp);
}

console.log(`The mean is ${mean(arr)}\n`);