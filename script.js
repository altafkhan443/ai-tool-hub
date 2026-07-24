// AI Tool Hub Script

// Search Function
const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {

        let value = this.value.toLowerCase();

        let cards = document.querySelectorAll(".card, .tool-card");

        cards.forEach(card => {

            let text = card.innerText.toLowerCase();

            if (text.includes(value)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior:"smooth"
            });
        }

    });

});

// Navbar Shadow
window.addEventListener("scroll",()=>{

const nav=document.querySelector(".navbar");

if(nav){

if(window.scrollY>30){

nav.style.boxShadow="0 0 20px rgba(0,212,255,.25)";

}else{

nav.style.boxShadow="none";

}

}

});
