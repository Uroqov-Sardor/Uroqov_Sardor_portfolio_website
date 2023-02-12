window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  // NOTFICATION
  function notfication() {
    const notn = document.createElement("div");
    notn.classList.add("notfication");
    document.body.append(notn);

    // SUCCESS
    const success = document.createElement("div");
    success.classList.add("success", "nftHide");
    notn.append(success);

    const correct = document.createElement("img");
    correct.src = "../../icons/correct.png";
    correct.alt = "correct icon";
    correct.classList.add("correct");
    success.append(correct);

    const dangerTitle = document.createElement("div");
    dangerTitle.classList.add("danger_title");
    success.append(dangerTitle);

    const h3 = document.createElement("h3");
    h3.textContent = "success!";
    dangerTitle.append(h3);

    const p = document.createElement("p");
    p.textContent = "You did it all right!";
    dangerTitle.append(p);

    const close = document.createElement("img");
    close.src = "../../icons/close.png";
    close.alt = "close icon";
    close.classList.add("close_notfication");
    success.append(close);

    // ERROR
    const error = document.createElement("div");
    error.classList.add("error", "nftHide");
    notn.append(error);

    const cancel = document.createElement("img");
    cancel.src = "../../icons/cancel.png";
    cancel.alt = "cancel icon";
    cancel.classList.add("cancel");
    error.append(cancel);

    const dangerTitle1 = document.createElement("div");
    dangerTitle1.classList.add("danger_title");
    error.append(dangerTitle1);

    const header3 = document.createElement("h3");
    header3.textContent = "error!";
    dangerTitle1.append(header3);

    const paragrph = document.createElement("p");
    paragrph.textContent = "Something went wrong, please try again!";
    dangerTitle1.append(paragrph);

    const close1 = document.createElement("img");
    close1.src = "../../icons/close.png";
    close1.alt = "close icon";
    close1.classList.add("close_notfication");
    error.append(close1);
  }
  notfication();

  const closeNotficationBtn = document.querySelectorAll(".close_notfication");

  function timeCloseNotfication(e) {
    setTimeout(() => {
      hideNotfication(e);
    }, 2500);
  }

  function showNotfication(element) {
    const div = document.querySelector(element);
    div.classList.remove("nftHide");
    div.classList.add("nftShow");
  }

  function hideNotfication(element) {
    const div = document.querySelector(element);
    div.classList.remove("nftShow");
    div.classList.add("nftHide");
  }

  closeNotficationBtn[0].addEventListener("click", () => {
    hideNotfication(".success");
  });
  closeNotficationBtn[1].addEventListener("click", () => {
    hideNotfication(".error");
  });

  // REGESTRATION
  const sbtSign = document.querySelector(".submit_sign"),
    name = document.querySelector("#name"),
    phone = document.querySelector("#phone"),
    email = document.querySelector("#email"),
    password = document.querySelector("#password");

  function users() {
    const user = {
      email: email.value,
      phone: phone.value,
      password: password.value,
    };

    localStorage.setItem("user", JSON.stringify(user));
  }

  function danger() {
    const input = document.querySelectorAll("input");

    if (
      name.value == "" ||
      phone.value == "" ||
      email.value == "" ||
      password.value == ""
    ) {
      input.forEach((item) => {
        item.classList.add("danger");
      });
    } else {
      input.forEach((item) => {
        item.classList.remove("danger");
      });
    }
  }

  function redirect() {
    const intrval = setInterval(mainUrl, 1500);

    function mainUrl() {
      document.location.href = "../../index.html";
      clearInterval(intrval);
    }
  }

  function inputValueClear() {
    name.value = "";
    phone.value = "";
    email.value = "";
    password.value = "";
  }

  function inputValueCheck() {
    if (
      name.value !== "" &&
      name.value != Number(name.value) &&
      name.value.length > 3 &&
      name.value.length < 25
    ) {
      if (
        phone.value !== "" &&
        phone.value == Number(phone.value) &&
        phone.value.length > 5 &&
        phone.value.length < 15
      ) {
        if (email.value !== "") {
          if (
            password.value !== "" &&
            password.value == Number(password.value) &&
            password.value.length > 7 &&
            password.value.length < 9
          ) {
            showNotfication(".success");
            timeCloseNotfication(".success");
            redirect();
            users();
          } else {
            showNotfication(".error");
            timeCloseNotfication(".error");
            inputValueClear();
          }
        } else {
          showNotfication(".error");
          timeCloseNotfication(".error");
          inputValueClear();
        }
      } else {
        showNotfication(".error");
        timeCloseNotfication(".error");
        inputValueClear();
      }
    } else {
      showNotfication(".error");
      timeCloseNotfication(".error");
      inputValueClear();
    }
  }

  document.addEventListener("keydown", (e) => {
    if (e.code == "Enter" || e.code == "NumpadEnter") {
      inputValueCheck();
      danger();
    }
  });

  sbtSign.addEventListener("click", () => {
    inputValueCheck();
    danger();
  });
});
