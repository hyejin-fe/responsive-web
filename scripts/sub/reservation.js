/* 선택자 */
const tabBtn = document.querySelector(".tab-btn");
const infoTab = tabBtn.querySelector(".info-tab");
const applyTab = tabBtn.querySelector(".apply-tab");

const tabCont = document.querySelector(".tab-cont");
const spaceInfo = tabCont.querySelector(".space-info");
const spaceApply = tabCont.querySelector(".space-apply");


// 1. tab-btn button 클릭시, 클릭한 버튼에 클래스 추가
infoTab.addEventListener("click", ()=>{
    switchTab(infoTab, spaceInfo);
});
applyTab.addEventListener("click", ()=>{
    switchTab(applyTab, spaceApply);
});


// 2. space-apply 中 


// 1. 탭버튼 함수
function switchTab(btn, cont){
    btn.classList.add("active");
    [...btn.parentElement.children]
        .filter(function(child){
            return child != btn;
        })
        .forEach(function(chlid){
            chlid.classList.remove("active");
        })

    cont.classList.add("show");
    [...cont.parentElement.children]
        .filter(function(child){
            return child != cont;
        })
        .forEach(function(chlid){
            chlid.classList.remove("show");
        })

    tabBtn.classList.toggle("show");
}
