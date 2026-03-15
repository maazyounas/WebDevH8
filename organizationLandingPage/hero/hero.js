document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    if (target.id === "heroExploreBtn") {
        alert("Courses section coming soon!");
        return;
    }

    if (target.id === "heroEnrollBtn") {
        window.location.href = "../form/form.html";
    }
});
