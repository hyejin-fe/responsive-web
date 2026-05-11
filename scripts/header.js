/* 선택자 */
const snsMenu = document.querySelector(".sns-menu");
const snsBtn = snsMenu.querySelector("button");
const snsDropdown = snsMenu.querySelector(".dropdown");

const searchBtn = document.querySelector(".search-btn");
const menuBtn = document.querySelector(".menu-btn");

const searchArea = document.querySelector(".search-area");
const searchClose = searchArea.querySelector("button");

const gnb = document.querySelector("#gnb");
const closeBtn = gnb.querySelector(".close-btn");

const gnbTabs = gnb.querySelectorAll(".gnb-tab");


// 0. 페이지 로드시, gnb 함수 실행
gnbBaseChange();
// 0-1. 창 크기 변경 시, gnb 함수 실행
window.addEventListener('resize', gnbBaseChange);  // resize : 크기 변경 이벤트


// 1. 공통 - sns-menu button 클릭시, dropdownd에 show클래스 생성/제거
snsBtn.addEventListener("click", ()=>{
    snsDropdown.classList.toggle("show");
});


// 2. 모바일버전 - 버튼 클릭시, searchArea에 show클래스 생성/제거
searchBtn.addEventListener("click", ()=>{
    searchArea.classList.add("show");
});
searchClose.addEventListener("click", ()=>{
    searchArea.classList.remove("show");
});


// 3. 모바일버전 - 버튼 클릭시, gnb에 show클래스 생성/제거
menuBtn.addEventListener("click", ()=>{
    gnb.classList.add("show");
});
closeBtn.addEventListener("click", ()=>{
    gnb.classList.remove("show");
});



// 4. 데스크탑버전 - 
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


// 0. gnb 함수 : 너비에 따라 클래스 변경
function gnbBaseChange(){
    if (window.innerWidth < 1024){
        gnb.classList.add("m-base");
        gnb.classList.remove("p-base");
    }else{
        gnb.classList.add("p-base");
        gnb.classList.remove("m-base");
    }
}

