const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imageView = document.getElementById("img-view");
const imageIcon = document.getElementById("upload-icon");
const uploadText = document.getElementById("upload-text");

inputFile.addEventListener("change", uploadImage);

function uploadImage() {
  let imgLink = URL.createObjectURL(inputFile.files[0]);
  imageView.style.backgroundImage = `url(${imgLink})`;
  imageIcon.classList.add("hidden");
  uploadText.classList.add("hidden");
  imageView.classList.remove("hidden");
}
