console.log(document.getElementById("testBtn"));

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("testBtn");

    if (btn) {
        btn.addEventListener("click", () => {
            console.log("Clicked");
        });
    }
});