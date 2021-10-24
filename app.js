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

    const poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);
}

function modelLoaded(){
    console.log('Model Loaded and posenet is initialized')
}

function gotposes(results){
    if(results == "") {
        console.log('results not found');
    }
    else {
        console.log(results);
        // console.log('The x axis for mouth is -:' + results[0].pose.)
    }
}

function draw(){
    image(video, 0, 0, 700, 350);
}

function take_selfie_now () {
    save('edited.png')
}