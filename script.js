function toggleStyle() {
    const themeStyle = document.getElementById("theme-style");

    if (themeStyle.getAttribute("href") === "style1.css") {
        themeStyle.setAttribute("href", "style2.css");
        localStorage.setItem("selectedStyle", "style2.css");
    } else {
        themeStyle.setAttribute("href", "style1.css");
        localStorage.setItem("selectedStyle", "style1.css");
    }
}

// Keep selected style when changing pages or refreshing
window.addEventListener("DOMContentLoaded", function () {
    const savedStyle = localStorage.getItem("selectedStyle");
    const themeStyle = document.getElementById("theme-style");

    if (savedStyle && themeStyle) {
        themeStyle.setAttribute("href", savedStyle);
    }
});

let lastScrollY = window.scrollY;
let scrollTimer;

window.addEventListener("scroll", function () {
    const toggle = document.querySelector(".style-toggle");

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