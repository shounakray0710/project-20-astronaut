var bg;
var gym;
var brush;
var eat;
var sleep;
var bath
var move;
var astronaut;

function preload(){
bgimg = loadImage("iss.png");
gym = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
brush = loadAnimation("brush.png");
sleep = loadAnimation("sleep.png");
eat = loadAnimation("eat1.png","eat2.png");
bath = loadAnimation("bath1.png","bath2.png");
move = loadAnimation("move.png","move1.png");
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  bg = createSprite(800,400);
 bg.addImage("background",bgimg);

  astronaut = createSprite(300,200);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;
}

function draw() {
  background(255,255,255); 

  edges= createEdgeSprites();

  if(keyDown(LEFT_ARROW)){
astronaut.addAnimation("bathing",bath)
astronaut.changeAnimation("bathing",bath);
  astronaut.y = 350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
  }
else if(keyDown(RIGHT_ARROW)){
  astronaut.addAnimation("eating",eat)
  astronaut.changeAnimation("eating",eat);
  astronaut.y = 350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
}
else if(keyDown(UP_ARROW)){
  astronaut.addAnimation("brushing",brush);
  astronaut.changeAnimation("brushing",brush);
  astronaut.y = 350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
}
else if(keyDown(DOWN_ARROW)){
  astronaut.addAnimation("gyming",gym)
  astronaut.changeAnimation("gyming",gym);
  astronaut.y = 350;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
}
else if(keyDown("m")){
  astronaut.addAnimation("moving",move)
  astronaut.changeAnimation("moving",move);
  astronaut.y = 350;
  astronaut.velocityX=1;
  astronaut.velocityY=1;
}

  drawSprites();
  textSize(20);
  fill("white")
  text("Instructions:",20, 35);
  textSize(15);
  text("Up Arrow = Brushing",20, 55);
  text("Down Arrow = Gymming",20, 70);
  text("Left Arrow = Eating",20, 85);
  text("Right Arrow = Bathing",20, 100);
  text("m key = Moving",20, 115);
}