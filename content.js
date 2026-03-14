const link = document.createElement("link");
link.rel = "stylesheet";
link.href = chrome.runtime.getURL("style.css");
document.head.appendChild(link);

let isBannerActive = false;

//--------------------- NEW ARRAYS ---------------------------------

let remarks_category = ["RELIGION", "SEXY", "VULGAR", "ADULT", "EROTIC", "RESTRICT BRAND", "ALL CONTROLLED IP", "PORNOGRAPHY"]

let religion_remarks_array = ["God", "Jesus", "Mary", "Allah", "Buddha", "Hindu Deity", "angel", "witch", "tarot pattern", "cross", "pentagram", "star of David", "church", "mosque", "quran", "pig", "bible/verse", "yinyang", "runes", "Satan", "Monk", "Triple Moon", "divination-related", "Amen"];
let sexy_remarks_array = ["buttocks", "cleavage", "close-up", "fishnet - standing"]
let vulgar_remarks_array = ["buttocks", "inverted V", "side boob", "under boob", "lying", "supported lying", "kneeling", "prone", "taking-off", "sticking-out tongue", "shadow"]
let adult_remarks_array = ["suspected naked", "exaggerated breast", "realistic sex toy", "with human figure", "kissing", "male - teasing", "lean forward", "genital-like", "suspected nipple"]
let pornography_remarks_array = ["camel toe", "opaque white liquid", "mosaic", "sexual behavior/gesture", "BDSM + face exposed", "tied-up + real human", "butt line", "genital", "nipple"]

let erotic_clothes_remarks_array = ["suspender", "hollowed-out", "high-slit", "lingerie", "cosplay"]
let restrict_brand_remarks_array = ["Nike", "Adidas", "NFL", "MLB", "FIFA", "NHL", "Iphone", "Samsung"]
let all_controlled_ip_remarks_array = ["Disney", "Sanrio", "Marvel", "DC", "Harry Potter", "Naruto", "Dragon Ball", "One Piece", "Jujutsu Kaisen", "Demon Slayer"]

//--------------------- NEW ARRAYS ---------------------------------

let body = document.body;

body.addEventListener("click", (event) => {

    if (event.target.classList.contains("rocket-tag") && event.target.classList.contains("components_tag__eBgou")) {

        generateDynamicOptions(event.target.textContent);

    }

    //looks for the closest elements up the DOM tree which have these classes;
    else if (event.target.closest(".rocket-btn.rocket-btn-primary")) {

        closeAllActiveBanners();

    }

}
    //,true
);

function generateDynamicOptions(event) {

    switch (event) {

        case "Religion":
            createCategorizedOptions("RELIGION");
            break;
        case "Sexy":
            createCategorizedOptions("SEXY");
            break;
        case "Vulgar":
            createCategorizedOptions("VULGAR");
            break;
        case "Adult":
            createCategorizedOptions("ADULT");
            break;
        case "Erotic clothes":
        case "Dummy Erotic Costumes":
        case "Realistic Erotic Costumes":
            createCategorizedOptions("EROTIC");
            break;
        case "Restrict Brand":
            createCategorizedOptions("RESTRICT BRAND");
            break;
        case "All Controlled IP":
            createCategorizedOptions("ALL CONTROLLED IP");
            break;
        case "Pornography":
            createCategorizedOptions("PORNOGRAPHY");
            break;

        // EXCEPTIONS FOR AUTO-REMARKS
        case "Sexual Wellness Products":
            insertAutoRemark("SEXUAL WELLNESS PRODUCTS")
            break;
        case "Basic Sex Toys":
            insertAutoRemark("BASIC SEX TOYS")
            break;
        ////////////////////////////////////

        default:
            console.log("not available!")

    }

}

function closeAllActiveBanners() {

    document.querySelectorAll(".filteredOptionsBanner").forEach(banner => {

        banner.remove();

    });

    document.querySelectorAll(".remarker-banner").forEach(banner => {

        banner.remove();

    })

    isBannerActive = false;

}

