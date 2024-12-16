const menuBnt = document.getElementById("abreMenu");
const menuList = document.getElementById("menu");
const main = document.getElementById("main")

function activeBlur() {
    const blur = document.getElementById("blur")
    
    blur.style.opacity = "1"
    blur.style.visibility = "visible"
}

function removeBlur() {
    const blur = document.getElementById("blur")
    
    blur.style.opacity = "0"
    blur.style.visibility = "hidden"
}


function openMenu() {
    menuList.style.display = "block";
    setTimeout(() => {
        menuList.style.transition = "transform 0.5s ease";
        menuList.style.transform = "translateY(70px)";

    }, 10);
}

function closeMenu() {
    menuList.style.transition = "transform 0.5s ease";
    menuList.style.transform = "translateY(-130px)";
    setTimeout(() => {
        menuList.style.display = "none";
    }, 500);
}

menuBnt.addEventListener("click", (event) => {
    event.preventDefault()
    const currentDisplay = window.getComputedStyle(menuList).display;
    if (currentDisplay === "none") {
        activeBlur()
        openMenu()
    } else {
        removeBlur()
        closeMenu()
    }
});

window.addEventListener("scroll", () => {
    const menuBar = document.getElementById("topBar")
    if (window.scrollY > 0) {
        removeBlur()

        menuList.style.transition = "transform 0.5s ease";
        menuList.style.transform = "translateY(-130px)";
        main.style.transform = "translateY(0px)";

        menuBar.style.transition = "border-radius 1s ease";
        menuBar.style.borderRadius = "0"
        setTimeout(() => {
            menuList.style.display = "none";
        }, 500);
    } else {
        menuBar.style.transition = "border-radius 1s ease";
        menuBar.style.borderRadius = "0px 0px 40px 40px"
    }
});

function goToDiv(itemSelector, targetId, offset = 80) {
    const item = document.querySelector(itemSelector);
    const target = document.getElementById(targetId);

    if (!item || !target) return;

    item.addEventListener("click", function (event) {
        event.preventDefault();

        removeBlur()
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

