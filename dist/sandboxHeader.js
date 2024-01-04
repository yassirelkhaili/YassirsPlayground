"use strict";
/**
 * @author Yassir Elkhaili
 * @license MIT
*/
document.addEventListener("DOMContentLoaded", () => {
    const burgerMenuBtns = document.querySelectorAll(".nav__group__burger");
    const toggleNavBar = () => {
        const navBar = document.querySelector(".nav");
        navBar.classList.toggle("shrink");
    };
    const toggleSideBar = () => {
        const sideBar = document.querySelector(".side__nav");
        sideBar.classList.toggle("side__nav--active");
    };
    const toggleBurgerMenu = () => {
        toggleNavBar();
        toggleSideBar();
    };
    burgerMenuBtns.forEach(burgerBtn => burgerBtn.addEventListener("click", toggleBurgerMenu));
});
