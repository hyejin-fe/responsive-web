/* 선택자 */
const tabBtn = document.querySelector(".tab-btn");
const infoTab = tabBtn.querySelector(".info-tab");
const applyTab = tabBtn.querySelector(".apply-tab");
const inquiryTab = tabBtn.querySelector(".inquiry-tab");
const listTab = tabBtn.querySelector(".list-tab");

const tabCont = document.querySelector(".tab-cont");
const donaInfo = tabCont.querySelector(".dona-info");
const donaApply = tabCont.querySelector(".dona-apply");
const donaInquiry = tabCont.querySelector(".dona-inquiry");
const donaList = tabCont.querySelector(".dona-list");

const libraryCh = donaApply.querySelector(".library-ch");
const tellNum = donaApply.querySelector(".tell-num");
const emailDot = donaApply.querySelector("#emailDot");
const domain = donaApply.querySelector(".domain");
const userPwd = donaApply.querySelector(".user-pwd");
const pwd = userPwd.querySelector(".pwd01");
const rePwd = userPwd.querySelector(".pwd02");
const pwdCheck = userPwd.querySelector(".pwd-check");
const applyBtn = donaApply.querySelector(".apply-btn");

const libraryChSec = donaInquiry.querySelector(".library-ch");

const libraryChThu = donaList.querySelector(".library-ch");
const subjectCh = donaList.querySelector(".subject-ch");

const inputAll = donaApply.querySelectorAll(".base-form input[type='text']:not(#email):not(#emailDot), .base-form input[type='password']");  // :not 제외시킴


// 1. tab-btn button 클릭시, 클릭한 버튼에 클래스 추가
infoTab.addEventListener("click", ()=>{
    switchTab(infoTab, donaInfo);
});
applyTab.addEventListener("click", ()=>{
    switchTab(applyTab, donaApply);
});
inquiryTab.addEventListener("click", ()=>{
    switchTab(inquiryTab, donaInquiry);
});
listTab.addEventListener("click", ()=>{
    switchTab(listTab, donaList);
});


// 2. dona-apply 中 li클릭시, ul에 show 클래스 토글 + 클릭한 li에 active클랙스 추가
libraryCh.addEventListener("click", (e)=>{
    dropdown(e);
});
tellNum.addEventListener("click", (e)=>{
    dropdown(e);
});
domain.addEventListener("click", (e)=>{
    dropdown(e);

    const clickLi = e.target.closest("li");
    if(!clickLi) return;

    if(clickLi == domain.firstElementChild) {
        emailDot.value = '';
    }else{
        emailDot.value = clickLi.textContent;
    }
});

// 2-2. dona-apply 中 비밀번호 입력시 확인
function checkPwd(){
    if(pwd.value == '' && rePwd.value == ''){
        pwdCheck.classList.remove("show");
        return;
    }else{
        pwdCheck.classList.add("show")
    }

    if(pwd.value == rePwd.value){
        pwdCheck.style.color = "#6EA834";
        pwdCheck.textContent = "비밀번호 일치";
    }else{
        pwdCheck.style.color = "#DB7171";
        pwdCheck.textContent = "비밀번호 불일치";
    }
}

pwd.addEventListener("input", checkPwd);
rePwd.addEventListener("input", checkPwd);

// 2-3. dona-apply 中 모든 항목 입력시 버튼 활성화
function checkAll(){
    const allFilled = [...inputAll].every(input => input.value.trim() !== '');
    // every() : 배열의 모든 요소가 조건을 만족하면 true, 하나라도 만족 못하면 false
    // trim() : 앞뒤 공백 제거
    // >> 배열의 모든 값이 비어있지 않을 때 참

    if(allFilled){
        applyBtn.classList.add("active");
    }else{
        applyBtn.classList.remove("active");
    }
}

inputAll.forEach(input => {
    input.addEventListener("input", checkAll);
});

// 2-4. dona-apply 中 비밀번호 불일치 + 버튼 클릭시, 알람뜨게하기
applyBtn.addEventListener("click", ()=>{
    if(pwd.value !== rePwd.value){
        alert("비밀번호가 일치하지 않습니다.");
    }
});



// 3. dona-inquiry 中 li클릭시, ul에 show 클래스 토글 + 클릭한 li에 active클랙스 추가
libraryChSec.addEventListener("click", (e)=>{
    dropdown(e);
});


// 4. dona-list 中 li클릭시, ul에 show 클래스 토글 + 클릭한 li에 active클랙스 추가
libraryChThu.addEventListener("click", (e)=>{
    dropdown(e);
});
subjectCh.addEventListener("click", (e)=>{
    dropdown(e);
});



// 1. 탭버튼 함수
function switchTab(btn, cont){

    tabBtn.querySelectorAll("li").forEach(function(chlid){
        chlid.classList.remove("active");
    })
    btn.classList.add("active");

    tabCont.querySelectorAll(".cont").forEach(function(chlid){
        chlid.classList.remove("show");
    })
    cont.classList.add("show");        

    tabBtn.classList.toggle("show");
}

// 2. 드롭다운 함수
function dropdown(e){
    const clickLi = e.target.closest("li");
    if(!clickLi) return;

    const ul = clickLi.parentElement;
    ul.querySelectorAll("li").forEach(function(child){
        child.classList.remove("active");
    })
    clickLi.classList.add("active");

    ul.classList.toggle("show");
}
