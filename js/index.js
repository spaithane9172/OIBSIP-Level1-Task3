function ctof(c){
    r=(c-32)*(5/9)
    document.getElementById("result").innerHTML=r.toFixed(4);
}
function ftoc(f){
    r=(f*9/5)+32;
    document.getElementById("result").innerHTML=r.toFixed(4);
}
function convert(){
    n=document.getElementById("temp").value;
    if(document.getElementById("r1").checked){
        ctof(n);
    }
    if(document.getElementById("r2").checked){
        ftoc(n);
    }
}