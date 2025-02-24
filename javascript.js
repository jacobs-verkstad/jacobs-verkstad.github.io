window.onload = function() {
    const sidemenu = document.querySelector(".sidemenu");
    const hoverArea = document.querySelector(".hover-area");
    const content = document.querySelector(".content");
    const container = document.querySelector(".container");
    const slideShow = document.querySelector(".slideshow img"); // ✅ Selects the img inside the div

    const images = [
        "Matissedance.jpg",
        "music.jpg",
        "zorn1jpg.jpg",
        "zorn2.jpg",
        "zorn3.jpg"
    ];
    
    let index = 0; // Track the current image index
    function changeImage() {
        index = (index + 1) % images.length; // Loop back to the first image
        slideShow.src = "ss-pics/" + images[index]; // Update image source
        console.log(index);
    }
    setInterval(changeImage, 5000); // Change image every 5 seconds

    hoverArea.addEventListener("mouseenter", () => {
        sidemenu.style.left = "0"; 
        container.style.marginLeft = "200px"; // Shift entire content
    });
    
    sidemenu.addEventListener("mouseleave", () => {
        sidemenu.style.left = "-200px"; 
        container.style.marginLeft = "0"; // Move back
    });

    

};
