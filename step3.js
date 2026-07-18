const files = document.querySelectorAll(".file-open");
const completionMessage = document.querySelector(".completion-message");
let fileClicks = Number(sessionStorage.getItem("fileClicks")) || 0;

function updateCardState(file) {

    const card = file.nextElementSibling;

    if (file.checked) {

        card.classList.add("open");

    } 
    
    else {

        card.classList.remove("open");

    }

}

function countOpenedFiles() {

    let openedFiles = 0;

    files.forEach(function (file) {

        if (file.checked) {

            openedFiles++;

        }

    });

    return openedFiles;
}

function updateCompletionMessage() {

    const openedFiles = countOpenedFiles();

    if (openedFiles === files.length) {

        completionMessage.classList.add("visible");

    } 
    
    else {

        completionMessage.classList.remove("visible");

    }

}

function recordFileClick(file) {

    if (file.checked) {

        fileClicks++;
        sessionStorage.setItem("fileClicks", fileClicks);

    }

}

files.forEach(function (file) {

    file.addEventListener("change", function () {

        recordFileClick(file);
        updateCardState(file);
        updateCompletionMessage();

    });
});