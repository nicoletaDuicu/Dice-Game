

let scor1=0;
let scor2=0;

document.addEventListener("keydown", ()=>{
    let randomNumber1=Math.floor(Math.random()*6)+1;
    let randomNumber2=Math.floor(Math.random()*6)+1;
    
    let randomImage1Path="./images/dice"+randomNumber1+".png";
    let randomImage2Path="./images/dice"+randomNumber2+".png";
    let image1=document.querySelectorAll("img")[0];
    image1.setAttribute("src",randomImage1Path);
    let image2=document.querySelectorAll("img")[1];
    image2.setAttribute("src",randomImage2Path);

    image1.classList.add("shake");
    image2.classList.add("shake");
  setTimeout(() => {
  image1.classList.remove("shake");
  image2.classList.remove("shake");
  }, 300);

   let audio=new Audio("./sounds/629982__flem0527__dice-rolling-on-table.wav")
    audio.play();


    if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML="Player 1 Wins! 😎"
    }else if(randomNumber1<randomNumber2){
        document.querySelector("h1").innerHTML="Player 2 Wins! 😎"
        }
        else{
            document.querySelector("h1").innerHTML="Draw! 🫂"
        }
    
})
