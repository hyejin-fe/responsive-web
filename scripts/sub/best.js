const tabBtnArea = document.querySelector(".tab-btn")
const tabBtnA = tabBtnArea.querySelector(".best-a")
const tabBtnB = tabBtnArea.querySelector(".best-b")
const mainContA = document.querySelector(".loan-best-area-a")
const mainContB = document.querySelector(".popular-books-area")

const ulA = document.querySelector(".libary")
const ulC = document.querySelector(".libary-b")
const liA = ulA.querySelectorAll(".libary li")
const liC = ulC.querySelectorAll(".libary-b li")
const ulB = document.querySelector(".form-area .date")
const liB = ulB.querySelectorAll(".date li")



tabBtnArea.addEventListener("click",function(e){

    const li = e.target.closest("li")
    if(!li) return
    console.log(e.target)
    if(li == tabBtnA){
        mainContA.classList.add("show")
        tabBtnA.classList.add("active")
        mainContB.classList.remove("show")
        tabBtnB.classList.remove("active")

    }
    
    if(li == tabBtnB){
        mainContB.classList.add("show")
        tabBtnB.classList.add("active")
        mainContA.classList.remove("show")
        tabBtnA.classList.remove("active")
    } 


});


ulA.addEventListener("click", (e)=>{
    dropdown(e);
});
ulB.addEventListener("click", (e)=>{
    dropdown(e);
});
ulC.addEventListener("click",(e)=>{
    dropdown(e);
})



function dropdown(e){
    const clickLi = e.target.closest("li");
    if(!clickLi) return;

    const ul = clickLi.parentElement;

    clickLi.classList.add("active");
    [...ul.children]

        .filter(function(child){
            return child != clickLi;
        })
        .forEach(function(child){
            child.classList.remove("active");
        })

    ul.classList.toggle("show");
}