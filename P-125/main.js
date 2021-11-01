var noseX = 0;
var noseY = 0;
var difference = 0;
var rightWristX = 0;
var leftWristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(500, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('#dde007');
    textSize(difference);
    fill('#19b2e0');
    text('Bhibhavasu', 225, 225);
}

function modelLoaded()
{
    console.log('PoseNet is initiallized!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
    }
}

