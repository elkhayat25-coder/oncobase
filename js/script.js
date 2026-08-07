const slides = document.querySelectorAll(".slide");

if (slides.length > 0) {

    let currentSlide = 0;

    function autoSlide() {

        slides[currentSlide].classList.remove("active");

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        slides[currentSlide].classList.add("active");
    }

    setInterval(autoSlide, 2000);
}



// 

window.addEventListener("load", () => {

    document.querySelectorAll(".drug-card img").forEach((img) => {

        if (!img.complete || img.naturalWidth === 0) {

            const placeholder = document.createElement("div");
            placeholder.className = "coming-soon-placeholder";
            placeholder.innerHTML = "COMING<br>SOON";

            img.replaceWith(placeholder);
        }

        img.onerror = function () {

            const placeholder = document.createElement("div");
            placeholder.className = "coming-soon-placeholder";
            placeholder.innerHTML = "COMING<br>SOON";

            this.replaceWith(placeholder);
        };

    });

});