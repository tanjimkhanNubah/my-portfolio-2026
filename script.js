document.addEventListener("DOMContentLoaded", function () {
    
    
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

   
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            
            if (targetId.startsWith("#")) {
                e.preventDefault(); 
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});