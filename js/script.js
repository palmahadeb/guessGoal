let inp1 =document.querySelector(".inp1")
let btn1 =document.querySelector(".btn1")
let err1 =document.querySelector(".err1")
let inp2 =document.querySelector(".inp2")
let btn2 =document.querySelector(".btn2")
let err2 =document.querySelector(".err2")
let player =document.querySelector(".player")
let counter =document.querySelector(".counter")
let count =document.querySelector(".count")
let img = document.createElement('img')




let chance = 5

 
btn1.addEventListener("click",function(){

    if (!inp1.value){
        
        err1.innerHTML = ("Please Enter a value")
        err1.style.color ="red"
      
    }else if ((inp1.value - 12) == 0 ? false :!(inp1.value - 12)) {

        err1.innerHTML = ("Please Give A Number")
        err1.style.color ="red"
        
     
    }else if (inp1.value - 12){

      if (!(inp1.value >= 1 && inp1.value <= 10)) {
        console.log("mila nai");
      }
      else{
        err1.innerHTML = " "
        err1.style.color ="red"
        inp2.style.display = "inline-block"
        btn2.style.display = "inline-block"
        inp1.style.display ="none"
        btn1.style.display ="none"
        player.innerHTML = "NAYMER"
        counter.style.display ="block"
        count.innerHTML = chance
       

      
      }
       
             
    }

})


// player 2 Section =================================

btn2.addEventListener("click",function(){

    if (!inp2.value){
        
      
        err2.innerHTML = ("Please Enter a value")
        err2.style.color ="red"

    }else if ((inp2.value - 12) == 0 ? false :!(inp2.value - 12)) {

      
        err2.innerHTML = ("Please Give A Number")
        err2.style.color ="red"
        
    }else if (inp2.value - 12){

      if (!(inp2.value >= 1 && inp2.value <= 10)) {
       
      }
      else{
        err2.innerHTML = " "
        err2.style.color ="red"
      
      }
       
             
    }

})
btn2.addEventListener("click",function(){

  if (chance > 1) {
    chance--
    count.innerHTML = chance
  }else{
    player.innerHTML="ARGENTINA"
        btn2.style.display = "none"
        inp2.style.display = "none"
        counter.innerHTML=" "
        player.style.color = "Green"
        img.src = "images/messi.jpg"
        document.body.appendChild(img);
        img.style.width="400px"
        img.style.height="200px"
        
       

  }
  
    if (inp1.value == inp2.value) {
      player.innerHTML="BRAZIL"
      player.style.color = "Green"
      btn2.style.display ="none"
      inp2.style.display = "none"
      counter.innerHTML=" "
      img.src = "images/naymer.webp"
      document.body.appendChild(img);
      img.style.width="400px"
      img.style.height="200px"
        

     

    } 
      
  
  
})



