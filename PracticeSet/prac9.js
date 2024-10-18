// let src =
//   "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";

// let p1 = new Promise((resolve,reject)=>{
//     let script = document.createElement("script");
//     script.src=src;
//     script.onload = (()=>{
//         resolve(`${src} loaded successfully`);
//     })
//     script.onerror = ((err)=>{
//         reject(err);
//     })
//     document.head.appendChild(script);
// }).then((val)=>{
//     console.log(val);
// }).catch((err)=>{
//     console.log(err+ "hehe");
// })

// let func = async () => {
//     return new Promise((resolve, reject) => {
//         let script = document.createElement("script");
//         script.src = src;
//         script.onload = () => {
//           resolve(`${src} loaded successfully`);
//         };
//         script.onerror = (err) => {
//           reject(err);
//         };
//         document.head.appendChild(script);
//       });
// };
// let run = async ()=>{
//     let p1 = await func();
//     console.log(p1);
// }
// run();

// let p1 = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             reject(new Error("HA HA HA"));
//         },3000)
//     });
// }

// async function run(){
//     try{
//         let p2 = await p1();
//         console.log(p2);
//     }
//     catch(err){
//         console.log(err);
//     }
//     console.log("I am here");
// }
// run();

let p1 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(10);
        },1000)
    });
}

let p2 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(20);
        },2000)
    });
}

let p3 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(30);
        },3000)
    });
}

const run = async ()=>{
    console.time("Run");
    // let a1 = await p1();
    // let a2 = await p2();
    // let a3 = await p3();
    // console.log(a1,a2,a3);
    let arr = await Promise.all([p1(),p2(),p3()]);
    console.log(arr);
    console.timeEnd("Run");
}
run();