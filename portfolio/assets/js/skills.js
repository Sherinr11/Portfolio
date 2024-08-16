document.addEventListener('DOMContentLoaded', function () {
    const progressElements = document.querySelectorAll('.progress');
    const threshold = 100; 
    function animateProgress() {
        progressElements.forEach(progress => {
            const skillPercentage = progress.getAttribute('data-skill') + '%';
            progress.style.width = skillPercentage;
        });
    }

    function resetProgress() {
        progressElements.forEach(progress => {
            progress.style.width = '0%'; 
        });
    }

    function isElementInViewport(el, offset = 0) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top < (window.innerHeight || document.documentElement.clientHeight) + offset &&
            rect.bottom > 0
        );
    }

    function checkScroll() {
        const skillsSection = document.getElementById('skills');
        if (isElementInViewport(skillsSection, threshold)) {
            animateProgress();
        } else {
            resetProgress();
        }
    }

    window.addEventListener('scroll', checkScroll);

    checkScroll();
});
