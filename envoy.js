function here() {
  window.location.href = "index.html";
}

function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("img").src = images[x];
}

function displayPreviousImage() {
    x = (x <= 0) ? images.length - 1 : x - 1;
    document.getElementById("img").src = images[x];
}

function startTimer() {
    setInterval(displayNextImage, 10000);
}

function changeBanner(id) {
  if(id == "banner1") {
    document.getElementById("img").src = images[0];
  }
  if(id == "banner2") {
    document.getElementById("img").src = images[1];
  }
  if(id == "banner3") {
    document.getElementById("img").src = images[2];
  }
  if(id == "banner4") {
    document.getElementById("img").src = images[3];
  }
}

var images = [], x = -1;
images[0] = "images/djangounchained.png";
images[1] = "images/vizio.png";
images[2] = "images/escape3.png";
images[3] = "images/ultra.png";
