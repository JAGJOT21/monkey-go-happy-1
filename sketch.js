
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600)
  monkey=createSprite(50,500,0,0)
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.2

  ground = createSprite(300,580,1500,20);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  
  obstacleGroup = new Group()
  FoodGroup = new Group()

  
   

  
}


function draw() {
background("white")
  if (ground.x < 0){
    ground.x = 600
    
  
  
  }
  
  score=Math.round(frameCount/frameRate())
  
  text("score" + score,500,50)
  monkey.collide(ground)
  if(keyDown("space")) {
    monkey.velocityY = -10;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  spawnbanana();
  spawnobstacle()
  
  drawSprites();
  
}

function spawnbanana() {
  //write code here to spawn the clouds
  if (World.frameCount % 60 === 0) {
    var banana = createSprite(500,150,40,10);
    banana.y = random(100,400);
    banana.addImage(bananaImage)
  
    
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 160;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    FoodGroup.add(banana)
    
  }}

function spawnobstacle() {
  //write code here to spawn the clouds
  if (World.frameCount % 120 === 0) {
    var obstacle = createSprite(500,530,40,10);
    
    obstacle.addImage(obstaceImage)
  
    
    obstacle.scale = 0.3;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 160;
    
    obstacleGroup.add(obstacle)
    
  }}



