// switch between the two website styles
function toggleStyle() {
    const themeStyle = document.getElementById("theme-style");

    if (!themeStyle) return;

    const currentStyle = themeStyle.getAttribute("href");

    if (currentStyle === "style1.css") {
        themeStyle.setAttribute("href", "style2.css");
        localStorage.setItem("selectedStyle", "style2.css");
    } else {
        themeStyle.setAttribute("href", "style1.css");
        localStorage.setItem("selectedStyle", "style1.css");
    }
}


// keep selected style when changing pages or refreshing
document.addEventListener("DOMContentLoaded", function () {
    const themeStyle = document.getElementById("theme-style");
    const savedStyle = localStorage.getItem("selectedStyle");

    if (themeStyle && savedStyle) {
        themeStyle.setAttribute("href", savedStyle);
    }

    const toggle = document.querySelector(".style-toggle");

    if (toggle) {
        toggle.addEventListener("click", toggleStyle);
    }
});


let lastScrollY = window.scrollY;
let scrollTimer;

window.addEventListener("scroll", function () {
    const toggle = document.querySelector(".style-toggle");

    if (!toggle) return;

    if (window.scrollY > lastScrollY) {
        // scrolling down
        toggle.style.setProperty("--scroll-move", "-25px");
    } else {
        // scrolling up
        toggle.style.setProperty("--scroll-move", "25px");
    }

    lastScrollY = window.scrollY;

    // return to center after scrolling stops
    clearTimeout(scrollTimer);

    scrollTimer = setTimeout(function () {
        toggle.style.setProperty("--scroll-move", "0px");
    }, 190);
});