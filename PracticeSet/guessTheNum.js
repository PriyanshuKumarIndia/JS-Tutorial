const rndm = (x1,x2)=>{
    return Math.floor(Math.random() * (x2-x1) + x1);
}

let rnd = parseInt(rndm(1,100));
let count = 0;

while(true){
    count++;
    let guess=prompt("Enter your guess :");
    if(guess == rnd){
        alert(`Congratualions!!, you gussed the number correct in ${count} attempts.`);
        break;
    }
    else if(rnd > guess){
        alert(`The number is greater than ${guess} try again...`);
    }
    else{
        alert(`The number is smaller than ${guess} try again...`);
    }
};