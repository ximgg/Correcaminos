var correcaminos, correcaminos_running;
var ground;
var coyote, coyote_running;

function preload(){
  correcaminos_running = loadAnimation("correcaminos.png","2.png","correcaminos3.png");
  ground = loadImage("Fondo_des.jpg");
  coyote_running = loadAnimation("coyote 1.png","coyote 2.png");
}

function setup(){
createCanvas(1600,800);


correcaminos = createSprite(100,400,10,10);
correcaminos.addAnimation("running",correcaminos_running);

coyote = createSprite(600,400,10,10);
coyote.addAnimation("running",coyote_running);
}

function draw(){
  background(ground);

  drawSprites();
}

