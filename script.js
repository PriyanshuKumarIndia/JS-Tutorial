let facts = fetch("https://cat-fact.herokuapp.com/facts");

facts.then((response)=>{
    let fact = response.json();
    fact.then((data)=>{
        let f1 = data[0].text;
        localStorage.setItem("1",f1);
        let ff1 = localStorage.getItem("1");
        console.log(ff1);
    })
})