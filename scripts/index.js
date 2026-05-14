/* 선택자 */
const curation = document.querySelector(".curation");


const curationSwiper = new Swiper('.curation-swiper', {
  // Optional parameters
    loop: true,
    slidesPerView: 'auto',

    autoplay: {  // 자동실행
        delay: 2500,
        disableOnInteraction: true,  // false / true : 접근성향상, 사용자 개입시 자동실행 멈춤
    },

    // Navigation arrows
    navigation: {
        nextEl: '.curation-swiper .next',
        prevEl: '.curation-swiper .prev',
    },

    on: {
        slideChangeTransitionStart: function () {
            const slides = curation.querySelectorAll('.swiper-slide');
            
            slides.forEach(slide => slide.classList.remove('show'));
            
            // 현재 활성화된 슬라이드에 show 추가
            const activeSlide = curation.querySelector('.swiper-slide-active');
            if (activeSlide) {
                activeSlide.classList.add('show');
            }

            // 다음으로 넘어갈 때만 ul 위치 이동
            const wrapper = curation.querySelector('.swiper-wrapper');
            if (this.swipeDirection === 'next') {
                wrapper.style.position = 'absolute';
                wrapper.style.left = '530px';
            } else {
                wrapper.style.left = '0';
            }
        }
    }
});

