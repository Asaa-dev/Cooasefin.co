// TODO: Navegador
// ?: Declaramos variable

const navButton = document.querySelector(".nav__button");

const navMenu = document.querySelector(".nav__container");

const tabButtons = document.querySelectorAll('.features__tab')

// ?: Action nav
navButton.addEventListener("click", () => {
  const navLogo = document.querySelector(".nav__logo");

  navMenu.classList.toggle("nav__container--active");


// ?: Condicionales de acción
  if (navMenu.classList.contains("nav__container--active")) {

    navLogo.setAttribute('src','./images/logo-bookmark-white.svg');

    navButton.setAttribute('src','./images/icon-close.svg');

  }else{

    navLogo.setAttribute('src','./images/logo-bookmark.svg');

    navButton.setAttribute('src','./images/icon-hamburger.svg');

  }
});

// ?: Action features

const removeActiveElements = (selector)=>{
  const elementsActive = document.querySelectorAll(`.${selector}`);

  if(elementsActive.length){

    elementsActive.forEach(elementActive =>{
      elementActive.classList.remove(selector);
    });
  }
}

// ?: Action features nav
tabButtons.forEach(tabButton =>{
  tabButton.addEventListener('click', (e) => {
    e.preventDefault();

    if(!tabButton.classList.contains('features__tab--active')){

      const articleNumber = tabButton.getAttribute('data-article');

      const articleShow = document.querySelector(`.features__article:nth-of-type(${articleNumber})`)

      removeActiveElements('features__tab--active');
      removeActiveElements('features__article--active');

      articleShow.classList.add('features__article--active');
      tabButton.classList.add('features__tab--active');

    }
  })
})
