//Get elements from DOM and push into array
const faders = document.getElementsByClassName("fade");
const initialFadersArr = [];
for (let i = 0; i < faders.length; i++) {
    initialFadersArr.push(faders[i]);
}

//Function to control fade-in effect
const animateThese = arr => {
    let viewPortHeight = window.visualViewport.height;
    arr.forEach(element => {
        let rect = element.getBoundingClientRect();
        let elemOpacity = element.style.opacity;
        let animation = element.getAnimations({ subtree: true })[0];
        console.log(animation);
        if (rect.y > viewPortHeight) {
            //Cancel animation if element is not in viewport
            animation.finish();
            let elemOpacity = element.style.opacity = 0;
        } else if (rect.y < viewPortHeight && elemOpacity == 0) {
            //Play animation if element is in viewport and invisible and reset opacity value 
            animation.play();
            let elemOpacity = element.style.opacity = 1;
        }
    });
};

//Functions to select elements to animate
const initialFadeIn = () => {
    animateThese(initialFadersArr);
};

const fadeIn = () => {
    let hiddenFaders = initialFadersArr.filter(element => element.style.opacity < 1);
    console.log(hiddenFaders[0].getAnimations);
    animateThese(hiddenFaders);
    if (hiddenFaders[0] == undefined) {
        document.removeEventListener("scroll", fadeIn, true);
    }
};

//Event listeners to trigger animations on initial page load and on scrolls
window.addEventListener("load", initialFadeIn);
document.addEventListener("scroll", fadeIn);

