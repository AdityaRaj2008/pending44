var bg, rocket, rkt;

function preload(){
  bg = loadImage("bgr.png");
  rocket = loadImage("spaceCraft.png");
}


function setup() {
  createCanvas(400,600);

  rkt = createSprite(200, 500);
  rkt.addImage(rocket);
  rkt.scale = 0.3;

  
}

function draw() {
  background(bg);  

  if(keyDown = "RIGHT_ARROW"){
    rkt.velocityX = +1;
    rkt.velocityY = 0;
  }

  
  
  drawSprites();
}