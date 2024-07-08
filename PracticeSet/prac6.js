const checkAge = ()=>{
    let num = prompt("Enter the number :");
if(num >= 18){
    alert("You can drive.");
}
else if(num>0 && num<18){
    alert("You cannot drive");
    let choice = confirm("Do you want to enter age again?");
    if(choice){
        checkAge();
    }
}
else{
    console.error("You entered the invalid age.");
}
}

checkAge();