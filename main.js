video = "";

function info(){
    document.getElementById("info").innerHTML = "Essentially, the AI takes a snapshot of a moment. Then, the AI compares that image to its database, which can have billions of photos, and names any object that matches up well with something in the database."
}

function preload(){
    video = createVideo('video.mp4');
    video.hide();
}

function setup(){
    canvas = createCanvas(400, 380);
    canvas.center();
}

function draw(){
    image(video, 0, 0, 400, 380);
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function modelLoaded(){
    console.log('Model successfully loaded!');
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}