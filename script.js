const menuBnt = document.getElementById("abreMenu");
const menuList = document.getElementById("menu");
const main = document.getElementById("main")

function openMenu() {
    menuList.style.display = "block";
    setTimeout(() => {
        menuList.style.transition = "transform 0.5s ease";
        menuList.style.transform = "translateY(90px)";
        main.style.transform = "translateY(90px)";
    }, 10);
}

function closeMenu() {


    menuList.style.transition = "transform 0.5s ease";
    menuList.style.transform = "translateY(-130px)";
    main.style.transform = "translateY(0px)";
    setTimeout(() => {
        menuList.style.display = "none";
    }, 500);
}

menuBnt.addEventListener("click", (event) => {
    event.preventDefault()
    const currentDisplay = window.getComputedStyle(menuList).display;
    if (currentDisplay === "none") {
        openMenu()
    } else {
        closeMenu()
    }
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        menuList.style.transition = "transform 0.5s ease";
        menuList.style.transform = "translateY(-130px)";
        main.style.transform = "translateY(0px)";
        setTimeout(() => {
            menuList.style.display = "none";
        }, 500);
    }
});

function goToDiv(itemSelector, targetId, offset = 190) {
    const item = document.querySelector(itemSelector);
    const target = document.getElementById(targetId);

    if (!item || !target) return;

    item.addEventListener("click", function (event) {
        event.preventDefault();

        const targetPosition = target.getBoundingClientRect().top + window.scrollY;
        const scrollToPosition = targetPosition - offset;

        window.scrollTo({
            top: scrollToPosition,
            behavior: "smooth"
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const sections = [
        { itemSelector: "#goPizzas", targetId: "pizzas" },
        { itemSelector: "#goLanches", targetId: "lanches" },
        { itemSelector: "#goPorcoes", targetId: "porcoes" },
        { itemSelector: "#goBebidas", targetId: "bebidas" },
        { itemSelector: "#goSorvetes", targetId: "sorvetes" }
    ];

    sections.forEach(({ itemSelector, targetId }) => {
        goToDiv(itemSelector, targetId);
    });
});

