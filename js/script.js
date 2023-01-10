// DOM = Document Object Model

let in1 = document.querySelector(".in1")
let btn1 = document.querySelector(".btn1")
let err1 = document.querySelector(".err1")
let in2 = document.querySelector(".in2")
let btn2 = document.querySelector(".btn2")
let err2 = document.querySelector(".err2")
let player = document.querySelector(".player")
let counter =  document.querySelector(".counter")
let count =  document.querySelector(".count")
let win = document.querySelector(".win")
let btn3 = document.querySelector(".btn3")


win.style.display = "none"
btn3.style.display = "none"



let chance = 5



btn1.addEventListener("click",function(){
   
    
    if(!in1.value){
        err1.innerHTML = "Please Enter a Value"
        err1.style.color = "red"
        
    }else if((in1.value - 12) == 0 ? false :!(in1.value - 12)){
     
        err1.innerHTML = "Please Give A Number"
        err1.style.color = "red"
    
    }else if(in1.value - 12){
        if(!(in1.value >= 1 && in1.value <= 10)){
            console.log("Mile Nai")
        }else{
            err1.innerHTML = ""
            err1.style.color = "red"
            in2.style.display = "inline-block"
            btn2.style.display = "inline-block"
            in1.style.display = "none"
            btn1.style.display = "none"
            player.innerHTML = "Player 2"
            counter.style.display = "block"
            count.innerHTML = chance
    

        }
        
    }


    
})

btn2.addEventListener("click",function(){

    if(!in2.value){
       
        err2.innerHTML = "Please Enter a Value"
        err2.style.color = "red"
        
    }else if((in2.value - 12) == 0 ? false :!(in2.value - 12)){
 
        err2.innerHTML = "Please Give A Number"
        err2.style.color = "red"
    }else if(in2.value - 12){
        if(!(in2.value >= 1 && in2.value <= 10)){
           
           
        }else{
            console.log("ami in2 er else er modde")

        }
        
    }

    // btn3 er kaj ei khane

    btn3.addEventListener("click",function(){

        chance = 5

            err1.innerHTML = ""
            err1.style.color = "red"
            in2.style.display = "none"
            btn2.style.display = "none"
            in1.style.display = "inline-block"
            btn1.style.display = "inline-block"
            player.innerHTML = "Player 1"
            counter.style.display = "none"
            win.style.display = "none"
            btn3.style.display = "none"
            in1.value = " "
            in2.value = " "
            // count.innerHTML = chance

    })

    // ar ektu soto korekora jeto, bujar jonno benge benge korlam.....
    if(!in2.value){
        console.log("ami in2 er modde kisu painai")

    }else if((in2.value - 12) == 0 ? false :!(in2.value - 12)){
        console.log("ami ja paisi ta number na")

    }else if(in1.value - 12){
        console.log("tik tak ase lets ck...")
        //je hetu tik tak ase, age error ta bad dei
        err2.innerHTML = ""
        
        if(chance > 1){
     
            console.log("valu ase")
            chance--
            count.innerHTML = chance
            if(in1.value == in2.value){
                player.innerHTML = "Player 2 Winner"
                btn2.style.display = "none"
                win.style.display = "block"
                btn3.style.display = "block"
                
            }
        }else{
            player.innerHTML = "Player 1 Winner"
            btn2.style.display = "none"
            win.style.display = "block"
            btn3.style.display = "block"
            
        }
    }
    
    
})












