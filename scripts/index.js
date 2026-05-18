/* 선택자 - 팝업공지 */
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();
const date = today.getDate();

const popupWrap = document.querySelector(".popup-wrap");
const closeBtn = popupWrap.querySelector(".close-btn");
const checkBox = popupWrap.querySelector("input");
const label = popupWrap.querySelector("label");

/* 선택자 - 메인 */
const restInfo = document.querySelector(".rest-info");
const restPrevBtn = restInfo.querySelector(".prev");
const restNextBtn = restInfo.querySelector(".next");
const restMonth = restInfo.querySelector(".month");
const restBox = restInfo.querySelector(".rest-box");

/* 선택자 - 아카이브 */
const secArchbanner = document.querySelector(".archive-banner");
const selBox = secArchbanner.querySelector(".sel-box")

/* 선택자 - 북큐레이션 */
const curation = document.querySelector(".curation");
const curationTabBtns = curation.querySelectorAll(".tab-btn button");
const curationSwiper = curation.querySelector(".curation-swiper");
const contAll = curationSwiper.querySelectorAll(".curation-banner-cont");

let curationBannerCont = curationSwiper.querySelector(".curation-banner-cont");
let curationBanner = curationBannerCont.querySelector(".curation-banner");
let curationBannerList = curationBannerCont.querySelector(".curation-banner-list");

const slidePrevBtn = curationSwiper.querySelector(".prev");
const slideNextBtn = curationSwiper.querySelector(".next");


// 팝업공지 1. 닫기 버튼 클릭
closeBtn.addEventListener("click",function(){
    if(checkBox.checked){
        const endDate = new Date(year, month, date, 23,59,59 );
        localStorage.setItem("popupEnd",endDate);
    }
    popupWrap.style.display = "none";
})

// 팝업공지 1-2. 체크박스 off/on -change
checkBox.addEventListener("change", function(){
    console.log(checkBox.checked); // true 또는 false
    if(checkBox.checked){
        label.classList.add("check");
    }else{
        label.classList.remove("check");
    }
}) 

const popupEnd = localStorage.getItem("popupEnd");
    if(popupEnd){
    // 저장된 시간
    const endDate = new Date(popupEnd);

    if(today < endDate){
        popupWrap.style.display = "none";
    }
}


// 메인 2. 인기 검색어 슬라이드
var trendingSwiper = new Swiper(".trending-swiper", {
    direction: "vertical",
    loop: true,
    spaceBetween: 10,
    
    autoplay: {  // 자동실행
        delay: 2500,
        disableOnInteraction: true,  // false / true : 접근성향상, 사용자 개입시 자동실행 멈춤
    },

    // Navigation arrows
    navigation: {
        nextEl: '.trending-swiper .next',
        prevEl: '.trending-swiper .prev',
    },
});

// 메인 2-2. 휴무날 슬라이드
restPrevBtn.addEventListener("click", function(){
    const showDay = restBox.querySelector(".show");

    if(showDay.previousElementSibling){
        showDay.classList.remove("show");
        showDay.previousElementSibling.classList.add("show");

        restMonth.textContent = String(Number(restMonth.textContent) - 1).padStart(2, "0");
    }
})
restNextBtn.addEventListener("click", function(){
    const showDay = restBox.querySelector(".show");

    if(showDay.nextElementSibling){
        showDay.classList.remove("show");
        showDay.nextElementSibling.classList.add("show");

        restMonth.textContent = String(Number(restMonth.textContent) + 1).padStart(2, "0");
    }
})


// 팝업존 3. 
var popupZone = new Swiper(".popup-zone .swiper ", {
    slidesPerView: 'auto', //cdn 슬라이더 너비 고정 초기화
    
    loop: true,
    centeredSlides: false,
    spaceBetween: 10,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: ".popup-zone .next",
        prevEl: ".popup-zone .prev",
    },
});

