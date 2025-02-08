const main = document.querySelector(".main__search");
const setting = document.querySelector(".setting__search");
const janr = document.querySelector(".janr__search");
const actor = document.querySelector(".actor__search");

function goBack(val) {
    if (val == 'main') {
        main.style.display = "flex"
        setting.style.display = "none"
        janr.style.display = "none"
        actor.style.display = "none"
    } else if (val == 'setting') {
        main.style.display = "none"
        janr.style.display = "none"
        actor.style.display = "none"
        setting.style.display = "flex"

    } else if (val == 'janr') {
        setting.style.display = "none"
        janr.style.display = "flex"
        main.style.display = "none"
        actor.style.display = "none"
    } else if (val == 'actor') {
        setting.style.display = "none"
        actor.style.display = "flex"
        janr.style.display = "none"
        main.style.display = "none"

    }
}

document.querySelectorAll(".show__wrap__item").forEach(item => {
    item.addEventListener("click", function () {
        document.querySelectorAll(".show__wrap__item").forEach(el => el.classList.remove("active"));
        this.classList.add("active");
    });
});


document.querySelectorAll(".sort__item").forEach(item => {
    item.addEventListener("click", function () {
        document.querySelectorAll(".sort__item").forEach(el => el.classList.remove("active"));
        this.classList.add("active");
    });
});

document.querySelectorAll(".janr__card__wrap__item").forEach(item => {
    item.addEventListener("click", function () {
        document.querySelectorAll(".janr__card__wrap__item").forEach(el => el.classList.remove("active"));
        this.classList.add("active");
    });
});

document.querySelectorAll(".janr__card__by__item").forEach(item => {
    item.addEventListener("click", function () {
        document.querySelectorAll(".janr__card__by__item").forEach(el => el.classList.remove("active"));
        this.classList.add("active");
    });
});