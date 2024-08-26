
//control the height of nav bar
window.onscroll = function() {
  shrinkNavbar();
};

function shrinkNavbar() {
  let navbar = document.querySelector(".topnav");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.classList.add("shrink");
  } else {
    navbar.classList.remove("shrink");
  }
}


//resbonaible nav bar
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


//slid show

let slideIndex = 1;
showSlides(slideIndex);

// تحريك الشرائح تلقائيًا كل 4 ثواني
let slideInterval = setInterval(function() {
  changeOrder(1);
}, 5000); 

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }    
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// Function to change the order of slides and show the new order
function changeOrder(direction) {
    let slidesContainer = document.querySelector('.slideshow-container'); 
    let slides = Array.from(slidesContainer.getElementsByClassName("mySlides"));

    if (direction === 1) { // Next button or auto change
        slidesContainer.appendChild(slides[0]); // Move the first slide to the end
    } else if (direction === -1) { // Prev button
        slidesContainer.insertBefore(slides[slides.length - 1], slides[0]); // Move the last slide to the start
    }
    // Reset the slideIndex to show the first slide after reordering
    slideIndex = 1;
    showSlides(slideIndex);
}




// section 3
 // لعرض جميع العناصر عند تحميل الموقع
 document.addEventListener('DOMContentLoaded', function() {
  filterSelection('all'); 
});
document.querySelector("button").addEventListener("click", function(event) {
  filterSelection('all', event);
});
function filterSelection(category,event) {
    var columns = document.getElementsByClassName("column");
    if (category == 'all') category = '';
    for (var i = 0; i < columns.length; i++) {
        columns[i].classList.remove("show");
        if (columns[i].className.indexOf(category) > -1) {
            columns[i].classList.add("show");
        }
      }
      
    // Highlight the current filter button
    var btns = document.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
        btns[i].classList.remove("active");
    }
     // Example usage of currentTarget if needed
  if (event) {
    event.currentTarget.classList.add("active");
  }
}



// section 4
function showNationalTours() {
  document.getElementById("national-tours").style.display = "flex";
  document.getElementById("international-tours").style.display = "none";
  
  // تغيير نمط الأزرار
  document.querySelector(".filter-buttons .btn.active").classList.remove("active");
  document.querySelectorAll(".filter-buttons .btn")[0].classList.add("active");
}

function showInternationalTours() {
  document.getElementById("national-tours").style.display = "none";
  document.getElementById("international-tours").style.display = "flex";
  
  // تغيير نمط الأزرار
  document.querySelector(".filter-buttons .btn.active").classList.remove("active");
  document.querySelectorAll(".filter-buttons .btn")[1].classList.add("active");
}

 // section5

 const carouselInner = document.getElementById('carousel-inner');
 const packages = document.querySelectorAll('.package');
 let index = 0;
 
 function updateCarousel() {
     const offset = -index * 390; // Adjust offset based on package width
     carouselInner.style.transform = `translateX(${offset}px)`;
 }
 
 document.getElementById('prev-Packages').addEventListener('click', () => {
     index = (index > 0) ? index - 1 : packages.length - 9;
     updateCarousel();
 });
 
 document.getElementById('next-Packages').addEventListener('click', () => {
     index = (index < packages.length - 9) ? index + 1 : 0;
     updateCarousel();
 });
 
 // Auto slide every 5 seconds
 setInterval(() => {
     index = (index < packages.length - 9) ? index + 1 : 0;
     updateCarousel();
 }, 5000);



 

// section 6
 // لعرض جميع العناصر عند تحميل الموقع
 document.addEventListener('DOMContentLoaded', function() {
  allSelection('all'); 
});
document.querySelector("button").addEventListener("click", function(event) {
  allSelection('all', event);
});
function allSelection(category,event) {
    var columns = document.getElementsByClassName("col");
    if (category == 'all') category = '';
    for (var i = 0; i < columns.length; i++) {
        columns[i].classList.remove("show");
        if (columns[i].className.indexOf(category) > -1) {
            columns[i].classList.add("show");
        }
      }
      
    // Highlight the current filter button
    var btns = document.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
        btns[i].classList.remove("active");
    }
     // Example usage of currentTarget if needed
  if (event) {
    event.currentTarget.classList.add("active");
  }
}

//section10

function subscribeToNewsletter() {
  var emailInput = document.getElementById('newsletter-email');
  var email = emailInput.value.trim();

  if (email !== '') {
    // Implement your newsletter subscription logic here
    console.log('Subscribing to newsletter with email:', email);
    emailInput.value = '';
  } else {
    alert('Please enter your email address.');
  }
}