document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    let currentSectionIndex = 0;
    console.log(sections);
    document.addEventListener('wheel', (e) => {
        
        if (e.deltaY > 0) {
            // Scroll down
            if (currentSectionIndex < sections.length - 1) {
                currentSectionIndex++;
                sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        } else {
            // Scroll up
            if (currentSectionIndex > 0) {
                currentSectionIndex--;
                sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    });
});