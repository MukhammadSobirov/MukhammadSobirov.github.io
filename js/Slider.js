const images = [
    "../img/houses.jpg",
    "../img/boat.jpg",
    "../img/cibali.jpg",
    "../img/halic.jpg",
    "../img/mosque.jpg",
    "../img/sea.jpg",
    "../img/ship.jpg",
    "../img/view.jpg"
];
let slideBackground = document.getElementById("slideshow");

let i = 0;
setInterval(() => {
  slideBackground.style.backgroundImage = `url(${images[i]})`;
  i++;
  if (i == images.length) {
    i = 0;
  }
}, 5000);
