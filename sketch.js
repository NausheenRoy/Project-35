var balloon;
var airBalloon;
var database;
var backgroundimg

function preload(){
 airBalloon = loadImage("images/balloon.png")
 backgroundimg = loadImage("images/unnamed.jpg");

}

function setup(){
  createCanvas(800,500);
background(backgroundimg)
  var balloon = createSprite(200,200,10,10)
  balloon.addImage("balloon",airBalloon);
  //database = firebase.database();

}

function draw(){
  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x -10
  }else if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x +10
  }else if(keyDown(UP_ARROW)){
    balloon.y = balloon.y -10
  }else if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y +10
  }
  
  drawSprites();
  
}


