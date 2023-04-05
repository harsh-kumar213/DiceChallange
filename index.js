var randomnumber1 = Math.random();
randomnumber1 = randomnumber1*6;
randomnumber1 = randomnumber1 + 1;
randomnumber1 = Math.floor(randomnumber1);

document.querySelector(".dice .img1").setAttribute("src", "/images/dice" + randomnumber1 + ".png"); 
document.querySelector(".dice .img2").setAttribute("src", "/images/dice" + randomnumber1 + ".png"); 