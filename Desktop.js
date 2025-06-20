// window.onload = function() {
//             const middleCard = document.getElementById("middleCard");
//             middleCard.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
//         };


// const videos = ["video/video1_about result.mp4", "video/video2_adout result.mp4"]; // Суреттер тізімі
// let current = 0;

// function showSlide(index) {
//   const video = document.getElementById("slide-video");
//   video.src = videos[index];
// }

// function nextSlide() {
//   current = (current + 1) % videos.length;
//   showSlide(current);
// }

// function prevSlide() {
//   current = (current - 1 + videos.length) % videos.length;
//   showSlide(current);
// }


const teachers = ["first_teacher.png","second_teacher.png" ]; // Суреттер тізімі
let current1 = 0;

function showSlide1(index) {
  const video = document.getElementById("slide-card");
  video.src = teachers[index];
}

function nextSlide1() {
  current1 = (current1 + 1) % teachers.length;
  showSlide1(current1);
}

function prevSlide1() {
  current1 = (current1 - 1 + teachers.length) % teachers.length;
  showSlide1(current1);
}

var menu = document.querySelector('#menu-bar');
var navbar = document.querySelector('.menu');

menu.onclick = ()=>{  
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}