const main = document.querySelector(".main__profil");
const subs = document.querySelector(".subs__profil");
const hystory = document.querySelector(".hystory__profil");

function goBack(val) {
    if (val == 'main') {
        main.style.display = "flex"
        subs.style.display = "none"
        hystory.style.display = "none"
    } else if (val == 'subs') {
        main.style.display = "none"
        subs.style.display = "flex"
        hystory.style.display = "none"
    } else if (val == 'hystory') {
        main.style.display = "none"
        subs.style.display = "none"
        hystory.style.display = "flex"
    }
}


document.querySelectorAll(".subs__item").forEach(item => {
    item.addEventListener("click", function () {
        document.querySelectorAll(".subs__item").forEach(el => el.classList.remove("active"));
        this.classList.add("active");
    });
});