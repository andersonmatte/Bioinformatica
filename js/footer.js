async function loadFooter() {

    const placeholder =
        document.getElementById(
            "footer-placeholder"
        );

    if (!placeholder) return;

    try {

        const res =
            await fetch("/footer.html");

        const html =
            await res.text();

        placeholder.innerHTML = html;

        applyFooterLayout(
            placeholder.dataset.layout
        );

        initVisitorCounter();

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

            footer.classList.add(
                "footer-sidebar"
            );

            break;

        case "content":

            footer.classList.add(
                "footer-content"
            );

            break;

        default:

            footer.classList.add(
                "footer-full"
            );
    }
}

document.addEventListener(
    "DOMContentLoaded",
    loadFooter
);