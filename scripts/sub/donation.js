/* 선택자 */
const tabBtn = document.querySelector(".tab-btn");
const infoBtn = tabBtn.querySelector(".info-btn");
const applyBtn = tabBtn.querySelector(".apply-btn");
const inquiryBtn = tabBtn.querySelector(".inquiry-btn");
const listBtn = tabBtn.querySelector(".list-btn");

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

const libraryChSec = donaInquiry.querySelector(".library-ch");

const libraryChThu = donaList.querySelector(".library-ch");
const subjectCh = donaList.querySelector(".subject-ch");


// 1. tab-btn button 클릭시, 클릭한 버튼에 클래스 추가
infoBtn.addEventListener("click", ()=>{
    switchTab(infoBtn, donaInfo);
});
applyBtn.addEventListener("click", ()=>{
    switchTab(applyBtn, donaApply);
});
inquiryBtn.addEventListener("click", ()=>{
    switchTab(inquiryBtn, donaInquiry);
});
listBtn.addEventListener("click", ()=>{
    switchTab(listBtn, donaList);
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



// 3. dona-inquiry 中 li클릭시, ul에 show 클래스 토글 + 클릭한 li에 active클랙스 추가
libraryChSec.addEventListener("click", (e)=>{
    dropdown(e);
});


// 3. dona-list 中 li클릭시, ul에 show 클래스 토글 + 클릭한 li에 active클랙스 추가
libraryChThu.addEventListener("click", (e)=>{
    dropdown(e);
});
subjectCh.addEventListener("click", (e)=>{
    dropdown(e);
});



// 1. 탭버튼 함수
function switchTab(btn, cont){
    btn.classList.add("active");
    [...btn.parentElement.children]
        .filter(function(child){
            return child != btn;
        })
        .forEach(function(chlid){
            chlid.classList.remove("active");
        })

    cont.classList.add("show");
    [...cont.parentElement.children]
        .filter(function(child){
            return child != cont;
        })
        .forEach(function(chlid){
            chlid.classList.remove("show");
        })

    tabBtn.classList.toggle("show");
}

// 2. 드롭다운 함수
function dropdown(e){
    const clickLi = e.target.closest("li");
    if(!clickLi) return;

    const ul = clickLi.parentElement;

    clickLi.classList.add("active");
    [...ul.children]
        .filter(function(child){
            return child != clickLi;
        })
        .forEach(function(child){
            child.classList.remove("active");
        })

    ul.classList.toggle("show");
}
