const link = document.createElement("link");
link.rel = "stylesheet";
link.href = chrome.runtime.getURL("style.css");
document.head.appendChild(link);

document.addEventListener("DOMContentLoaded", () => {
    let targetInput = document.getElementById("reject_reason");
    console.log(targetInput); 

    // let targetInput = document.getElementById("addRemarkInput");

let remarks_array = ["God", "Jesus", "Allah", "Buddha", "Hindu Deity", "angel", "witch", "cross", "pentagram", "mosque", "quran", "cleavage", "close-up", "45 degrees", "less than 45 degrees", "suspected naked", "exaggerated breast", "kissing"];

targetInput.addEventListener("mousedown", (event) => {
    if (event.button === 1) {
        event.preventDefault();

        // create a banner

        const banner = document.createElement("div");
        banner.id = "remarker-banner";

        // generate buttons 

        remarks_array.forEach(element => {

            let btn = document.createElement("button")
            btn.textContent = element
            banner.appendChild(btn)

        });

         // assigning event listener for the whole div

            banner.addEventListener("click", function (event) {

                targetInput.value += `\n ${event.target.textContent}`;
                banner.remove();

            })

        document.body.appendChild(banner)

    }
});
    
});






