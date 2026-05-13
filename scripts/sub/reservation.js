/* 선택자 */
const tabBtn = document.querySelector(".tab-btn");
const infoTab = tabBtn.querySelector(".info-tab");
const applyTab = tabBtn.querySelector(".apply-tab");

const tabCont = document.querySelector(".tab-cont");
const spaceInfo = tabCont.querySelector(".space-info");
const spaceApply = tabCont.querySelector(".space-apply");

const spaceCh = spaceApply.querySelector(".space-ch");
const appltCh = spaceApply.querySelector(".apply-ch");

const room = spaceCh.querySelector(".room");

const month = spaceApply.querySelector(".month");
const prevBtn = month.querySelector(".prev");
const nextBtn = month.querySelector(".next");
const monthNum = month.querySelector("p span");
const thisMonthBtn = month.querySelector(".this-month");

const day = spaceApply.querySelector(".day");
const thisMonth = day.querySelector(".this-month");


// 1. tab-btn button 클릭시, 클릭한 버튼에 클래스 추가
infoTab.addEventListener("click", ()=>{
    switchTab(infoTab, spaceInfo);
});
applyTab.addEventListener("click", ()=>{
    switchTab(applyTab, spaceApply);
});


// 2. space-apply 中 달력 이동
// 2(1) 이전, 다음 버튼 클릭시 달력이동
prevBtn.addEventListener("click", ()=>{
    const showTable = day.querySelector(".show");
    if (showTable.previousElementSibling) {
        showTable.classList.remove("show");
        showTable.previousElementSibling.classList.add("show");

        monthNum.textContent = String(Number(monthNum.textContent) - 1).padStart(2, "0"); 
                            // String.padStart(2, "0") : 2자리 미만이면 앞에 "0"을 채워줌
    }
});
nextBtn.addEventListener("click", ()=>{
    const showTable = day.querySelector(".show");
    if (showTable.nextElementSibling) {
        showTable.classList.remove("show");
        showTable.nextElementSibling.classList.add("show");

        monthNum.textContent = String(Number(monthNum.textContent) + 1).padStart(2, "0");
    }   
});
// 2(2) 이번달 버튼 클릭시, 이번달 달력으로 이동
thisMonthBtn.addEventListener("click", ()=>{
    const showTable = day.querySelector(".show");
    showTable.classList.remove("show");
    thisMonth.classList.add("show");

    monthNum.textContent = "05";
});

// 2-1. space-apply 中 소모임실 선택




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
