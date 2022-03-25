img = "";
noseX = 0;
noseY = 0;
marioX = 325;
marioY = 325;
GameStatus= "";

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	video =  createCapture(VIDEO);
  video.size(800,400);
  
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
	
	instializeInSetup(mario);

	
	video.parent('game_console');

	poseNet =  ml5.poseNet(video, modelLoaded);
}

function modelLoaded() {
	console.log('Model Loaded!');
	}
	
	function gotPoses(results) {
	if(results.length > 0)
	  {
	  noseX =  results[0].pose.nose.x;
	  noseY =  results[0].pose.nose.y;
		console.log("noseX = " + noseX , "noseY = " + noseY);
	  }
	}
	
	
	

function draw() {
	game()
	background("#D3D3D3");
	  if(noseX < 300)
		{
		marioX = marioX - 1;
		
		  if(noseX > 300)
			marioX = marioX + 1;
		  
		  if(noseY < 150)
			{
			marioY = marioY - 1;
			}
		}
	  image(img,marioX, marioY, 40,70);
}

function gotResults() {
if(results.length > 0);
{
console.log(results);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
}
}

function game() {
console.log("noseX = " + noseX +", noseY  = " + noseY);

initializeInDraw();
moveEnvironment(mario);
drawSprites();
}


function startGame() {
GameStatus = "start";
document.getElementById("status").innerHTML = "Game Is Loading";
}

