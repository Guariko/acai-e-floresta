/* TODO: Global variables */

const classToDisplayElement = "active";

/* FIXME: Global variables end */

/* TODO: Header starts */

const openMobileNavContainer = document.querySelector(".header__bars");
const mobileNavContainer = document.querySelector(".header__nav__container");
const closeMobileNavContainer = document.querySelector(".close__mobile__nav");
const mobileNavItems = document.querySelectorAll(
  ".header__nav__container .header__item"
);

openMobileNavContainer.addEventListener("click", (e) => {
  addClass(mobileNavContainer, classToDisplayElement);
});

closeMobileNavContainer.addEventListener("click", (e) => {
  removeClass(mobileNavContainer, classToDisplayElement);
});

mobileNavItems.forEach((mobileItem) => {
  mobileItem.addEventListener("click", (e) => {
    removeClass(mobileNavContainer, classToDisplayElement);
  });
});

/* FIXME: Header ends */

/* TODO: Functions start */

function addClass(elementToUse, classToAdd) {
  elementToUse.classList.add(classToAdd);
}

function removeClass(elementToUse, classToRemove) {
  elementToUse.classList.remove(classToRemove);
}

/* FIXME: Functions end */
