const first = document.querySelectorAll(".first-attempt");
first.forEach(el => {
    el.classList.add("active");
});

const second = document.querySelectorAll("[data-border]");
for (let el of second) {
    el.dataset.elActive = "";
}

const third = document.querySelectorAll(".hack");
third.forEach(el => {
    el.setAttribute("title", "hacking");
});

const fourth = document.querySelectorAll(".hijack");
fourth.forEach(el => {
    el.removeAttribute("title");
});

const fifth = document.getElementsByClassName('st1 st2');
for (let el of fifth) {
    el.style.color = "red";
    el.style.fontSize = "15px";
}

const sixth = document.getElementsByClassName('attrib');
for (let el of sixth) {
    el.removeAttribute("data-hack-inactive");
    el.setAttribute("data-hack-active", "");
}

const seventh = document.querySelectorAll(".last-attempt");
seventh.forEach(el => {
    const child = el.firstElementChild;
    child.style.display = "none";
});