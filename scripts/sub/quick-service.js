/* 선택자 */
const tabBtn = document.querySelector(".tab-btn");
const libraryTab = tabBtn.querySelector(".library-tab");
const cultrueTab = tabBtn.querySelector(".cultrue-tab");

const tabCont = document.querySelector(".tab-cont");
const libraryService = tabCont.querySelector(".library-service");
const cultureService = tabCont.querySelector(".culture-service");


// 1. tab-btn li 클릭시, 클릭한 버튼에 클래스 추가
libraryTab.addEventListener("click", ()=>{
    switchTab(libraryTab, libraryService);
});
cultrueTab.addEventListener("click", ()=>{
    switchTab(cultrueTab, cultureService);
});


// 1. 탭버튼 함수
function switchTab(btn, cont){

    tabBtn.querySelectorAll("li").forEach(function(chlid){
        chlid.classList.remove("active");
    })
    btn.classList.add("active");

    tabCont.querySelectorAll(".cont").forEach(function(chlid){
        chlid.classList.remove("show");
    })
    cont.classList.add("show");

    tabBtn.classList.toggle("show");
}