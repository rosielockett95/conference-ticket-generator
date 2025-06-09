const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imageView = document.getElementById("img-view");
const imageIcon = document.getElementById("upload-icon");
const uploadText = document.getElementById("upload-text");
const allButtons = document.getElementById("change-btns");
const removeButton = document.getElementById("remove-btn");
const changeButton = document.getElementById("change-btn");
const uploadHover = document.getElementById("hover-box");
const form = document.getElementById("tg-form");
const firstName = document.getElementById("fname");
const errorElement = document.getElementById("error");
const emailAddress = document.getElementById("email");
const errorElementEmail = document.getElementById("email-error");
const photoError = document.getElementById("photo-error");
const gitUserName = document.getElementById("git-username");
const inputtedGitName = document.getElementById("github-username");
const gitError = document.getElementById("git-error");
const imageError = document.getElementById("upload-font");
const ticketName = document.getElementById("inputted-name");
const conferenceName = document.getElementById("inputted-name-two");
const ticketEmail = document.getElementById("inputted-email");
const ticketPhoto = document.getElementById("photo-avatar");
const imageAvatar = document.getElementById("avatar-image");
const mainContainer = document.getElementById("main-container");
const congratsText = document.getElementById("congrats-text");
const conferenceTicket = document.getElementById("conference-ticket");
const file = inputFile.files[0];
let imgLink;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const isEmail = /^.+@.+$/.test(emailAddress.value);
  const limit = 500;
  let file = inputFile.files[0];
  let messages = [];

  if (!file) {
    messages.push({ el: photoError, message: "File must be uploaded" });
  }

  if ((firstName.value === "") | (firstName.value == null)) {
    messages.push({ el: errorElement, message: "Name is required" });
  }

  if (!isEmail) {
    messages.push({
      el: errorElementEmail,
      message: "Email is formatted incorrectly",
    });
  }

  if (gitUserName.value === "") {
    messages.push({ el: gitError, message: "Field cannot be empty" });
  }

  if (file) {
    const size = file.size / 1000;

    if (size > limit) {
      messages.push({
        el: photoError,
        message: "File is too large. Please upload a photo under 500kb",
      });
    }
  }

  if (messages.length) {
    for (let i = 0; i < messages.length; i++) {
      const message = messages[i];

      message.el.innerText = message.message;
    }

    return;
  }

  function submitForm() {
    mainContainer.classList.add("hidden");
    congratsText.classList.remove("hidden");
    conferenceTicket.classList.remove("hidden");
    ticketName.innerHTML = firstName.value + "!";
    ticketEmail.innerHTML = emailAddress.value;
    imageAvatar.src = imgLink;
    conferenceName.innerHTML = firstName.value;
    inputtedGitName.innerHTML = "@" + gitUserName.value;
  }

  form.submit;
  submitForm();
});

// inputFile.addEventListener("change", uploadImage);

function clickListener(e) {
  e.preventDefault();
}

function uploadImage() {
  imgLink = URL.createObjectURL(inputFile.files[0]);
  imageView.style.backgroundImage = `url(${imgLink})`;
  imageIcon.classList.add("hidden");
  uploadText.classList.add("hidden");
  imageView.classList.remove("hidden");
  removeButton.classList.remove("hidden");
  changeButton.classList.remove("hidden");
  allButtons.classList.remove("hidden");
  uploadHover.classList.remove("upload-hover");
  dropArea.classList.remove("upload-hover");
  // inputFile.addEventListener("click", clickListener);
}

removeButton.addEventListener("click", removeImage);
changeButton.addEventListener("click", removeImage);

function removeImage() {
  imageView.style.backgroundImage = "none";
  imageIcon.classList.remove("hidden");
  uploadText.classList.remove("hidden");
  imageView.classList.add("hidden");
  allButtons.classList.add("hidden");
  removeButton.classList.add("hidden");
  changeButton.classList.add("hidden");
  uploadHover.classList.add("upload-hover");
  dropArea.classList.add("upload-hover");
  inputFile.value = "";
}

inputFile.addEventListener("change", uploadImage);
