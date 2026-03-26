async function loadFooter() {

    const placeholder =
        document.getElementById(
            "footer-placeholder"
        );

    if (!placeholder) return;

    try {

        /*
         Descobre automaticamente
         o caminho base do site
        */

        const basePath =
            window.location.pathname
                .includes("/Bioinformatica/")
                ? "/Bioinformatica/"
                : "/";

        const res =
            await fetch(
                basePath + "footer.html"
            );

        if (!res.ok)
            throw new Error(
                "Footer não encontrado"
            );

        const html =
            await res.text();

        placeholder.innerHTML = html;

        applyFooterLayout(
            placeholder.dataset.layout
        );

        if (typeof initVisitorCounter === "function") {
            initVisitorCounter();
        }

    } catch (e) {

        console.error(
            "Erro ao carregar footer:",
            e
        );
    }
}

function applyFooterLayout(layout) {

    const footer =
        document.querySelector(".footer");

    if (!footer) return;

    switch (layout) {

        case "sidebar":
            footer.classList.add("footer-sidebar");
            break;

        case "content":
            footer.classList.add("footer-content");
            break;

        default:
            footer.classList.add("footer-full");
    }
}

document.addEventListener(
    "DOMContentLoaded",
    loadFooter
);