// 도서관아카이브 5. 카드뉴스-ul
selBox.addEventListener("click", (e) => {
    const sellist = e.target.closest("li"); 
    const alllist = selBox.querySelectorAll("li");
    const pickList = selBox.querySelectorAll("li.on");
    
    if (!sellist) return;
    selBox.classList.add("open");
    if (pickList.length === 1){
        alllist.forEach((list) => {
            list.classList.add("on");
        });
    }else{
        alllist.forEach((list) => {
            list.classList.remove("on");
        });
        selBox.classList.remove("open");
        sellist.classList.add("on");
    }
})

// 도서관아카이브 5. 슬라이드배너
var swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 'auto', //cdn 슬라이더 너비 고정 초기화
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// 문화행사 6. 슬라이드배너
var swiper = new Swiper(".cult-banner", {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: false, //강제 가운데 정렬 막기

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// 북큐레이션 7. 탭버튼 클릭시,
curationTabBtns.forEach(function(btn, inx){
    btn.addEventListener("click", function(e){
        curationTabBtns.forEach(function(e){
            e.classList.remove("active");
        });
        curationTabBtns[inx].classList.add("active");
        
        contAll.forEach(function(e){
            e.classList.remove("show");
        });
        contAll[inx].classList.add("show");

        activeCont = contAll[inx];
        curationBanner = activeCont.querySelector(".curation-banner");
        curationBannerList = activeCont.querySelector(".curation-banner-list");
    });
})

// 북큐레이션 7. 슬라이드배너
// 7-1. 이전 버튼 클릭
slidePrevBtn.addEventListener("click", function(e){
    if (e.isTrusted) { // isTrusted (사용자 직접 클릭 여부)
        clearInterval(autoID);
    }
    moveSlide("prev");
});

// 7-2. 다음 버튼 클릭
slideNextBtn.addEventListener("click", function (e){
    if (e.isTrusted) {
        clearInterval(autoID);
    }
    moveSlide("next");
});

// 7-3. 자동 실행
let autoID = setInterval(function(){
    slideNextBtn.dispatchEvent(new Event("click")); // .trigger("click") 대신 dispatchEvent 사용
}, 2000);



// 북큐레이션 7. 슬라이드 이동 함수
function moveSlide(btn) {
    const bannerLiAll = curationBanner.querySelectorAll("li");
    const bannerSnow = curationBanner.querySelector(".show");

    const bannerLi = curationBannerList.querySelectorAll("li");
    const MAX = bannerLi.length;
    const itemWidth = bannerLi[0].offsetWidth + 8; // +8 = gap

    if(btn === "next"){
        // 애니메이션으로 왼쪽으로 이동
        const next = bannerSnow.nextElementSibling || bannerLiAll[0]; // 마지막이면 첫번째로
        bannerSnow.classList.remove("show");
        next.classList.add("show");

        curationBannerList.style.transition = "transform 0.6s";
        curationBannerList.style.transform = `translateX(-${itemWidth}px)`;

        curationBannerList.addEventListener("transitionend", function () {
            // 애니메이션 끝나면 → 첫번째 li를 맨 뒤로 이동
            curationBannerList.append(bannerLi[0]);

            // 순간이동 (transition 없이 원위치)
            curationBannerList.style.transition = "none";
            curationBannerList.style.transform = "translateX(0)";
        }, { once: true });
    }else{
        const prev = bannerSnow.previousElementSibling || bannerLiAll[bannerLiAll.length - 1]; // 첫번째면 마지막으로
        bannerSnow.classList.remove("show");
        prev.classList.add("show");

        // prev: 먼저 마지막 li를 맨 앞으로 이동
        curationBannerList.prepend(bannerLi[MAX - 1]);

        // 이동된 상태에서 즉시 왼쪽으로 당겨놓기 (사용자 눈에 안보이게)
        curationBannerList.style.transition = "none";
        curationBannerList.style.transform = `translateX(-${itemWidth}px)`;

        // 다음 프레임에서 애니메이션으로 원위치
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                curationBannerList.style.transition = "transform 0.6s";
                curationBannerList.style.transform = "translateX(0)";
            });
        });
    }
}
