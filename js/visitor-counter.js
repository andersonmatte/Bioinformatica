function initVisitorCounter() {

    const VISITOR_KEY = "bioinfo_visitor_count";
    const VISITED_KEY = "bioinfo_visited";

    let count =
        parseInt(
            localStorage.getItem(VISITOR_KEY)
        ) || 0;

    const visited =
        localStorage.getItem(VISITED_KEY);

    if (!visited) {

        count++;

        localStorage.setItem(
            VISITOR_KEY,
            count
        );

        localStorage.setItem(
            VISITED_KEY,
            "true"
        );
    }

    const el =
        document.getElementById("visit-count");

    if (el) {
        el.textContent = count;
    }
}