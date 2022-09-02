let progress = document.getElementById("progress")
let prev = document.getElementById("prev")
let next = document.getElementById("next")
let circle = document.querySelectorAll(".circle")
let lessons = document.getElementById("lesson")

let currentActive = 1;


next.addEventListener("click", ()=>{
    currentActive++;

    if(currentActive > circle.length){
        currentActive = circle.length;
    }
    update()
    lesscount()
})
prev.addEventListener("click", ()=>{
    currentActive--;

    if(currentActive < 1){
        currentActive = 1;
    }
    update()
    lesscount2()
})


function update(){
    circle.forEach((circles, indx)=>{
        if(indx < currentActive){
            circles.classList.add("active")
        }else{
            circles.classList.remove("active")
        }

    })
    const active = document.querySelectorAll(".active")

    progress.style.width = (active.length -1) / (circle.length - 1) * 100 + '%'

    console.log(active.length -1, circle.length - 1)

    if(currentActive == 1){
        prev.disabled = true;
    }
    else if(currentActive == circle.length){
        next.disabled = true;
    }else{
        prev.disabled = false;
        next.disabled = false;
    }
}


let less = ["Lesson 2", "Lesson 3", "Lesson 4"]

let counter= 0;

function lesscount(){

    lessons.innerHTML = less[counter];
    counter++

}
function lesscount2(){

    lessons.innerHTML = less[counter];
    counter--

}