// window.onload = function() {
//             const middleCard = document.getElementById("middleCard");
//             middleCard.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
//         };


const videos = ["video/video1_about result.mp4", "video/video2_adout result.mp4"]; // Суреттер тізімі
let current = 0;

function showSlide(index) {
  const video = document.getElementById("slide-video");
  video.src = videos[index];
}

function nextSlide() {
  current = (current + 1) % videos.length;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + videos.length) % videos.length;
  showSlide(current);
}
