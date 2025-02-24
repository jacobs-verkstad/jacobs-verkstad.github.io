const sidemenu = document.querySelector(".sidemenu");
const hoverArea = document.createElement("div");

hoverArea.style.position = "fixed";
hoverArea.style.top = "0";
hoverArea.style.left = "0";
hoverArea.style.width = "20px"; // Small invisible trigger area
hoverArea.style.height = "100vh";
hoverArea.style.background = "transparent";
document.body.appendChild(hoverArea);

hoverArea.addEventListener("mouseenter", () => {
    sidemenu.style.left = "0";
});

sidemenu.addEventListener("mouseleave", () => {
    sidemenu.style.left = "-200px";
});
