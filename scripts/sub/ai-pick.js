//데이터 구간
console.log("JS 작동중");
const data = [
  {
    age: "유아",
    categories: [
      "성장","가족","몸","학교","사람","동물","벌레","식물","날씨",
      "옛이야기","미래","과거","지도","흥미로운","무서운","슬픈",
      "사랑","우정","과학","스포츠","그림/노래","음식","미스터리","판타지"
    ],
    types: ["그림책","유아학습","놀이학습"],
    image : "../images/AI-pick/ico_age_1.png"
  },
  {
    age: "초등학생",
    categories: [
      "성장","가족","몸","학교","사람","동물","벌레","식물","날씨",
      "옛이야기","미래","과거","지도","흥미로운","무서운","슬픈",
      "사랑","우정","과학","스포츠","그림/노래","음식","미스터리","판타지"
    ],
    types: ["어린이문학","어린이학습/교양","어린이만화"],
    image : "../images/AI-pick/ico_age_2.png"
  },
  {
    age: "중학생",
    categories: ["인권","정보","공부","진로","감정","여가","일탈","가정","친구","이성"],
    types: [
      "소설","에세이/시/희곡","인문","자기계발","경제/경영",
      "가정/취미/실용","의학/건강","여행/지리","과학/기술",
      "사회과학","종교","역사/문화","인물/평전",
      "예술/대중문화","외국어","컴퓨터","만화","청소년"],
    image : "../images/AI-pick/ico_age_3.png"
  },
  {
    age: "고등학생",
    categories: ["인권","정보","공부","진로","감정","여가","일탈","가정","친구","이성"],
    types: [
      "소설","에세이/시/희곡","인문","자기계발","경제/경영",
      "가정/취미/실용","의학/건강","여행/지리","과학/기술",
      "사회과학","종교","역사/문화","인물/평전",
      "예술/대중문화","외국어","컴퓨터","만화","청소년"],
      image : "../images/AI-pick/ico_age_4.png"
  },
  {
    age: "20대",
    categories: ["사랑","인생설계","인생철학","자기계발","일","결혼","행복","습관","마음","여행","취미"],
    types: [
      "소설","에세이/시/희곡","인문","자기계발","경제/경영",
      "가정/취미/실용","의학/건강","여행/지리","과학/기술",
      "사회과학","종교","역사/문화","인물/평전",
      "예술/대중문화","외국어","컴퓨터","만화"],
    image : "../images/AI-pick/ico_age_5.png"
  },
  {
    age: "30대",
    categories: [
      "예비부모","영아자녀고육","유아자녀교육","초등자녀교육","중고등자녀교육",
      "사랑","인생설계","인생철학","자기계발","일","결혼","행복","습관","마음","여행","취미"
    ],
    types: [
      "소설","에세이/시/희곡","인문","자기계발","경제/경영",
      "가정/취미/실용","의학/건강","여행/지리","과학/기술",
      "사회과학","종교","역사/문화","인물/평전",
      "예술/대중문화","외국어","컴퓨터","만화","부모"],
    image : "../images/AI-pick/ico_age_6.png"
  },
  {
    age: "40대",
    categories: [
      "유아자녀교육","초등자녀교육","중고등자녀교육",
      "행복","습관","마음","여행","취미"
    ],
    types: [
      "소설","에세이/시/희곡","인문","자기계발","경제/경영",
      "가정/취미/실용","의학/건강","여행/지리","과학/기술",
      "사회과학","종교","역사/문화","인물/평전",
      "예술/대중문화","외국어","컴퓨터","만화","부모"],
    image : "../images/AI-pick/ico_age_7.png"
  },
  {
    age: "50대",
    categories: [
      "인생관","웰에이징","웰다잉","라이프스타일","은퇴","직업탐구",
      "자산관리","귀농귀촌","가족관계","사회관계","질병","운동","노화","식생활"
    ],
    types: [
      "소설","에세이/시/희곡","인문","자기계발","경제/경영",
      "가정/취미/실용","의학/건강","여행/지리","과학/기술",
      "사회과학","종교","역사/문화","인물/평전",
      "예술/대중문화","외국어","컴퓨터","만화"],
    image : "../images/AI-pick/ico_age_8.png"  
  },
  {
    age: "60대 이상",
    categories: [
      "인생관","웰에이징","웰다잉","라이프스타일","은퇴","직업탐구",
      "자산관리","귀농귀촌","가족관계","사회관계","질병","운동","노화","식생활"
    ],
    types: [
      "소설","에세이/시/희곡","인문","자기계발","경제/경영",
      "가정/취미/실용","의학/건강","여행/지리","과학/기술",
      "사회과학","종교","역사/문화","인물/평전",
      "예술/대중문화","외국어","컴퓨터","만화"],
    image : "../images/AI-pick/ico_age_9.png"
  }
];
//전역변수구간
const contentsArea = document.querySelector(".user-select-wrapper");//본문
const processInfo = document.querySelectorAll("#main .process-info li span");
const stepTit = contentsArea.querySelector(".tit");
const stepInfo = contentsArea.querySelector(".dupli-info")
const stepArea = contentsArea.querySelector(".step-area")
const BtnArea = contentsArea.querySelector(".step-area .btns-area");
const userBooksArea = contentsArea.querySelector(".user-books"); //관심도서 3개구간
const resultArea = contentsArea.querySelector(".ai-pick-final");//결과 구간
const processBtns = document.querySelector(".select-process-btns");//행동버튼
const nextBtn = processBtns.querySelector(".next-btn");
const prevBtn =  processBtns.querySelector(".prev-btn");
const resetBtn = processBtns.querySelector(".reset");
// let imgNum = 1;



