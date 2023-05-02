//main.js file is set as comment in html... Change it.
Webcam.set({
    width:355,
    height:265,
    image_format: 'png',
    png_quality: 90,
});

camera = document.getElementById("camera");

Webcam.attach('#camera');
document.getElementById("camera").style.border = "none";