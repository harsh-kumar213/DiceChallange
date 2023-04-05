var randomnumber1 = Math.random();
randomnumber1 = randomnumber1*6;
randomnumber1 = randomnumber1 + 1;
randomnumber1 = Math.floor(randomnumber1);

var randomnumber2 = Math.random();
randomnumber2 = randomnumber2*6;
randomnumber2 = randomnumber2 + 1;
randomnumber2 = Math.floor(randomnumber2);

document.querySelector(".dice .img1").setAttribute("src", "/images/dice" + randomnumber1 + ".png"); 
document.querySelector(".dice .img2").setAttribute("src", "/images/dice" + randomnumber2 + ".png"); 


if(randomnumber1>randomnumber2){
    document.querySelector(".container h1").innerHTML = "Player 1 winner."
}

else if (randomnumber1<randomnumber2){
    document.querySelector(".container h1").innerHTML = "Player 2 winner."
}
else{
    document.querySelector(".container h1").innerHTML = "DraW!."
}