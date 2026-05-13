/* 선택자 */
const tabBtn = document.querySelector(".tab-btn");
const firstTab = tabBtn.querySelector(".first");
const secondTab = tabBtn.querySelector(".second");
const thirdTab = tabBtn.querySelector(".third");
const lastTab = tabBtn.querySelector(".last");

const historyArea = document.querySelector(".history-area");
const firstCont = historyArea.querySelector(".first");
const secondCont = historyArea.querySelector(".second");
const thirdCont = historyArea.querySelector(".third");
const lastCont = historyArea.querySelector(".last");



// 1. tab-btn li 클릭시, 클릭한 버튼에 클래스 추가
firstTab.addEventListener("click", ()=>{
    switchTab(firstTab, firstCont);
});
secondTab.addEventListener("click", ()=>{
    switchTab(secondTab, secondCont);
});
thirdTab.addEventListener("click", ()=>{
    switchTab(thirdTab, thirdCont);
});
lastTab.addEventListener("click", ()=>{
    switchTab(lastTab, lastCont);
});


// 1. 탭버튼 함수
function switchTab(btn, cont){

    tabBtn.querySelectorAll("li").forEach(function(chlid){
        chlid.classList.remove("active");
    })
    btn.classList.add("active");

    historyArea.querySelectorAll(".history-box").forEach(function(chlid){
        chlid.classList.remove("show");
    })
    cont.classList.add("show");

    tabBtn.classList.toggle("show");
}