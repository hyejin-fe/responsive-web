/* 선택자 */
const aside = document.querySelector("#aside");
const sideTab = aside.querySelector(".side-tab");
const defaultDl = sideTab.querySelector("dl.active");
const defaultDd = defaultDl.querySelector("dd.on");


// 1. 마우스 호버시, 사이드탭 활성화/비활성화 : 이벤트 위임
sideTab.addEventListener("mouseover", (e)=>{
    const clickDl = e.target.closest("dl");
    const clickDd = e.target.closest("dd");
    if(!clickDl) return;

    const activeDl = sideTab.querySelector("dl.active");
    const isDlChanged = activeDl !== clickDl;

    sideTab.querySelectorAll("dl").forEach(function(chlid){
        chlid.classList.remove("active");
    })
    clickDl.classList.add("active");

    if(isDlChanged){
        sideTab.querySelectorAll("dd").forEach(function(child){
            child.classList.remove("on");
        });
        const firstDd = clickDl.querySelector("dd");
        if(firstDd) firstDd.classList.add("on");
    }

    if(clickDd){
        sideTab.querySelectorAll("dd").forEach(function(chlid){
            chlid.classList.remove("on");
        })
        clickDd.classList.add("on");
    }    
});

sideTab.addEventListener("mouseout", (e) => {
    const leaveDl = e.target.closest("dl");
    if(!leaveDl) return;
    if(leaveDl.contains(e.relatedTarget)) return;

    // sideTab 영역 안의 다른 dl로 이동 중이면 무시
    if(sideTab.contains(e.relatedTarget)) return;

    // sideTab 완전히 이탈 시 → 기본 dl, dd 복원
    activateDl(defaultDl);
    if(defaultDd) onDd(defaultDd);
});


function activateDl(targetDl) {
    sideTab.querySelectorAll("dl").forEach(dl => dl.classList.remove("active"));
    targetDl.classList.add("active");
}
function onDd(targetDd) {
    sideTab.querySelectorAll("dd").forEach(dd => dd.classList.remove("on"));
    targetDd.classList.add("on");
}