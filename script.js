document.addEventListener("DOMContentLoaded", function () {
    const Link = document.getElementById("service-down");
    const Card = document.getElementById("service-linker");

    function scrollToCard() {
        Card.scrollIntoView({ behavior: "smooth" });
    }

    Link.addEventListener("click", function (event) {
        event.preventDefault(); 
        scrollToCard(); 
    });
});
