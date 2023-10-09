document.addEventListener("DOMContentLoaded", function(event) {
    // Add smooth scrolling to all anchor links
    const scrollLinks = document.querySelectorAll('.nav-link a');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
