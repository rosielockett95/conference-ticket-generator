const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imageView = document.getElementById("img-view");
const imageIcon = document.getElementById("upload-icon");
const uploadText = document.getElementById("upload-text");
const changeButtons = document.getElementById("change-btns");
const removeButton = document.getElementById("remove-btn");

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
