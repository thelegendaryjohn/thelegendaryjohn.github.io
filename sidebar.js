let navbarClosed = true;

// const menuBtn = document.getElementById('menu-btn');
// const animateElements = menuBtn.getElementsByTagName("animate");

// // Trigger the animations programmatically
// menuBtn.addEventListener('click', function() {
//   for (let i = 0; i < animateElements.length; i++) {
//     animateElements[i].beginElement();
//   }
// });

const openAnim = () => {
    document.querySelector("#start").beginElement();
    navbarClosed = false;
    console.log("Open animation");
}

const closeAnim = () => {
    document.querySelector("#reverse").beginElement();
    navbarClosed = true;
    console.log("Close animation");
}

const toggleNav = () => {
    console.log("Toggle navbar");
    document.querySelector("#sidebar").classList.toggle("toggleSidebar");

    (navbarClosed) ? openAnim() : closeAnim();
}

const closeNav = () => {
    console.log("Close navbar");
    document.querySelector("#sidebar").classList.remove("toggleSidebar");

    if (!navbarClosed) { closeAnim() }
}

const detectIgnoredClass = (event) => {
    event.stopPropagation();
}

document.querySelector("#menu-btn").addEventListener("click", toggleNav);
document.querySelector("body").addEventListener("click", closeNav);
document.querySelectorAll(".ignoreSidebarToggle").forEach((e) => {
    e.addEventListener("click", detectIgnoredClass);
})