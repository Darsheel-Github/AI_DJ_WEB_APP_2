peter_pan_song = "";
Harry_Potter_Theme_song = "";

function setup() {
    canvas = createCanvas(500,400);
    canvas.position(460,170);

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0 ,600, 530)
}

function preload() {
    peter_pan_song = loadSound("music2.mp3");
    Harry_Potter_Theme_song = loadSound("music.mp3");
}