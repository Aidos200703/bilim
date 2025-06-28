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




const comments = document.querySelectorAll('.comment');
const leftBtn = document.querySelector('.btn_comment_left');
const rightBtn = document.querySelector('.btn_comment_right');
let current2 = 0;

function showComments(index) {
  comments.forEach((comment, i) => {
    comment.style.display = (i === index) ? 'flex' : 'none';
  });
}

// Алғашқы пікірді көрсету
showComments(current2);

leftBtn.onclick = () => {
  current2 = (current2 - 1 + comments.length) % comments.length;
  showComments(current2);
};

rightBtn.onclick = () => {
  current2 = (current2 + 1) % comments.length;
  showComments(current2);
};





const comments1 = document.querySelectorAll('.card-teachers');
const leftBtn1 = document.querySelector('.left-btn');
const rightBtn1 = document.querySelector('.btn_right');
let current3 = 0;

function showComments(index) {
  comments.forEach((comment, i) => {
    comment.style.display = (i === index) ? 'block' : 'none';
  });
}

// Алғашқы пікірді көрсету
showComments(current3);

leftBtn1.onclick = () => {
  current3 = (current3 - 1 + comments1.length) % comments1.length;
  showComments(current3);
};

rightBtn1.onclick = () => {
  current3 = (current3 + 1) % comments1.length;
  showComments(current3);
};