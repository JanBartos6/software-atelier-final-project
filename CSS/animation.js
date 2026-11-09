let images = document.querySelectorAll(".js");

images.forEach(img => { 
    img.addEventListener("click", () => {
        if (img.classList.contains("boxDisappear")) {
             images.forEach(element => {
                element.classList.add("boxDisappear");
            });
            img.classList.remove("boxDisappear");
        } else {
               img.classList.add("boxDisappear")
        }
    });
});