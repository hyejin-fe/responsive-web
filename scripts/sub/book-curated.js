// 전역변수
const searchlib =  document.querySelector(".search-library");
const searchTit =  document.querySelector(".search-tit");
const searchBtn = document.querySelector(".search-btn"); //검색버튼
const searchTxt = document.querySelector(".search-txt"); //검색 인풋


//도서관 필터
searchlib.addEventListener("click", (e) => {
    const clickedLi = e.target.closest("li"); 
    const allLib = searchlib.querySelectorAll("li");
    const pickLib = searchlib.querySelectorAll("li.show");

    searchlib.classList.add("open");
    if (!clickedLi) return;
    if (pickLib.length === 1) {
        for (let i = 0; i < allLib.length; i++){
            allLib[i].classList.add("show");
        }
        }else {
        for (let i = 0; i < allLib.length; i++){
            allLib[i].classList.remove("show");
        }
        clickedLi.classList.add("show");
        searchlib.classList.remove("open");
        }
});
//도서관 제목 내용
searchTit.addEventListener("click", (e) => {
    const clickedLi = e.target.closest("li"); 
    const alllist = searchTit.querySelectorAll("li");
    const pickList = searchTit.querySelectorAll("li.show");

    searchlib.classList.add("open");
    if (!clickedLi) return;
    if (pickList.length === 1) {
        for (let i = 0; i < alllist.length; i++){
            alllist[i].classList.add("show");
        }
        }else {
        for (let i = 0; i < alllist.length; i++){
            alllist[i].classList.remove("show");
        }
        clickedLi.classList.add("show");
        searchlib.classList.remove("open");
        }
});
//검색 버튼 전송 방지 알람
searchBtn.addEventListener("click",(e)=>{
    e.preventDefault(); //새로고침방지
    if(searchTxt.value === ""){
        alert("검색어를 입력해주세요")
    }
})