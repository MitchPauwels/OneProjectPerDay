let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

//Navbar transparant during scroll
window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    this.document.querySelector("#navbar").style.opacity = 0.9;
  } else {
    this.document.querySelector("#navbar").style.opacity = 1;
  }
});
