
const mobile_button = document.querySelector(".nav_mobile_button");
const nav_mobile = document.querySelector(".nav_mobile");
const exit_button = document.querySelector(".exit_button");


mobile_button.addEventListener("click", function () {

    nav_mobile.classList.add("active");
    mobile_button.classList.add("hidden");
})

exit_button.addEventListener("click", function () {
    mobile_button.classList.remove("hidden");
    nav_mobile.classList.remove("active");
})

