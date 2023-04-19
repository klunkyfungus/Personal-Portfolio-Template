//Get elements from the DOM
const projectSection = document.getElementById("latest-projects");
const mixedMessagesPara = document.getElementById("mixed-messages-para");
const responsiveWebPara = document.getElementById("responsive-web-para");
const mixedMessagesPrev = document.getElementById("mixed-messages-preview");
const responsiveWebPrev = document.getElementById("responsive-web-preview");
const mixedMessagesBtn = document.getElementById("mm-button");
const responsiveWebBtn = document.getElementById("rw-button");
const divider = document.getElementById("divider");

//Function to control project explanation text and preview picture
const showLatestProject = event => {
    switch (event.target) {
        case mixedMessagesBtn:
             mixedMessagesPara.style.display = "flex";
             responsiveWebPara.style.display = "none";
             mixedMessagesPrev.style.display = "block";
             responsiveWebPrev.style.display = "none";
             divider.style.display = "block";
             break;
        case responsiveWebBtn:
             mixedMessagesPara.style.display = "none";
             responsiveWebPara.style.display = "flex";
             mixedMessagesPrev.style.display = "none";
             responsiveWebPrev.style.display = "block";
             divider.style.display = "block";
             break;
    }
};

//Event listeners to trigger showLatestProject function on button interaction
projectSection.addEventListener("mouseover", showLatestProject);
projectSection.addEventListener("touchstart", showLatestProject);

