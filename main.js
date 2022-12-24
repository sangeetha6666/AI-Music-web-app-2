BTS_song="";
Blackpink_song="";

function setup(){
    canvas = createCanvas(600,300);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
    BTS_song = loadSound("music.mp3");
    Blackpink_song = loadSound("music2.mp3");
}

function draw(){
    image(video,0,0,600,530);
}
