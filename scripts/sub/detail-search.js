//전역변수
const formArea = document.querySelector(".form-area");
const searchSixth =  formArea.querySelector(".search-key06");
const dropSortby = searchSixth.querySelector(".sort-by");
const dropFilter = searchSixth.querySelector(".filter-by");
const searchFirst = formArea.querySelector(".spacing")
const formtxt = document.querySelectorAll("input.base-form");
const searchBtn = document.querySelector(".search-btn");

//함수 - 작동안됨 (원인모름)
searchBtn.addEventListener("click",(e)=>{
    e.preventDefault(); //새로고침방지
    if(formtxt.value == ""){ alert("검색어를 입력해주세요") }

})