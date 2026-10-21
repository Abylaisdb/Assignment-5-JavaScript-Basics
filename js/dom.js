const textPara = document.getElementById("textPara");
const texts = [
  "The paragraph text has been changed!",
  "And now it is something new again.",
  "This is the original paragraph."
];
let textIndex = 0;

document.getElementById("changeTextBtn").addEventListener("click", function () {
  textPara.textContent = texts[textIndex];
  textIndex = (textIndex + 1) % texts.length;
});

const styleBox = document.getElementById("styleBox");
const styleText = document.getElementById("styleText");
const colors = ["#ffe9a8", "#cfe8ff", "#d7f5dd", "#f9d1dc", "#e4dcff", "#ffffff"];
const sizes = ["16px", "20px", "26px", "32px"];
let colorIndex = 0;
let sizeIndex = 0;

document.getElementById("colorBtn").addEventListener("click", function () {
  styleBox.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
});

document.getElementById("fontBtn").addEventListener("click", function () {
  sizeIndex = (sizeIndex + 1) % sizes.length;
  styleText.style.fontSize = sizes[sizeIndex];
});

const itemList = document.getElementById("itemList");
let itemCount = itemList.children.length;

document.getElementById("addItemBtn").addEventListener("click", function () {
  itemCount++;
  const li = document.createElement("li");
  li.textContent = "Item " + itemCount;
  itemList.appendChild(li);
});

document.getElementById("removeItemBtn").addEventListener("click", function () {
  const last = itemList.lastElementChild;
  if (last) {
    itemList.removeChild(last);
    itemCount--;
  }
});
