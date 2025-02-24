window.onload = function() {
    const sidemenu = document.querySelector(".sidemenu");
    const hoverArea = document.querySelector(".hover-area");
    const content = document.querySelector(".content");
    const container = document.querySelector(".container");

    hoverArea.addEventListener("mouseenter", () => {
        sidemenu.style.left = "0"; 
        container.style.marginLeft = "200px"; // Shift entire content
    });
    
    sidemenu.addEventListener("mouseleave", () => {
        sidemenu.style.left = "-200px"; 
        container.style.marginLeft = "0"; // Move back
    });
};
