let itemBox = document.querySelector("#item");
let addBtn = document.querySelector("#add");
let itemList = document.querySelector("#itemList");

let items = [];
// let itemsTrim = [];

addBtn.addEventListener('click', function () {
  let itemName = itemBox.value;

  itemBox.value = "";
  itemBox.focus();
  
  if (itemName == "") {
    alert("준비물을 입력해주세요");
    return;
  }
  
  itemName = itemName.trim();
  
  let itemSplit = itemName.split(" ");
  let iname = "";
  // let trimname = "";
  // console.log(itemSplit);
  for (let s of itemSplit) {
    if (s != "") {
      iname += s + " ";
    }
    // trimname += s;
  }
  // console.log(iname);
  itemName = iname.trim();
  // console.log(itemName);

  // console.log(trimname);
  // console.log(itemName);
  
  // if (itemsTrim.indexOf(trimname) != -1) {
  if (items.indexOf(itemName) != -1) {
    alert("이미 등록된 준비물이에요");
    return;
  }
  
  items.push(itemName);
  // itemsTrim.push(trimname);
  printItemList();
  
});

function printItemList() {
  let itemStr = "<ul>";

  items.forEach((item, i) => {
    itemStr += `<li>${item}<span class="close" id=${i}>X</span></li>`;
  });
  itemStr += "</ul>";
  itemList.innerHTML = itemStr;

  let xBtns = document.querySelectorAll(".close");

  for (let x of xBtns) {
    x.addEventListener("click", removeItem);
  }
}

function removeItem() {
  let itemId = this.id;
  items.splice(itemId, 1);
  // itemsTrim.splice(itemId, 1);

  printItemList();
}