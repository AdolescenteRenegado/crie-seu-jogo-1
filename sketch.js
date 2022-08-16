
var forest;
var forestImg;
var kamui;
var obito;
var obitoRunning;
var pedra;
var pedraImg;
var preda2;
var preda2Img;

function preload(){
 forestImg = loadImage("newforest.png");
 pedraImg = loadImage("Pedra q esmagou o obito.png");
 preda2Img = loadImage("pedra.png");
 obitoRunning = loadImage("tobi.gif");
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  forest = createSprite(width/2,height/2);
  forest.addImage(forestImg);
  forest.x = forest.width/2;

  pedra = createSprite(width,height-150);
  pedra.addImage(pedraImg);
  pedra.scale=(0.2);

  preda2 = createSprite(width+1000,height-150);
  preda2.addImage(preda2Img);
  preda2.scale=(0.8);


  obito = createSprite(200,650);
  obito.addImage("run",obitoRunning);
  obito.scale=(5);
  rectMode(CENTER);
  ellipseMode(RADIUS);

  
}

function draw(){
  background(51);
  forest.velocityX = -5;
  if (forest.x<0) {
  forest.x = forest.width/2 }

  pedra.velocityX = -5;
  if (pedra.x<0) {
  pedra.x = width }

  preda2.velocityX = -5;
  if (preda2.x<0) {
  preda2.x = width }

  drawSprites();
}