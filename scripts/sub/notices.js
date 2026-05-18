const tabBtnArea = document.querySelector(".tab-btn");
const tabBtnA = tabBtnArea.querySelector(".tab-btn-a")
const tabBtnB = tabBtnArea.querySelector(".tab-btn-b")
const tabBtnC = tabBtnArea.querySelector(".tab-btn-c")

const postA = document.querySelector(".notices")
const postB = document.querySelector(".notices-b")
const postC = document.querySelector(".promo-list")

const libaryListTit = document.querySelector("fieldset .library-ch")
const choiceTit = document.querySelector("fieldset .subject-ch")
const libaryList = libaryListTit.querySelectorAll("li")

// 첫화면
postA.classList.add("show");
tabBtnA.classList.add("active");


tabBtnArea.addEventListener("click",function(e){

    const li = e.target.closest("li")
    if(!li) return
    console.log(e.target)
    if(li == tabBtnA){
        postA.classList.add("show")
        tabBtnA.classList.add("active")

        postB.classList.remove("show")
        postC.classList.remove("show")
        tabBtnB.classList.remove("active")
        tabBtnC.classList.remove("active")

    }
    
    if(li == tabBtnB){
        postB.classList.add("show")
        tabBtnB.classList.add("active")

        postA.classList.remove("show")
        postC.classList.remove("show")
        tabBtnA.classList.remove("active")
        tabBtnC.classList.remove("active")
    } 

    if(li == tabBtnC){
        postC.classList.add("show")
        tabBtnC.classList.add("active")

        postA.classList.remove("show")
        postB.classList.remove("show")
        tabBtnA.classList.remove("active")
        tabBtnB.classList.remove("active")
    } 

   
});


// libaryListTit.addEventListener("click",function(e){

//     this.classList.toggle("open");

//     libaryList.forEach(function(item){

//         if(!item.classList.contains("show")){

//             if(libaryListTit.classList.contains("open")){

//                 item.style.display = "block"

//             }else{

//                 item.style.display = "none"
//             }
//         }

//     })

// })



libaryListTit.addEventListener("click", (e)=>{
    dropdown(e);
});
choiceTit.addEventListener("click", (e)=>{
    dropdown(e);
});



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