const cards = document.querySelectorAll(".card");

for (let i = 0; i < cards.length; i++) {
    const singleCard = cards[i];
    const cardBtn = singleCard.querySelector(".card-btn");
    cardBtn.addEventListener("click", function () {
        const cardTitle = singleCard.querySelector("h2").textContent;
        const price = parseFloat(cardBtn.getAttribute("data-price"));
        console.log(cardTitle, price);

        const pageRight = document.querySelector(".page-right");
        const p = document.createElement("p")
        p.textContent = `${cardTitle},${price}`;
        pageRight.append(p)
    })
}