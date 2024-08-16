document.addEventListener("DOMContentLoaded", () => {
    const animatedText = document.getElementById('animated-text');
    const texts = [ "I'm a  Data Science Enthusiast"];
    let index = 0;
    
    function animateText() {
     
        animatedText.textContent = texts[index];
        
        
        index = (index + 1) % texts.length;
        
       
        animatedText.classList.remove('anim-typewriter-end');
        void animatedText.offsetWidth; 
        animatedText.classList.add('anim-typewriter');
        
        setTimeout(() => {
            animatedText.classList.remove('anim-typewriter');
            animatedText.classList.add('anim-typewriter-end');
        }, 8000); 
        
     
        setTimeout(() => {
            animatedText.classList.remove('anim-typewriter-end');
            animatedText.classList.add('anim-typewriter');
        
        
            setTimeout(() => {
                animatedText.classList.remove('anim-typewriter');
                animatedText.classList.add('anim-typewriter-end');
            }, 8000); 
        }, 10); 

        setTimeout(animateText, 10000); 
    }

    animateText();
});
