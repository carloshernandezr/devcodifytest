
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


var slideIndex = 0;
showSlidesT();

function showSlidesT() {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";


  dots[slideIndex - 1].className += " active";

  // var myDiv = document.getElementById("div1");
  //  myDiv.className = myDiv.className.replace(/\bbg1\b/g,"bg"+ );

  setTimeout(showSlidesT, 14000); // Change image every 2 seconds
}

// changeImage();

//mi funcoin  oara chsange e bacgrin
// function changeImage() {

//   var res2 = "";
//   var myDiv = document.getElementById("div1");
//   var hasClase2 = myDiv.classList.value;
//   var res = hasClase2.split(" ");


//   if (res[1] == "bg1") {
//     res2 = "bg2"
//   }

//   if (res[1] == "bg2") {
//     res2 = "bg3"
//   }

//   if (res[1] == "bg3") {
//     res2 = "bg1"
//   }

//   console.log(res[1]
//   )

//   // /\bbg1\b/g
//   myDiv.className = myDiv.className.replace(res[1], res2);

//   setTimeout(changeImage, 4000);
// }
// // /