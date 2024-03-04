var clickableElements = document.querySelectorAll('.selectborderedbox');
clickableElements.forEach(function(element) {
    element.addEventListener('click', function() {
        this.classList.toggle('selectedbox');
    });
});

