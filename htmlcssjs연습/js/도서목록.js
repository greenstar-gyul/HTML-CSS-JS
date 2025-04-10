// 입력상자와 버튼에 접근
let bookBox = document.querySelector("#book");
let addBtn = document.querySelector("#add");
let bookList = document.querySelector("#bookList");

// 도서 목록 저장 배열 생성
let books = [];

// 추가 버튼에 클릭 이벤트 연결
// addBtn.onclick = addBook;
addEventListener('click', addBook);

// 배열에 도서 목록 추가
function addBook() {
  let bookName = bookBox.value;
  if (bookName == "") {
    alert("책제목을 입력하세요.");
  }
  else if (books.indexOf(bookName) >= 0) {
    alert("중복된 책제목입니다.");
  }
  else {
    books.push(bookName);
    bookListShow();
  }

  bookBox.value = "";
  bookBox.focus();
}


// 문서에 도서목록 출력(<ul><li>)
function bookListShow() {
  let blist = "<ul>";
  books.forEach((book, i) => {
    blist += `<li>${book}<span class="del" id=${i}>삭제<span></li>`;
  })
  blist += "</ul>";
  bookList.innerHTML = blist;

  let delList = document.querySelectorAll(".del");
  for (let d of delList) {
    d.onclick = bookDel;
  }
}

// 문서에 도서 목록 삭제
function bookDel() {
  let bookId = this.id;
  books.splice(bookId, 1);

  console.log(bookId);
  console.log(books);

  bookListShow();
}