let increment = 0;

let show = document.querySelector(".show")

let cuerpo = document.querySelector(".container")
 
document.addEventListener("click",(e)=>{
    console.log(e)
    if(e.target.matches("#restar")){
        increment--
        show.innerHTML = increment
        cuerpo.style.backgroundColor = "rgb(255, 37, 71)";
        document.getElementById("#imgn").src="../img/2.jpg"
    } 
     if (e.target.matches("#reset")){
        increment = 0
        show.innerHTML = increment
        cuerpo.style.backgroundColor = "rgb(206, 255, 8)";
    } 
     if (e.target.matches("#sumar")){
        increment++
        show.innerHTML = increment
        cuerpo.style.backgroundColor = "rgb(87, 192, 183)";
        
    }

})