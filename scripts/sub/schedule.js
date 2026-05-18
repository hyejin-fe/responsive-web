const nextMonthBtn = document.querySelector(".next-month");
const prevMonthBtn = document.querySelector(".prev-month");
const monthMay = document.querySelector(".month-may");
const monthJune = document.querySelector(".month-june");
const monthBox = document.querySelector(".month p")


//함수구간
prevMonthBtn.disabled = true; //이전버튼 막기

//다음달력
nextMonthBtn.addEventListener("click",()=>{
    monthMay.classList.add("hide");
    monthJune.classList.remove("hide");
    prevMonthBtn.disabled = false;
    nextMonthBtn.disabled = true;
    monthBox.textContent= "2026.06"
});
//이전달력
prevMonthBtn.addEventListener("click", ()=>{
    monthMay.classList.remove("hide");
    monthJune.classList.add("hide");
    prevMonthBtn.disabled = true;
    nextMonthBtn.disabled = false;
    monthBox.textContent= "2026.05"
})