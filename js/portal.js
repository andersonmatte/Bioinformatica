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

/* TABLE WRAPPER (responsividade) */

function wrapTables() {
    document.querySelectorAll("table").forEach(function (table) {
        if (table.parentElement && !table.parentElement.classList.contains("table-wrapper")) {
            const wrapper = document.createElement("div");
            wrapper.className = "table-wrapper";
            table.parentNode.insertBefore(wrapper, table);
            wrapper.appendChild(table);
        }
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

/* MENU HAMBÚRGUER */

function initNavToggle() {
    const toggle = document.querySelector(".nav-toggle");
    const navbar = document.querySelector(".navbar");
    if (!toggle || !navbar) return;

    toggle.addEventListener("click", function () {
        navbar.classList.toggle("menu-open");
    });

    document.addEventListener("click", function (e) {
        if (navbar.classList.contains("menu-open") && !navbar.contains(e.target)) {
            navbar.classList.remove("menu-open");
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {

    initNavToggle();
    wrapTables();
    searchContent();
    generateTOC();

});