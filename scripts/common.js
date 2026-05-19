/* 선택자 - 헤더 */
const snsMenu = document.querySelector(".sns-menu");
const snsBtn = snsMenu.querySelector("button");
const snsDropdown = snsMenu.querySelector(".dropdown");

const headerBor = document.querySelector(".header-bar")
const searchBtn = headerBor.querySelector(".search-btn");
const menuBtn = headerBor.querySelector(".menu-btn");

const searchArea = document.querySelector(".search-area");
const searchClose = searchArea.querySelector("button");

const gnb = document.querySelector("#gnb");
const closeBtn = gnb.querySelector(".close-btn");
const gnbTabs = gnb.querySelectorAll(".gnb-tab");

/* 선택자 - 사이드 */
const aside = document.querySelector("#aside");
const sideTab = aside.querySelector(".side-tab");
const defaultDl = sideTab.querySelector("dl.active");
const defaultDd = defaultDl.querySelector("dd.on");


// 0. 페이지 로드시, gnb 함수 실행
gnbBaseChange();
// 0-1. 창 크기 변경 시, gnb 함수 실행
window.addEventListener('resize', gnbBaseChange);  // resize : 크기 변경 이벤트


// 헤더 1. 공통 - sns-menu button 클릭시, dropdownd에 show클래스 생성/제거
snsBtn.addEventListener("click", ()=>{
    snsDropdown.classList.toggle("show");
});


// 헤더 1-2. 모바일버전 - 검색 버튼 클릭시, searchArea에 show클래스 생성/제거
searchBtn.addEventListener("click", ()=>{
    searchArea.classList.add("show");
});
searchClose.addEventListener("click", ()=>{
    searchArea.classList.remove("show");
});


// 헤더 1-2(2). 모바일버전 - 메뉴 버튼 클릭시, gnb에 show클래스 생성/제거
menuBtn.addEventListener("click", ()=>{
    gnb.classList.add("show");
});
closeBtn.addEventListener("click", ()=>{
    gnb.classList.remove("show");
});


// 헤더 1-2(3). 모바일버전 - li(.gnb-tab) 클릭시, li에 active클래스 생성/제거
gnbTabs.forEach(function(tab){
    const menuTit = tab.querySelector(".menu-tit");

    menuTit.addEventListener("click", ()=>{
        if(!gnb.classList.contains("m-base")) return;

        gnbTabs.forEach(function(t){
            t.classList.remove("show")
        });
        tab.classList.add("show");
    });

    // (3-1). 모바일버전 - sub-menu > li > a 클릭시, depth3에 on클래스 생성/제거
    const subMenu = tab.querySelector(".sub-menu");
    const subTabs = subMenu.querySelectorAll(".sub-tab");
    subTabs.forEach(function(li){
        li.addEventListener("click", (e)=>{
            e.stopPropagation(); // 탭 클릭 이벤트 버블링 방지 : 이 이벤트는 여기서 끝내고 위로 올려보내지 마
        
            const depth3 = li.querySelector(".depth3");
            if(depth3){
                const isOpen = depth3.classList.contains("on"); // 클릭 전 열림 상태 저장
                
                subTabs.forEach(function(t){
                    t.querySelector(".depth3")?.classList.remove("on"); // 모두 닫기
                });

                if(!isOpen){ // 닫혀있었으면 열기
                    depth3.classList.add("on");
                }
            }
        });
    });
});


// 헤더 1-3. 데스크탑버전
gnbTabs.forEach(function(tab){
    const menuTit = tab.querySelector(".menu-tit");
    const subMenu = tab.querySelector(".sub-menu");

    subMenu.addEventListener('mouseenter', ()=>{  // mouseenter : 마우스가 요소 안으로 들어올 때
        menuTit.classList.add('active');
    });

    subMenu.addEventListener('mouseleave', ()=>{  // mouseenter : 마우스가 요소 밖으로 나갈 때
        menuTit.classList.remove('active');
    });
});


// 헤더 1. gnb 함수 : 너비에 따라 클래스 변경
function gnbBaseChange(){
    if (window.innerWidth < 1024){
        gnb.classList.add("m-base");
        gnb.classList.remove("p-base");
    }else{
        gnb.classList.add("p-base");
        gnb.classList.remove("m-base");
    }
}


// 사이드 2. 마우스 호버시, 사이드탭 활성화/비활성화 : 이벤트 위임
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


// 사이드 2. 사이드 함수
function activateDl(targetDl) {
    sideTab.querySelectorAll("dl").forEach(dl => dl.classList.remove("active"));
    targetDl.classList.add("active");
}
function onDd(targetDd) {
    sideTab.querySelectorAll("dd").forEach(dd => dd.classList.remove("on"));
    targetDd.classList.add("on");
}