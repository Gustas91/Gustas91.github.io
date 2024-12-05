window.onscroll = function () {
    showBackToTopButton();
};

function showBackToTopButton() {
    const button = document.getElementById("backToTop");

    
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "block";  
    } else {
        button.style.display = "none";  
    }
}

document.getElementById("backToTop").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });  
});