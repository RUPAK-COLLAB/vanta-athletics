// APEX FITNESS — INTERACTIONS

document.addEventListener("DOMContentLoaded", () => {

    // Smooth navigation
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", function (event) {
            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                event.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Reveal animations
    const revealElements = document.querySelectorAll(
        ".section-heading, .program-card, .about-image, .about-content, .trainer-card, .cta-inner"
    );

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12
    });

    revealElements.forEach(element => {
        element.classList.add("reveal");
        observer.observe(element);
    });

    // Current year
    const footer = document.querySelector("footer p");

    if (footer) {
        footer.innerHTML = footer.innerHTML.replace(
            "2026",
            new Date().getFullYear()
        );
    }

});