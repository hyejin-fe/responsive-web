/* 선택자 - 메인 */


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


// 메인 1. 인기 검색어 슬라이드
var trendingSwiper = new Swiper(".trending-swiper", {
    direction: "vertical",
    loop: true,
    
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



// 북큐레이션 1. 탭버튼 클릭시,
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

// 북큐레이션 2. 슬라이드배너
// 2-1. 이전 버튼 클릭
slidePrevBtn.addEventListener("click", function(e){
    if (e.isTrusted) { // isTrusted (사용자 직접 클릭 여부)
        clearInterval(autoID);
    }
    moveSlide("prev");
});

// 2-2. 다음 버튼 클릭
slideNextBtn.addEventListener("click", function (e){
    if (e.isTrusted) {
        clearInterval(autoID);
    }
    moveSlide("next");
});

// 2-3. 자동 실행
let autoID = setInterval(function(){
    slideNextBtn.dispatchEvent(new Event("click")); // .trigger("click") 대신 dispatchEvent 사용
}, 2000);


// 북큐레이션 1. 탭버튼 함수


// 북큐레이션 2. 슬라이드 이동 함수
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
