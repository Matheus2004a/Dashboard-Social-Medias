const buttonToggle = document.querySelector(".button-toggle")

const body = document.querySelector("body")
const cardsDashboard = document.querySelectorAll(".cards")
const sections = document.querySelectorAll(".section-cards")
const footer = document.querySelector("footer")

buttonToggle.addEventListener("click", () => {
    body.classList.toggle("change-theme")

    for (let section of sections) {
        section.classList.toggle("change-theme")
    }

    for (let card of cardsDashboard) {
        card.classList.toggle("change-theme")
    }

    footer.classList.toggle("change-theme")
})