const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(question => {
    const btn = question.querySelector(".togglebtn");
    // console.log(question);
    // console.log(btn);
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