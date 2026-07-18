const profileName = document.querySelector("#profileName");
const profileDescription = document.querySelector("#profileDescription");
const movementResult = document.querySelector("#movementResult");
const edgeResult = document.querySelector("#edgeResult");
const archiveResult = document.querySelector("#archiveResult");
const restartButton = document.querySelector("#restartButton");
const reportLabel = document.querySelector(".report-label");
const timeResult = document.querySelector("#timeResult");
const startTime = Number(sessionStorage.getItem("startTime"));
let totalSeconds = 0;
const movementCount = Number(sessionStorage.getItem("movementCount")) || 0;
const edgeVisits = Number(sessionStorage.getItem("edgeVisits")) || 0;
const fileClicks = Number(sessionStorage.getItem("fileClicks")) || 0;

if (startTime > 0) {

    totalSeconds = Math.floor((Date.now() - startTime) / 1000);

}

movementResult.textContent = "Movement periods detected: " + movementCount;
edgeResult.textContent = "Edge visits detected: " + edgeVisits;
archiveResult.textContent = "Archive interactions detected: " + fileClicks;
timeResult.textContent = "Completion time: " + totalSeconds + " seconds";

if (fileClicks >= 10) {

    profileName.textContent = "THE GRINDER";
    profileDescription.textContent = "You kept returning to the records even after you had enough information to continue. Repetition did not discourage you.";
}

else if (totalSeconds >= 100 && fileClicks >= 5) {

    profileName.textContent = "THE COMPLETIONIST";
    profileDescription.textContent = "You took your time, and looked at the hidden layers more than once. It was not enough to get to the end. You wanted to be sure you hadn’t missed anything.";
}

else if (edgeVisits >= 4 || movementCount >= 5) {

    profileName.textContent = "THE EXPLORER";
    profileDescription.textContent = "You went further than what the instructions said. You tested the boundaries of each page.";
}

else if (fileClicks > 3) {

    profileName.textContent = "THE INVESTIGATOR";
    profileDescription.textContent = "You did not simply uncover the records. You returned to them and looked at what had already been revealed.";
}

else if (

    movementCount <= 2 &&
    edgeVisits <= 1 &&
    fileClicks === 3
) 

{

    profileName.textContent = "THE OBSERVER";
    profileDescription.textContent = "You followed the instructions very closely. You waited, you focused, you found each record without testing the experience repeatedly.";
}

else {

    profileName.textContent = "THE BALANCED SEARCHER";
    profileDescription.textContent = "You followed the instructions and tried the page out yourself.";
}


restartButton.addEventListener("click", function () {
    sessionStorage.clear();
});