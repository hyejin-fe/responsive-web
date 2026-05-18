document.addEventListener("DOMContentLoaded", () => {
    const timers = document.querySelectorAll('.timer');
    const duration = 2500; // 전체 애니메이션 시간 (2.5초)
    const totalSteps = 20; // 숫자가 변하는 횟수 (이 값을 낮출수록 더 뚝뚝 끊깁니다)
    const intervalTime = duration / totalSteps; // 숫자가 바뀌는 간격 (125ms)

    timers.forEach(timer => {
        const target = +timer.getAttribute('data-to'); // 목표 숫자
        let currentStep = 0;

        const counter = setInterval(() => {
            currentStep++;
            
            // 현재 스텝에 따른 진행률 계산 (0 ~ 1)
            const progress = currentStep / totalSteps;
            
            // 목표치에 진행률을 곱해 현재 보여줄 숫자 계산
            let currentNumber = Math.floor(target * progress);

            // 화면에 표시 (천 단위 콤마 포함)
            timer.textContent = currentNumber.toLocaleString();

            // 모든 스텝을 마치면 종료
            if (currentStep >= totalSteps) {
                timer.textContent = target.toLocaleString(); // 마지막 오차 보정
                clearInterval(counter);
            }
        }, intervalTime);
    });
});