var clickableElements = document.querySelectorAll('.selectborderedbox');
clickableElements.forEach(function(element) {
    element.addEventListener('click', function() {
        this.classList.toggle('selectedbox');
    });
});


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("slidedot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" beactive", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " beactive";
}