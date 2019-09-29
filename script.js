window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        'limegreen',
        'orange',
        'violet',
        'maroon',
        'royalblue',
        'aqua'
    ];

    //lets start the sound
    pads.forEach((pad, index) => {
        pad.addEventListener("click", function() {
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubble(index);
        });
    });
    
    //function that makes bubbles
    const createBubble = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener("animationend", function() {
            visual.removeChild(this);
        })
    }
});