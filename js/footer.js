async function loadFooter() {

    const placeholder =
        document.getElementById(
            "footer-placeholder"
        );

    if (!placeholder) return;

    try {

        const res =
            await fetch(getFooterPath());

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

function getFooterPath() {

    const depth =
        window.location.pathname
            .split("/")
            .filter(Boolean)
            .length - 1;

    let prefix = "";

    for (let i = 0; i < depth; i++) {
        prefix += "../";
    }

    return prefix + "footer.html";
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