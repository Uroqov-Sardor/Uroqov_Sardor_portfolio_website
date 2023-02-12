window.addEventListener("DOMContentLoaded", () => {
  // GLOBAL FUNCTION
  function overflowHidden() {
    document.body.style.overflow = "hidden";
  }

  function overflowNone() {
    document.body.style.overflow = "";
  }

  function hide(element, display) {
    element.classList.add("none_d", "fade");
    element.classList.remove(`${display}`);
  }

  function show(element, display) {
    element.classList.add(`${display}`, "fade");
    element.classList.remove("none_d");
  }

  // CONST VERABLE
  const btnMenuNav = document.querySelector(".navbar-menu__btn"),
    navMenu = document.querySelector(".nav-menu"),
    listMenuNav = document.querySelector(".nav-menu__lists"),
    navLists = document.querySelectorAll(".navbar-list");
  // briefTextAuto = document.querySelector(".brief_bg");

  // function briefAutoText() {
  //   setInterval(() => {
  //     briefTextAuto.textContent = "JavaScript";
  //   }, 4000);
  //   setInterval(() => {
  //     briefTextAuto.textContent = "Front_End";
  //   }, 8000);
  // }

  // briefAutoText();

  function btnMenuOpenNav() {
    btnMenuNav.classList.add("open");
    btnMenuNav.classList.remove("close");
    navMenu.style.transform = "translate(100%)";
  }

  function btnMenuCloseNav() {
    btnMenuNav.classList.add("close");
    btnMenuNav.classList.remove("open");
    navMenu.style.transform = "translate(0)";
  }

  btnMenuNav.addEventListener("click", () => {
    if (btnMenuNav.classList.contains("open")) {
      btnMenuCloseNav();
    } else {
      btnMenuOpenNav();
    }
  });

  // NAV-BAR MENU LIST
  function navListRemoveActive() {
    navLists.forEach((item) => {
      item.classList.remove("active");
    });
  }

  function navListAddActive(i = 0) {
    navLists[i].classList.add("active");
  }

  navListRemoveActive();
  navListAddActive();

  listMenuNav.addEventListener("click", (event) => {
    const target = event.target;

    if (target && target.classList.contains("navbar-list")) {
      navLists.forEach((item, idx) => {
        if (target == item) {
          navListRemoveActive();
          navListAddActive(idx);
        }
      });
    }

    btnMenuOpenNav();
  });

  // TSkils
  const totales = document.querySelectorAll(".totale"),
    prosents = document.querySelectorAll(".prosent");
  function tSkilsAnimation(a, idx, color) {
    let pos = 0;

    const timeID = setInterval(frime, 10);

    function frime() {
      if (pos == a) {
        clearInterval(timeID);
      } else {
        pos++;
        totales[idx].innerHTML = `${pos}%`;
        prosents[idx].style.width = pos + "%";
        prosents[idx].style.background = color;
      }
    }
  }

  function siklis() {
    tSkilsAnimation(95, 0, "orange");
    tSkilsAnimation(80, 1, "blue");
    tSkilsAnimation(88, 2, "#a200ff");
    tSkilsAnimation(80, 3, "violet");
    tSkilsAnimation(20, 4, "yellow");
  }
  siklis();

  // Portfolio
  const portfolioContainer = document.querySelector(".portfolio__content"),
    portfolioItems = document.querySelectorAll(".portfolio__items"),
    menuPortfolio = document.querySelector(".portfolio__item__menu"),
    btnPortfolioItems = document.querySelectorAll(".item__btn");

  function portfolioItemsRemove() {
    portfolioItems.forEach((item) => {
      item.classList.remove("flex_d");
      item.classList.add("none_d");
    });
  }

  function portfolioItemsShow(i = 0) {
    portfolioItems[i].classList.add("flex_d", "fade");
    portfolioItems[i].classList.remove("none_d");
  }

  portfolioItemsRemove();
  portfolioItemsShow();

  function itemBtnInactive() {
    btnPortfolioItems.forEach((item) => {
      item.classList.add("item__btn-inactive");
      item.classList.remove("item__btn-active");
      item.style.background = "#000";
    });
  }

  function itemBtnActive(i = 0, bg = "blue", br = "2px solid blue") {
    btnPortfolioItems[i].classList.add("item__btn-active");
    btnPortfolioItems[i].classList.remove("item__btn-inactive");
    btnPortfolioItems[i].style.background = bg;
    portfolioContainer.style.borderTop = br;
  }

  itemBtnInactive();
  itemBtnActive();

  menuPortfolio.addEventListener("click", (e) => {
    const t = e.target;
    if (t && t.classList.contains("item__btn")) {
      btnPortfolioItems.forEach((item, idx) => {
        if (t == item) {
          itemBtnInactive();
          portfolioItemsRemove();
          portfolioItemsShow(idx);
          if (idx == 0) {
            itemBtnActive();
          } else if (idx == 1) {
            itemBtnActive(idx, "green", "2px solid green");
          } else if (idx == 2) {
            itemBtnActive(idx, "coral", "2px solid coral");
          } else {
            console.log("error");
          }
        }
      });
    }
  });

  // Scroll

  const top = document.querySelector(".top");
  //   aboutMe = document.querySelector(".about__me"),
  //   tskilContener = document.querySelector(".me__siklis"),
  //   portfolioTitle = document.querySelector(".portfolio__title"),
  const footer = document.querySelector("footer");

  function topScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight > 1000) {
      show(top, "flex_d");

      top.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
      });
    } else {
      hide(top, "flex_d");
    }
  }
  topScroll();
  window.addEventListener("scroll", topScroll);

  // function aboutScroll() {
  //   if (window.pageYOffset + document.documentElement.clientHeight > 1000) {
  //     siklis();

  //     window.removeEventListener("scroll", aboutScroll);

  //     show(aboutMe, "block_d");
  //     show(tskilContener, "flex_d");
  //   } else {
  //     hide(aboutMe, "block_d");
  //     hide(tskilContener, "flex_d");
  //   }
  // }

  // function portfolioScroll() {
  //   if (window.pageYOffset + document.documentElement.clientHeight > 1600) {
  //     window.removeEventListener("scroll", portfolioScroll);

  //     show(portfolioTitle, "block_d");
  //     show(portfolioContainer, "block_d");
  //   } else {
  //     hide(portfolioTitle, "block_d");
  //     hide(portfolioContainer, "block_d");
  //   }
  // }

  // function footerScroll() {
  //   if (window.pageYOffset + document.documentElement.clientHeight > 2000) {
  //     window.removeEventListener("scroll", footerScroll);

  //     show(footer, "flex_d");
  //   } else {
  //     hide(footer, "flex_d");
  //   }
  // }

  // window.addEventListener("scroll", aboutScroll);
  // window.addEventListener("scroll", portfolioScroll);
  // window.addEventListener("scroll", footerScroll);

  // FOOTER
  const contactMe = document.querySelector(".contact_me"),
    conts = document.querySelectorAll(".cont"),
    contThis = document.querySelectorAll(".contact_this");

  function hideCont(element, display) {
    element.classList.add("none_d", "fade1");
    element.classList.remove(`${display}`);
  }

  function showCont(element, display) {
    element.classList.add(`${display}`, "fade1");
    element.classList.remove("none_d");
  }

  function contClear() {
    contThis.forEach((item) => {
      hideCont(item, "flex_d");
    });
  }
  contClear();

  function contT(i) {
    showCont(contThis[i], "flex_d");
  }

  contactMe.addEventListener("click", (event) => {
    const e = event.target;

    if (e && e.classList.contains("cont")) {
      conts.forEach((item, idx) => {
        if (e == item) {
          if (idx == 0) {
            contT(0);
          } else if (idx == 1) {
            contT(1);
          } else if (idx == 2) {
            contT(2);
          } else if (idx == 3) {
            contT(3);
          } else {
            console.log("error");
          }
        }
      });
    }
  });

  footer.addEventListener("click", (e) => {
    if (e.target == footer) {
      contClear();
    }
  });

  // NOTFICATION

  // REGISTER

  // const btnSignUp = document.querySelector(".btn__signup"),
  //   btnLogIn = document.querySelector(".btn_login"),
  //   modal = document.querySelector(".modal"),
  //   closeSignUp = document.querySelector(".close_modal_sign_up"),
  //   closeLogIn = document.querySelector(".close_modal_log_in"),
  //   signUp = document.querySelector(".sign_up"),
  //   logIn = document.querySelector(".log_in"),
  //   submitLogIn = document.querySelector(".log_in-btn"),
  //   submitSignUp = document.querySelector(".sign_up-btn");

  // hideCont(modal, "flex_d");
  // hideCont(signUp, "flex_d");
  // hideCont(logIn, "flex_d");

  // btnSignUp.addEventListener("click", (e) => {
  //   e.preventDefault();

  //   showCont(modal, "flex_d");
  //   showCont(signUp, "flex_d");

  //   overflowHidden();
  // });

  // btnLogIn.addEventListener("click", (e) => {
  //   e.preventDefault();

  //   showCont(modal, "flex_d");
  //   showCont(logIn, "flex_d");

  //   overflowHidden();
  // });

  // closeSignUp.addEventListener("click", () => {
  //   hideCont(modal, "flex_d");
  //   hideCont(signUp, "flex_d");

  //   overflowNone();
  // });

  // modal.addEventListener("click", (e) => {
  //   if (e.target == modal) {
  //     hideCont(modal, "flex_d");
  //     hideCont(signUp, "flex_d");
  //     hideCont(logIn, "flex_d");
  //     inputValueClear();

  //     overflowNone();
  //   }
  // });

  // submitLogIn.addEventListener("click", () => {
  //   hideCont(signUp, "flex_d");
  //   showCont(logIn, "flex_d");
  // });

  // submitSignUp.addEventListener("click", () => {
  //   hideCont(logIn, "flex_d");
  //   showCont(signUp, "flex_d");
  // });

  // closeLogIn.addEventListener("click", () => {
  //   hideCont(modal, "flex_d");
  //   hideCont(logIn, "flex_d");
  //   overflowNone();
  // });

  // const sbtSign = document.querySelector(".submit_sign"),
  //   name = document.querySelector("#name"),
  //   phone = document.querySelector("#phone"),
  //   email = document.querySelector("#email"),
  //   password = document.querySelector("#password");

  // function inputValueClear() {
  //   name.value = "";
  //   phone.value = "";
  //   email.value = "";
  //   password.value = "";
  // }

  // sbtSign.addEventListener("click", (e) => {
  //   if (
  //     name.value !== "" &&
  //     name.value != Number(name.value) &&
  //     name.value.length > 3 &&
  //     name.value.length < 25
  //   ) {
  //     if (
  //       phone.value !== "" &&
  //       phone.value == Number(phone.value) &&
  //       phone.value.length > 5 &&
  //       phone.value.length < 15
  //     ) {
  //       if (email.value !== "") {
  //         if (
  //           password.value !== "" &&
  //           password.value == Number(password.value) &&
  //           password.value.length > 7 &&
  //           password.value.length < 9
  //         ) {
  //           showNotfication(".success");
  //           timeCloseNotfication(".success");
  //           setTimeout(() => {
  //             window.location.reload();
  //           }, 1000);
  //         } else {
  //           showNotfication(".error");
  //           timeCloseNotfication(".error");
  //           inputValueClear();
  //         }
  //       } else {
  //         showNotfication(".error");
  //         timeCloseNotfication(".error");
  //         inputValueClear();
  //       }
  //     } else {
  //       showNotfication(".error");
  //       timeCloseNotfication(".error");
  //       inputValueClear();
  //     }
  //   } else {
  //     timeCloseNotfication();
  //     showNotfication(".error");
  //     timeCloseNotfication(".error");
  //     inputValueClear();
  //   }
  // });
  // my portfolio website
});
