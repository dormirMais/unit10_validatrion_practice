// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.

let elInputUsername = document.querySelector("#username");

let elSuccessMessage = document.querySelector(".success-message");

let elPassword = document.querySelector("#password");
let elPasswordRetype = document.querySelector("#password-retype");
let elMismatchMessage = document.querySelector(".mismatch-message");

elInputUsername.onkeyup = function () {
    if (isMoreThan4Length(elInputUsername.value)) {
        elSuccessMessage.classList.remove("red");
        elSuccessMessage.classList.add("green");
        elSuccessMessage.textContent = "사용할 수 있는 아이디입니다";
    } else {
        elSuccessMessage.classList.add("red");
        elSuccessMessage.classList.remove("green");
        elSuccessMessage.textContent = "아이디는 네 글자 이상이어야 합니다";
        elSuccessMessage.classList.remove("hide");
    }

    if (elInputUsername.value.length === 0) {
        elSuccessMessage.classList.add("hide");
    }
};

elPasswordRetype.onkeyup = function () {
    console.log(isMatch(elPassword, elPasswordRetype));
    //비밀번호가 일치하는경우
    if (isMatch(elPassword.value, elPasswordRetype.value)) {
        elMismatchMessage.classList.remove("red");
        elMismatchMessage.classList.add("green");
        elMismatchMessage.textContent = "비밀번호가 일치합니다.";
    } else {
        //다른경우.
        elMismatchMessage.classList.add("red");
        elMismatchMessage.classList.remove("green");
        elMismatchMessage.textContent = "비밀번호가 일치하지 않습니다.";
        elMismatchMessage.classList.remove("hide");
    }

    if (elPasswordRetype.value.length === 0) {
        elMismatchMessage.classList.add("hide");
    }
};

function isMoreThan4Length(value) {
    // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
    return value.length >= 4;
}

function isMatch(password1, password2) {
    // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
    if (password1 === password2) return true;
    else return false;
}
