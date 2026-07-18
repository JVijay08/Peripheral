const edgeZones = document.querySelectorAll(".edge-zone");
let edgeVisits = Number(sessionStorage.getItem("edgeVisits")) || 0;

edgeZones.forEach(function (zone) {

    let edgeTimer;

    zone.addEventListener("mouseenter", function () {

        edgeTimer = setTimeout(function () {

            edgeVisits++;
            sessionStorage.setItem("edgeVisits", edgeVisits);

        }, 3000);

    });

    zone.addEventListener("mouseleave", function () {

        clearTimeout(edgeTimer);
        
    });
});