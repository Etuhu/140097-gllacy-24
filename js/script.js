var link = document.querySelector(".feedback-btn");
var popup = document.querySelector(".modal-feedback");
var wrapper = document.querySelector(".modal-wrapper");
var close = document.querySelector(".feedback-form-close");
var form = popup.querySelector(".feedback-form");
var username = popup.querySelector("[name=feedback-username]");
var email = popup.querySelector("[name=feedback-email]");
var feedbackText = popup.querySelector("[name=feedback-text]");
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("username");
} catch (err) {
  isStorageSupport = false;
}


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  wrapper.classList.add("modal-wrapper-show");
  popup.classList.add("modal-feedback-show");

  if (storage) {
    username.value = storage;
    email.focus();
  } else {
    username.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  wrapper.classList.remove("modal-wrapper-show");
  popup.classList.remove("modal-feedback-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!username.value || !email.value || !feedbackText.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    console.log("Заполните необходимые поля");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("username", username.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-feedback-show")) {
      popup.classList.remove("modal-feedback-show");
      popup.classList.remove("modal-error");
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (wrapper.classList.contains("modal-wrapper-show")) {
      wrapper.classList.remove("modal-wrapper-show");
      popup.classList.remove("modal-error");
    }
  }
});
