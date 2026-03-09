/* DARK MODE */

function toggleTheme() {
    document.body.classList.toggle("light");
}

/* SEARCH */

function searchContent() {

    let input = document.getElementById("search");
    if (!input) return;

    input.addEventListener("keyup", function () {

        let filter = input.value.toLowerCase();
        let sections = document.querySelectorAll(".section");

        sections.forEach(sec => {
            if (sec.innerText.toLowerCase().includes(filter)) {
                sec.style.display = "block";
            } else {
                sec.style.display = "none";
            }
        });

    });

}

/* TOC */

function generateTOC() {

    let toc = document.getElementById("toc");
    if (!toc) return;

    let headers = document.querySelectorAll("h2");

    headers.forEach(h => {
        let id = h.innerText.replace(/\s+/g, "-");
        h.id = id;

        let link = document.createElement("a");
        link.href = "#" + id;
        link.innerText = h.innerText;

        toc.appendChild(link);

    });

}

document.addEventListener("DOMContentLoaded", function () {

    searchContent();
    generateTOC();

});