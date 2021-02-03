const ul = document.querySelector("ul");
ul.classList.add("menu");

ul.firstElementChild.classList.add("first");
ul.lastElementChild.classList.add("last");
const li3 = ul.children[2];
li3.classList.add("active");
li3.style.fontColor = "#fff";

const li = ul.querySelectorAll("li");
li.forEach(el => {
    el.firstElementChild.setAttribute("title", "Przejdź na stronę " + el.innerText);
    el.firstElementChild.setAttribute("href", "#");
});

//# domyślnie przenosi nas na górę strony, zamiast tego można użyć "javascript: ;"


li.forEach(el => {
    el.firstElementChild.addEventListener("click", e => {
        if (el.classList.contains("active")) {
        }else{
            alert("Kliknięto " + el.firstElementChild.innerText);
        }
    })
});

