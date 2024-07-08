const sps = ()=>{
    let arr = ["stone" , "paper" , "scissor"];
    let idx = Math.floor(Math.random() * (2-0) + 0);
    let c1 = arr[idx];
    let p1 = prompt("Enter your choice : \n(\"IN LOWER CASE ONLY\"))");
    if(p1 == c1){
        alert("Tie...");
    }
    else if(p1==arr[0]){
        if(c1 == arr[1]){
            alert(`Cpu has ${c1}, HE WON!`);
        }
        else if(c1 == arr[2]){
            alert(`Cpu has ${c1}, YOU WON!`);
        }
    }
    else if(p1==arr[1]){
        if(c1 == arr[2]){
            alert(`Cpu has ${c1}, HE WON!`);
        }
        else if(c1 == arr[0]){
            alert(`Cpu has ${c1}, YOU WON!`);
        }
    }
    else if(p1==arr[2]){
        if(c1 == arr[0]){
            alert(`Cpu has ${c1}, HE WON!`);
        }
        else if(c1 == arr[1]){
            alert(`Cpu has ${c1}, YOU WON!`);
        }
    }
    else{
        alert("Invalid input try again......");
    }

    if(confirm("Do you want to play again?")){
        sps();
    }
    
}

sps();