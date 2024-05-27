// Declaración de variables
const navButton = document.querySelector(".nav__button");
const navMenu = document.querySelector(".nav__container");
const tabButtons = document.querySelectorAll(".services__tab");
const Networks__tabButtons = document.querySelectorAll(".networks__tab");

const clickQuestions = document.querySelectorAll(".article__question");
const contact_clickQuestions = document.querySelectorAll(".article_contact__question");
const credit_clickQuestions = document.querySelectorAll(".article_credit__question");

// Evento de navegación responsive.
navButton.addEventListener("click", () => {

  const navLogo = document.querySelector(".nav__logo");
  navMenu.classList.toggle("nav__container--active");

  if (navMenu.classList.contains("nav__container--active")) {
    navLogo.setAttribute("src", "/src/assets/favicon/Coasefin-white.ico");
    navButton.setAttribute("src", "/src/assets/svg/icon-close.svg");
  } else {
    navLogo.setAttribute("src", "/src/assets/favicon/Cooasefin.ico");
    navButton.setAttribute("src", "/src/assets/svg/icon-hamburger.svg");
  }

});

// Evento de navegación responsive, cambios de tamaño en visualización.
const removeActiveElements = (selector) => {

  const elementsActive = document.querySelectorAll(`.${selector}`);

  if (elementsActive.length) {
    elementsActive.forEach((elementActive) => {
      elementActive.classList.remove(selector);
    });
  }
};

// Evento de navegación en section features.
tabButtons.forEach((tabButton) => {
  tabButton.addEventListener("click", (e) => {

    e.preventDefault();

    if (!tabButton.classList.contains("services__tab--active")) {

      const articleNumber = tabButton.getAttribute("data-article");
      const articleShow = document.querySelector(
        `.services__article:nth-of-type(${articleNumber})`

      );

      console.log(articleNumber);

      removeActiveElements("services__article--active");
      removeActiveElements("services__tab--active");

      articleShow.classList.add("services__article--active");
      tabButton.classList.add("services__tab--active");
    }
  });
});

Networks__tabButtons.forEach((Networks__tabButton) => {
  Networks__tabButton.addEventListener("click", (e) => {

    e.preventDefault();

    if (!Networks__tabButton.classList.contains("networks__tab--active")) {

      const articleNumber = Networks__tabButton.getAttribute("data-article");
      const articleShow = document.querySelector(
        `.networks__article:nth-of-type(${articleNumber})`

      );

      console.log(articleNumber);

      removeActiveElements("networks__article--active");
      removeActiveElements("networks__tab--active");

      articleShow.classList.add("networks__article--active");
      Networks__tabButton.classList.add("networks__tab--active");
    }
  });
});

// Evento de cambio de rotación icon-arrow
clickQuestions.forEach((clickQuestion) => {
  clickQuestion.addEventListener("click", () => {

    const arrow = clickQuestion.children[0];
    arrow.classList.toggle("article__arrow--rotate");

    const anwserContainer = clickQuestion.nextElementSibling;

    anwserContainer.classList.toggle("article__content--show");

  });
});

contact_clickQuestions.forEach((contact_clickQuestion) => {
  contact_clickQuestion.addEventListener("click", () => {

    const arrow = contact_clickQuestion.children[0];
    arrow.classList.toggle("article_contact__arrow--rotate");

    const anwserContainer = contact_clickQuestion.nextElementSibling;

    anwserContainer.classList.toggle("article_contact__content--show");

  });
});

credit_clickQuestions.forEach((credit_clickQuestion) => {
  credit_clickQuestion.addEventListener("click", () => {

    const arrow = credit_clickQuestion.children[0];
    arrow.classList.toggle("article_credit__arrow--rotate");

    const anwserContainer = credit_clickQuestion.nextElementSibling;

    anwserContainer.classList.toggle("article_credit__content--show");

  });
});

// Evento de navegación responsive global.
window.addEventListener("resize", () => {
  const isMenuActive = document.querySelector(".nav__container--active");

  if (isMenuActive) {

    const navLogo = document.querySelector(".nav__logo");

    navMenu.classList.remove("nav__container--active");
    navLogo.setAttribute("src", "/src/assets/favicon/Cooasefin.ico");
    navButton.setAttribute("src", "/src/assets/svg/icon-hamburger.svg");
    
  }
});
