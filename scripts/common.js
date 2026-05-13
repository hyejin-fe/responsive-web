/* 선택자 */
const aside = document.querySelector("#aside");
const sideTab = aside.querySelector(".side-tab");
const defaultDl = sideTab.querySelector("dl.active");


// 1. 마우스 호버시, 사이드탭 활성화/비활성화 : 이벤트 위임
sideTab.addEventListener("mouseover", (e)=>{
    const clickDl = e.target.closest("dl");
    const clickDd = e.target.closest("dd");
    if(!clickDl) return;

    sideTab.querySelectorAll("dl").forEach(function(chlid){
        chlid.classList.remove("active");
    })
    clickDl.classList.add("active");

    if(clickDd != null){
        sideTab.querySelectorAll("dd").forEach(function(chlid){
            chlid.classList.remove("on");
        })
        clickDd.classList.add("on");
    }else{
        return;
    }
    
});

sideTab.addEventListener("mouseout", (e) => {
    const leaveDl = e.target.closest("dl");
    if(!leaveDl) return;
    if(leaveDl.contains(e.auotherDl)) return;

    // sideTab 영역 안의 다른 dl로 이동 중이면 무시
    if(sideTab.contains(e.auotherDl)) return;

    // sideTab 완전히 이탈 시 → 기본 dl 복원
    activateDl(defaultDl);
});



function activateDl(targetDl) {
    sideTab.querySelectorAll("dl").forEach(dl => dl.classList.remove("active"));
    targetDl.classList.add("active");
}