document.addEventListener("DOMContentLoaded", () => {
    const clickButton = document.querySelector("#clickBtn");
    const overButton = document.querySelector("#overBtn");
    const leaveButton = document.querySelector("#leaveBtn");
    const scrollButton = document.querySelector("#scrollBtn");

    const clickHeading = document.querySelector("#clickHeading");
    const overHeading = document.querySelector("#overHeading");
    const leaveHeading = document.querySelector("#leaveHeading");
    const scrollHeading = document.querySelector("#scrollHeading");

    clickButton.addEventListener("click", () => {
        alert("Button Clicked");
    });

    overButton.addEventListener("mouseover", () => {
        alert("Mouse Over Button");
    });

    leaveButton.addEventListener("mouseleave", () => {
        alert("Mouse Left Button");
    });

    window.addEventListener("scroll", () => {
        alert("Scrolled the page");
    });

    // Styling headings by ID
    document.getElementById("clickHeading").style.color = "red";
    document.getElementById("clickHeading").style.fontSize = "30px";
    document.getElementById("clickHeading").style.fontFamily = "Arial, sans-serif";

    document.getElementById("overHeading").style.color = "green";
    document.getElementById("overHeading").style.fontSize = "30px";
    document.getElementById("overHeading").style.fontFamily = "Arial, sans-serif";

    document.getElementById("leaveHeading").style.color = "blue";
    document.getElementById("leaveHeading").style.fontSize = "30px";
    document.getElementById("leaveHeading").style.fontFamily = "Arial, sans-serif";

    document.getElementById("scrollHeading").style.color = "purple";
    document.getElementById("scrollHeading").style.fontSize = "30px";
    document.getElementById("scrollHeading").style.fontFamily = "Arial, sans-serif";

    // Styling headings by class 'heading'
    const headings = document.querySelectorAll('.heading');
    
    headings.forEach((heading, index) => {
        heading.style.fontSize = "25px";
        heading.style.fontFamily = "Verdana, sans-serif";
        heading.style.marginBottom = "20px";
        
        switch (index) {
            case 0:
                heading.style.color = "orange"; // Click Button heading
                break;
            case 1:
                heading.style.color = "yellow"; // Mouse Over Button heading
                break;
            case 2:
                heading.style.color = "cyan"; // Mouse Leave Button heading
                break;
            case 3:
                heading.style.color = "magenta"; // Scroll Event heading
                break;
            default:
                break;
        }
    });

    // Adding transition effect for each heading on hover (using class)
    headings.forEach((heading) => {
        heading.addEventListener("mouseover", () => {
            heading.style.color = "darkviolet";
            heading.style.fontSize = "35px";
        });

        heading.addEventListener("mouseleave", () => {
            heading.style.color = "";
            heading.style.fontSize = "25px";
        });
    });
});
