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

  let user = "";

  user = JSON.parse(localStorage.getItem("user"));

  // LOGIN REGISTRATION
  const emailLog = document.querySelector("#email_log"),
    phoneLog = document.querySelector("#phone_log"),
    passwordLog = document.querySelector("#passwod_log"),
    subLog = document.querySelector(".submit_log");

  function danger() {
    const input = document.querySelectorAll("input");

    if (
      phoneLog.value == "" ||
      emailLog.value == "" ||
      passwordLog.value == ""
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
    phoneLog.value = "";
    emailLog.value = "";
    passwordLog.value = "";
  }

  function logInCheck() {
    try {
      if (emailLog.value !== "" && emailLog.value === user.email) {
        if (
          phoneLog.value !== "" &&
          phoneLog.value == Number(phoneLog.value) &&
          phoneLog.value.length > 5 &&
          phoneLog.value.length < 15 &&
          phoneLog.value === user.phone
        ) {
          if (
            passwordLog.value !== "" &&
            passwordLog.value == Number(passwordLog.value) &&
            passwordLog.value.length > 7 &&
            passwordLog.value.length < 9 &&
            passwordLog.value === user.password
          ) {
            showNotfication(".success");
            redirect();
            localStorage.removeItem("user");
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
    } catch (err) {
      console.log(err);
      showNotfication(".error");
      timeCloseNotfication(".error");
      inputValueClear();
    }
    }

  subLog.addEventListener("click", () => {
    logInCheck();
    danger();
  });

  document.addEventListener("keydown", (e) => {
    if (e.code == "Enter" || e.code == "NumpadEnter") {
      logInCheck();
      danger();
    }
  });
});
