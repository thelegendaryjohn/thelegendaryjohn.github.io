function openNav() {
    document.getElementById("sidebar").style.width = "190px";
    document.getElementById("main").style.marginLeft = "190px";
}
 
function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

// Event listener to close the sidebar when clicking outside
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById("sidebar");
    const main = document.getElementById("main");
    
    // Check if the click target is not within the sidebar or main content
    if (!sidebar.contains(event.target) && main.contains(event.target)) {
        closeNav();
    }
});