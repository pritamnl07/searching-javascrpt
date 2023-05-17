var a;
var y;
var b;
function systems(y,a){
    if(1==y){
        document.getElementById("disp").style.backgroundColor = "#ffee00";
    }
    if(2==y){
        document.getElementById("disp").style.backgroundColor = "#26ff00";
    }
    if(3==y){
        document.getElementById("disp").style.backgroundColor = "#ff002b";
    }
    if(4==y){
        document.getElementById("disp").style.backgroundColor = "#3c00ff";
    }
    writ(a,document.getElementById('TxtStyl').value);
}
//writ(a);
/*
window.onload(function(){
    document.getElementById("data").onkeyup(function(e){
        document.getElementById("disp").innerHTML = document.getElementById("data").value ;
    })
})
*/
function writ(a,b){
    document.getElementById("disp").style.fontFamily = b ;
    document.getElementById("disp").innerHTML=a;
}