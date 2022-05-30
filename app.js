



console.log("Working...")

//let clickBtn= document.getElementById("click").;


let player1= document.getElementById('ply1').innerHTML;
let player2= document.getElementById('ply2').innerHTML;

let randomNum1= Math.round(Math.random()*5) +1;
let randomNum2= Math.round(Math.random()*5) +1;


let randomImgSrc1= "images/image"+randomNum1+".png";
let randomImgSrc2= "images/image"+randomNum2+".png";

let trophy= "U+1F3C6";

function actionPerformed(){
    
    fun1();
    fun2();
 if(randomNum1>randomNum2)
    {
        document.getElementById("click").textContent= " 🏆 Player1 WoN ";
    }
    else if(randomNum1<randomNum2)
    {   
        document.getElementById("click").textContent= " Player2 WoN 🏆" ;
    }
    else
    {
        document.getElementById("click").textContent= " Hey! It's DraW";     
    }

}

function fun1(){
    document.querySelectorAll("img")[0].setAttribute("src", randomImgSrc1);
    console.log("clicked")
}

function fun2(){
    document.querySelectorAll("img")[1].setAttribute("src", randomImgSrc2);
    console.log("clicked")
}






