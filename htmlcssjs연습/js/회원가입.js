//input 상자 접근
let uid = document.querySelector("#user-id");
let upw = document.querySelector("#user-pw1");
let upwc = document.querySelector("#user-pw2");

//입력상자에 값이 바뀌는 이벤트 발생하면 이벤트 핸들러 연결
// uid.onchange = idcheck;
addEventListener("change", function() {
  let idlen = uid.value.length;
  if (idlen < 3 || idlen > 10) {
    alert("아이디는 3~10글자를 입력하세요.");
    uid.select();
  }
})

upw.onchange = pwcheck;

upwc.onchange = pwcompare;

// id 길이 체크
function idcheck() {
  let idlen = uid.value.length;
  if (idlen < 3 || idlen > 10) {
    alert("아이디는 3~10글자를 입력하세요.");
    uid.select();
  }
}

//비밀번호 길이 체크
function pwcheck() {
  let pwlen = upw.value.length;
  if (pwlen < 4) {
    alert("비밀번호는 4글자 이상을 입력하세요.");
    upw.value = "";
    upw.focus();
  }
}

// 비밀번호가 맞는지 확인
function pwcompare() {
  let upwTxt = upw.value;
  let upwcTxt = upwc.value;

  if (upwTxt !== upwcTxt) {
    alert("비밀번호가 일치하지 않습니다.");
    upwTxt = "";
    upwc.focus();
  }
}
