const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imageView = document.getElementById("img-view");
const imageIcon = document.getElementById("upload-icon");
const uploadText = document.getElementById("upload-text");
const changeButtons = document.getElementById("change-btns");
const removeButton = document.getElementById("remove-btn");
const uploadHover = document.getElementById("hover-box");
const form = document.getElementById("tg-form");
const firstName = document.getElementById("fname");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
  let messages = [];
  e.preventDefault();
  if ((firstName.value === "") | (firstName.value == null)) {
    messages.push("name is required");
  }

  if (messages.length > 0) {
    errorElement.innerText = messages.join(" , ");
  }
});

inputFile.addEventListener("change", uploadImage);

function clickListener(e) {
  e.preventDefault();
}

function uploadImage() {
  let imgLink = URL.createObjectURL(inputFile.files[0]);
  imageView.style.backgroundImage = `url(${imgLink})`;
  imageIcon.classList.add("hidden");
  uploadText.classList.add("hidden");
  imageView.classList.remove("hidden");
  changeButtons.classList.remove("hidden");
  uploadHover.classList.remove("upload-hover");
  dropArea.classList.remove("upload-hover");
  inputFile.addEventListener("click", clickListener);
}

removeButton.addEventListener("click", removeImage);

function removeImage() {
  imageView.style.backgroundImage = "none";
  imageIcon.classList.remove("hidden");
  uploadText.classList.remove("hidden");
  imageView.classList.add("hidden");
  changeButtons.classList.add("hidden");
}
