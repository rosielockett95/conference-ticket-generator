const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imageView = document.getElementById("img-view");
const imageIcon = document.getElementById("upload-icon");
const uploadText = document.getElementById("upload-text");
const changeButtons = document.getElementById("change-btns");
const removeButton = document.getElementById("remove-btn");
const changeButton = document.getElementById("change-btn");
const uploadHover = document.getElementById("hover-box");
const form = document.getElementById("tg-form");
const firstName = document.getElementById("fname");
const errorElement = document.getElementById("error");
const emailAddress = document.getElementById("email");
const errorElementEmail = document.getElementById("email-error");
const photoError = document.getElementById("photo-error");

form.addEventListener("submit", (e) => {
  const isEmail = /^.+@.+$/.test(emailAddress.value);
  let file = inputFile.files[0];
  let err = false;
  const limit = 500;
  const size = file.size / 1024;

  let messages = [];
  let messagesTwo = [];
  let messagesThree = [];

  if ((firstName.value === "") | (firstName.value == null)) {
    messages.push("name is required");
  }

  if (messages.length > 0) {
    errorElement.innerText = messages.join(" , ");
    err = true;
  }

  if (!isEmail) {
    messagesTwo.push("Email is formatted incorrectly.");
  }

  if (messagesTwo.length > 0) {
    errorElementEmail.innerText = messagesTwo;
    err = true;
  }

  if (size > limit) {
    messagesThree.push("File is too large. Please upload a photo under 500kb");
  }

  if (messagesThree.length > 0) {
    photoError.innerText = messagesThree;
    err = true;

    if (err) e.preventDefault();
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
changeButton.addEventListener("click", removeImage);

function removeImage() {
  imageView.style.backgroundImage = "none";
  imageIcon.classList.remove("hidden");
  uploadText.classList.remove("hidden");
  imageView.classList.add("hidden");
  changeButtons.classList.add("hidden");
  uploadHover.classList.add("upload-hover");
  dropArea.classList.add("upload-hover");
}
