let script = document.createElement("script");
let url = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
script.src=url;
document.body.appendChild(script);
script.onload=function(){
    console.log("DONE");
}
script.onerror=function(){
    console.log("ERROR");
}