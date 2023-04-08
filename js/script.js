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

  // LOADING
  const load = document.querySelector(".loading");
  overflowHidden();
  setTimeout(() => {
    overflowNone();
    load.style.opacity = "0";
    setTimeout(() => [(load.style.display = "none")], 1000);
  }, 3000);

  // CONST VERABLE
  const btnMenuNav = document.querySelector(".navbar-menu__btn"),
    navMenu = document.querySelector(".nav-menu"),
    listMenuNav = document.querySelector(".nav-menu__lists"),
    navLists = document.querySelectorAll(".navbar-list");

  function btnMenuOpenNav() {
    btnMenuNav.classList.add("open");
    btnMenuNav.classList.remove("close");
    navMenu.style.transform = "translate(100%)";
  }

  function btnMenuCloseNav() {
    btnMenuNav.classList.add("close");
    btnMenuNav.classList.remove("open");
    navMenu.style.transform = "translate(0%)";
  }

  btnMenuNav.addEventListener("click", () => {
    if (btnMenuNav.classList.contains("open")) {
      btnMenuCloseNav();
      overflowHidden();
    } else {
      btnMenuOpenNav();
      overflowNone();
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
    overflowNone();
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
  window.addEventListener("scroll", topScroll)

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
});