//로직 구간 ,함수작성부분
renderUserAge()
nextBtn.disabled = true;
/*나이 출력 함수*/ 
function renderUserAge(){
  let html ="";
  for (let i = 0; i < data.length; i++){
      html += `<button data-age="${data[i].age}">
      <img src="${data[i].image}">
      ${data[i].age}
      </button>`;
  }
  BtnArea.innerHTML = html;
  stepTit.textContent = "당신의 연령대를 선택해주세요";
  stepInfo.textContent = "";
}
/*관심사 출력 함수*/ 
function renderUserLike(userageSel){
    let html ="";
    for (let i = 0; i < userageSel.categories.length; i++){
    html += `<button>${userageSel.categories[i]}</button>`}
  BtnArea.innerHTML = html;
  stepTit.textContent = "당신의 관심사를 선택해주세요";
  stepInfo.textContent = "(중복선택가능)";
}
/*관심분야 출력 함수*/ 
function renderUserField(userageSel){
    let html = "";
    for (let i = 0; i < userageSel.types.length; i++){
    html += `<button>${userageSel.types[i]}</button>`}
  BtnArea.innerHTML = html;
  stepTit.textContent = "당신의 관심분야를 선택해주세요";
  stepInfo.textContent = "(중복선택가능)";
}

//버튼 컨트롤 함수
function btnControl(){
  if(stepNum === 1){
    prevBtn.style.display = "none";
    resultArea.classList.add("off");
    stepArea.classList.remove("off");
    nextBtn.style.display = "block";
    resetBtn.style.display ="none";
    nextBtn.textContent ="다음단계";
  }
  if(stepNum === 3){
    stepArea.classList.remove("off");
    userBooksArea.classList.add('off');
    nextBtn.textContent ="다음단계"
  }else if(stepNum === 4){
    userBooksArea.classList.remove('off');
    stepArea.classList.add("off");
    resultArea.classList.add("off");
    nextBtn.textContent ="결과보기"
  }else if(stepNum === 5){
    resultArea.classList.remove("off");
    userBooksArea.classList.add("off");
    nextBtn.style.display = "none";
    prevBtn.style.display = "none";
    resetBtn.style.display ="block";
  }
}
//스탭 움직이는 함수
function updatestepInfo(){
  processInfo.forEach(function(li){
    li.classList.remove("on");
  });
  processInfo[stepNum - 1].classList.add("on");
}
//출력 함수를 제어하는 함수
function stepRender(){
  if(stepNum === 1){
    renderUserAge();
  }
  else if(stepNum === 2){
    renderUserLike(userageSel);
    prevBtn.style.display = "block";
  }else{
    renderUserField(userageSel);
  }
  
}

/*단계별 버튼 클릭 이벤트 함수*/
let stepNum = 1;
let userselected = "";//전역에 쓸 버튼데이터 저장 용도
let userageSel = null; //출력 함수에 쓸 데이터 저장
BtnArea.addEventListener("click", function(e){
  if(e.target.tagName === "IMG" || e.target.tagName === "BUTTON"){
    const btn = e.target.closest('button')
  // if(e.target.tagName = "BUTTON")
    userselected = btn.dataset.age; //버튼안의 데이터아이디 저장
    for (let i = 0; i < data.length; i++) {
        if(userselected === data[i].age){
          userageSel = data[i];//출력함수에 쓸 데이터 저장
        }
      }
    //1단계만 라디오버튼속성 2단계는 체크박스 속성
    if(stepNum === 1){
      BtnArea.querySelectorAll("button").forEach(function(b){
        b.classList.remove("on");
      });
        btn.classList.add("on");
        nextBtn.disabled = false;
    }else{
      btn.classList.toggle("on");
    }
    
    //버튼 미 선택 시 다음버튼 비활성화시키기
    const btnOn = BtnArea.querySelectorAll("button.on");
      if(btnOn.length >= 1){
        nextBtn.classList.add("on");/*다음 버튼 on*/
        nextBtn.disabled = false;
      }else{
        nextBtn.disabled = true;
        nextBtn.classList.remove("on");
      }
  }
});
//다음버튼
nextBtn.addEventListener("click",()=>{
  stepNum++
  stepRender();
  btnControl();
  updatestepInfo();
  console.log(stepNum)//확인용
});

//이전버튼
prevBtn.addEventListener("click",()=>{
  stepNum--
  stepRender();
  btnControl();
  updatestepInfo();
})
//리셋버튼
resetBtn.addEventListener("click",()=>{
  stepNum = 1;
  stepRender();
  btnControl();
  updatestepInfo();
})