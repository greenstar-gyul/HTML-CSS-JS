let uid = document.querySelector("#user-id");
let upw = document.querySelector("#user-pw1");
let upwc = document.querySelector("#user-pw2");


uid.addEventListener('change', function () {
  let idlen = uid.value.length;

  if (idlen > 15 || idlen < 4) {
    alert("아이디는 4~15자리로 입력해야 합니다.");
    uid.select();
  }
});

upw.addEventListener('change', function () {
  let pwlen = upw.value.length;

  if (pwlen < 8) {
    alert("비밀번호는 8자리 이상이어야 합니다.");
    upw.value = "";
    upw.focus();
  }
});

upwc.addEventListener('change', function () {
  let upwTxt = upw.value;
  let upwcTxt = upwc.value;

  if (upwTxt !== upwcTxt) {
    alert("비밀번호가 일치하지 않습니다.");
    upwc.value = "";
    upwc.focus();
  }
});