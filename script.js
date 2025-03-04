document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById("search-bar");
    searchBar.addEventListener("keyup", function (event) {
        let searchQuery = event.target.value.toLowerCase();
        console.log("Ricerca: ", searchQuery);
    });

    const dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("mouseenter", function () {
            this.querySelector(".dropdown-content").style.display = "block";
        });
        dropdown.addEventListener("mouseleave", function () {
            this.querySelector(".dropdown-content").style.display = "none";
        });
    });
});
