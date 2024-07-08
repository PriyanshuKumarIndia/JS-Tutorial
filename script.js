let url = "https://cat-fact.herokuapp.com/facts";

// let promise = fetch(url);
// promise.then((res)=>{
//     console.log(res);
//     return res.json();
// }).then((val)=>{
//     console.log(val);
// })


//**IIFE**
// (async function (){
//     try {
//         let response = await fetch(url);
//         console.log(response);
//         console.log("Fetching data....");
//         let data = await response.json();
//         for(let i=0;i<data.length;i++){
//             console.log(data[i].text);
//         }
//     } catch(err){
//         console.log(err.message);
//     }
// })();