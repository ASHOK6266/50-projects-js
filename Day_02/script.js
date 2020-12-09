 const progress = document.getElementById("progress")
 const next = document.getElementById("next")
 const prev = document.getElementById("prev")
 const circles = document.querySelectorAll(".circle")

let curentActive = 1

 next.addEventListener("click", ()=>{
     curentActive++

     if(curentActive > circles.length){
         currentActive = circles.length 
         //console.log(currentActive)
     }

     update()

 })


prev.addEventListener("click", ()=>{
    curentActive--

    if(curentActive < 1){
        currentActive = 1
        //console.log(currentActive)
    }

    update()

})


function update(){
    circles.forEach((circle,index)=>{
        if(index < curentActive){
            circle.classList.add("active")
        }
        else{
            circle.classList.remove("active")
        }
    })
    
    const actives = document.querySelectorAll(".active")

    progress.style.width = (actives.length - 1) / (circles.length - 1) *100 + '%'

    if(currentActive === 1){
        prev.disabled = true
    }
    else if (currentActive === circles.length){
        next.disabled = true
    }
    else{
        prev.disabled = false
        next.disabled = false
    }
}