body.addEventListener("mousedown", (event) => {

    if (event.button === 2 && !isBannerActive) {

        isBannerActive = true;
        event.preventDefault();

        const banner = document.createElement("div");
        banner.className = "remarker-banner";

        // generate buttons

        remarks_category.forEach(element => {

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
            else if (event.target.textContent === "RELIGION") {
                isBannerActive = false;
                banner.remove();
                createCategorizedOptions("RELIGION")
                return;

            }
            else if (event.target.textContent === "SEXY") {
                isBannerActive = false;
                banner.remove();
                createCategorizedOptions("SEXY")
                return;

            }
            else if (event.target.textContent === "VULGAR") {
                isBannerActive = false;
                banner.remove();
                createCategorizedOptions("VULGAR")
                return;

            }
            else if (event.target.textContent === "ADULT") {
                isBannerActive = false;
                banner.remove();
                createCategorizedOptions("ADULT")
                return;

            }
            else if (event.target.textContent === "EROTIC") {
                isBannerActive = false;
                banner.remove();
                createCategorizedOptions("EROTIC")
                return;

            }
            else if (event.target.textContent === "RESTRICT BRAND") {
                isBannerActive = false;
                banner.remove();
                createCategorizedOptions("RESTRICT BRAND")
                return;

            }
            else if (event.target.textContent === "ALL CONTROLLED IP") {
                isBannerActive = false;
                banner.remove();
                createCategorizedOptions("ALL CONTROLLED IP")
                return;

            }
            else if (event.target.textContent === "PORNOGRAPHY") {
                isBannerActive = false;
                banner.remove();
                createCategorizedOptions("PORNOGRAPHY")
                return;

            }
        })

        document.body.appendChild(banner)

    }

}, true);

function createCategorizedOptions(category) {

    const filteredOptionsBanner = document.createElement("div");
    filteredOptionsBanner.className = "filteredOptionsBanner";

    // generate buttons

    let targetArray;

    if (category === "RELIGION") {
        targetArray = religion_remarks_array

    }

    else if (category === "SEXY") {

        targetArray = sexy_remarks_array

    }

    else if (category === "VULGAR") {

        targetArray = vulgar_remarks_array

    }

    else if (category === "ADULT") {

        targetArray = adult_remarks_array

    }
    else if (category === "EROTIC") {

        targetArray = erotic_clothes_remarks_array

    }
    else if (category === "RESTRICT BRAND") {

        targetArray = restrict_brand_remarks_array

    }
    else if (category === "ALL CONTROLLED IP") {

        targetArray = all_controlled_ip_remarks_array

    }
    else if (category === "PORNOGRAPHY") {

        targetArray = pornography_remarks_array

    }

    else {

        return;

    }

    targetArray.forEach(element => {

        let btn = document.createElement("button")
        btn.textContent = element
        filteredOptionsBanner.appendChild(btn)

    })

    // generating close button

    let filteredOptionsCloseBtn = document.createElement("button");
    filteredOptionsCloseBtn.id = "filteredOptionsCloseBtn";
    filteredOptionsCloseBtn.textContent = "close";
    filteredOptionsBanner.appendChild(filteredOptionsCloseBtn);

    // adding event listener

    let targetInput = document.getElementById("reject_reason"); //ORIGINAL ID: reject_reason // FOR TESTING ID: addRemarkInput

    filteredOptionsBanner.addEventListener("click", function (event) {

        if (event.target.tagName !== "BUTTON") {

            return;

        }
        else if (event.target.id === "filteredOptionsCloseBtn") {

            filteredOptionsBanner.remove();
            return;

        }
        else {
            isBannerActive = false;

            // original prototype: HTMLTextAreaElement.prototype
            // for testing: HTMLInputElement

            const nativeSetter = Object.getOwnPropertyDescriptor(
                window.HTMLTextAreaElement.prototype,
                "value"
            ).set;

            nativeSetter.call(
                targetInput,
                targetInput.value + `${event.target.textContent}\n`
            );

            targetInput.dispatchEvent(new Event("input", { bubbles: true }));

            filteredOptionsBanner.remove();
        }

    })

    document.body.appendChild(filteredOptionsBanner)

}

function insertAutoRemark(tag) {

    let remark;
    let targetInput = document.getElementById("reject_reason"); //ORIGINAL ID: reject_reason // FOR TESTING ID: addRemarkInput

    switch (tag) {
        case "SEXUAL WELLNESS PRODUCTS":
            remark = "Sexual wellness product without human figure"
            break;
        case "BASIC SEX TOYS":
            remark = "Sex toy without human figure"
            break;
    }

    // original prototype: HTMLTextAreaElement.prototype
    // for testing: HTMLInputElement

    const nativeSetter = Object.getOwnPropertyDescriptor(
        window.HTMLTextAreaElement.prototype,
        "value"
    ).set;

    nativeSetter.call(
        targetInput,
        targetInput.value + `${remark}\n`
    );

    targetInput.dispatchEvent(new Event("input", { bubbles: true }));


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






