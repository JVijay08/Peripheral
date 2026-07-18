const surface = document.querySelector(".surface");
const firstHint = document.querySelector(".first-hint");
const secondHint = document.querySelector(".second-hint");
const hidden = document.querySelector(".hidden");
let moveStart = 0;
let lastMove = 0;
let movementCount = 0;
let revealTimer;

sessionStorage.setItem("movementCount", 0);
sessionStorage.setItem("edgeVisits", 0);
sessionStorage.setItem("fileClicks", 0);
sessionStorage.setItem("startTime", Date.now());

function revealHidden() {

    sessionStorage.setItem("movementCount", movementCount);
    firstHint.classList.remove("visible");
    secondHint.classList.remove("visible");
    hidden.classList.add("revealed");
    surface.classList.add("revealed");

}

document.addEventListener("mousemove", function () {

    if (surface.classList.contains("revealed")) {

        return;

    }

    const currentTime = Date.now();

    if (currentTime - lastMove > 500) {

        moveStart = currentTime;
        movementCount++;

    }

    const movingFor = currentTime - moveStart;

    firstHint.classList.remove("visible");
    secondHint.classList.remove("visible");

    if (movingFor >= 7000) {

        secondHint.classList.add("visible");

    } 
    
    else if (movingFor >= 3000) {

        firstHint.classList.add("visible");

    }

    lastMove = currentTime;

    clearTimeout(revealTimer);
    revealTimer = setTimeout(revealHidden, 5000);

});

revealTimer = setTimeout(revealHidden, 5000);