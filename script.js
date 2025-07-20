const accordionItems = document.querySelectorAll(".accordion-item");
const menuIcon = document.getElementsByClassName("menu-icon")[0]
const menuItems = document.getElementsByClassName("menu-items")[0]

menuIcon.addEventListener("click", () => {
    menuItems.classList.toggle("sidebar");
})
accordionItems.forEach(question => {
    const btn = question.querySelector(".togglebtn");
    btn.addEventListener("click", () => {
        accordionItems.forEach(item => {
            if (item !== question) {
                item.classList.remove("open");
            }
        });
        question.classList.toggle("open");
    });
});

function formatDate() {
    document.getElementsByClassName("year")[0].innerText = new Date().getFullYear()
}
formatDate()