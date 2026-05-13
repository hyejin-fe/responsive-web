/* 선택자 */
const userLogin = document.querySelector(".user-login");
const userId = userLogin.querySelector(".user-id");
const userPwd = userLogin.querySelector(".user-pwd");
const loginBtn = userLogin.querySelector(".login-btn");


// 1. 
loginBtn.addEventListener("click", ()=>{
    if(userId.value.trim() == ''){
        alert("아이디를 입력해주세요.")
    }else if(userId.value.trim() !== '' && userPwd.value.trim() == ''){
        alert("비밀번호를 입력해주세요.")
    }
});