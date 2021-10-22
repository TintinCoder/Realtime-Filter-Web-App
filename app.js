var video;

function preload() {
    console.log('preload started')
}

function setup(){
    var canvas = createCanvas(700,350);
    canvas.position(355, 200)

    video = createCapture(VIDEO);
    video.size(700, 400);
    video.hide() 
}

function draw(){
    image(video, 0, 0, 700, 350)
}

function take_selfie_now () {
    save('edited.png')
}