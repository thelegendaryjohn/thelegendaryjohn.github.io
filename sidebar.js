const toggleNav = () => {
    console.log("Toggle navbar");
    document.querySelector("#sidebar").classList.toggle("toggleSidebar");
}

const closeNav = () => {
    console.log("Close navbar");
    document.querySelector("#sidebar").classList.remove("toggleSidebar");
}

const detectIgnoredClass = (event) => {
    event.stopPropagation();
}

document.querySelector("#menu-btn").addEventListener("click", toggleNav);
document.querySelector("body").addEventListener("click", closeNav);
document.querySelectorAll(".ignoreSidebarToggle").forEach((e) => {
    e.addEventListener("click", detectIgnoredClass);
})