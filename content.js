const link = document.createElement("link");
link.rel = "stylesheet";
link.href = chrome.runtime.getURL("style.css");
document.head.appendChild(link);

let isBannerActive = false;

let remarks_array = ["God", "Jesus", "Mary", "Allah", "Buddha", "Hindu Deity", "angel", "witch", "tarot", "cross", "bible verse", "pentagram", "star of David", "yinyang", "mosque", "quran", "pig", "cleavage", "close-up", "buttocks", "side boob", "under boob", "sticking out tongue", "no human figure", "suspected naked", "exaggerated breast", "kissing"];

let body = document.body;

body.addEventListener("click", (event) => {
    console.log("clicked")

    if (event.target.classList.contains("rocket-tag") && event.target.classList.contains("components_tag__eBgou")) {

        console.log(event.target.textContent);
        
    };
 
}
//,true
);

body.addEventListener("mousedown", (event) => {

    if (event.button === 2 && !isBannerActive) {
        console.log("mousedown event is detected!");

        isBannerActive = true;
        event.preventDefault();

        let targetInput = document.getElementById("reject_reason");
        console.log(targetInput);

        const banner = document.createElement("div");
        banner.id = "remarker-banner";

        // generate buttons

        remarks_array.forEach(element => {

            let btn = document.createElement("button")
            btn.textContent = element
            banner.appendChild(btn)

        })

        // generating close button

        let closeBtn = document.createElement("button");
        closeBtn.id = "bannerCloseBtn";
        closeBtn.textContent = "close";
        banner.appendChild(closeBtn);

        // assigning event listener for the whole div

        banner.addEventListener("click", function (event) {

            if (event.target.tagName !== "BUTTON") {
                isBannerActive = false;
                return;

            }
            else if (event.target.id === "bannerCloseBtn") {
                isBannerActive = false;
                banner.remove();
                return;

            }
            else {
                isBannerActive = false;

                const nativeSetter = Object.getOwnPropertyDescriptor(
                    window.HTMLTextAreaElement.prototype,
                    "value"
                ).set;

                nativeSetter.call(
                    targetInput,
                    targetInput.value + `${event.target.textContent}`
                );

                targetInput.dispatchEvent(new Event("input", { bubbles: true }));

                banner.remove();
            }

        })

        document.body.appendChild(banner)

    }

}, true);






