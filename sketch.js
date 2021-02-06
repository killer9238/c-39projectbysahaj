var bg,bgimage;
var meteriod,meteriodimage,meteriodGroup;
var spacecraft,spacecraftimage;
var missile,missileimage,missileGroup;
var destroyed;
var sahaj=0;

function preload(){
  bgimage = loadImage("galaxy 5.jpg");
  spacecraftimage = loadImage("spacecraft.png");
  meteriodimage = loadImage("miti3.png");
  missileimage = loadImage("missii.png");
}

function setup() {
 createCanvas(600,600);
 bg = createSprite(0,0,600,600);
 bg.addImage(bgimage);
 bg.sclae=0.5;
 bg.velocityX=-4;
  
 spacecraft = createSprite(70,300,20,20);
 spacecraft.addImage(spacecraftimage);
 spacecraft.scale=0.4;
 meteriodGroup=createGroup();
 missileGroup=createGroup();
 destroyed=0;
 
}
function draw() {
  background("white");
  if (bg.x < 0){
      bg.x = bg.width/2;
    }
  if(keyDown("space")){
    missile = createSprite(300,300,50,50);
    missile.x=spacecraft.x;
    missile.y=spacecraft.y;
    missile.addImage(missileimage);
    missile.scale=0.1;
    missile.velocityX=4;
    missile.lifetime=100;
    missileGroup.add(missile);
  }
  if(missileGroup.isTouching(meteriodGroup)){
    meteriodGroup.destroyEach();
    missileGroup.destroyEach();
    destroyed=destroyed+1;
  }
  
  if(meteriodGroup.isTouching(spacecraft)){
    console.log("hi")
    meteriodGroup.destroyEach()
    missileGroup.destroyEach()
    spacecraft.destroy()
    
    sahaj=1
  }

  spacecraft.y=mouseY;
  spacecraft.x=mouseX;
  
  meteriods();
  
  drawSprites();
  if(sahaj===1){  
    fill("white")
    textSize(20)
    text("Spacecraft has been Destroyed",300,300)
    text("Game Over",300,400)
    meteriodGroup.setVelocityXEach(0)
  }

  fill("black");
  textSize(20);
  text("Destroyed:"+destroyed,100,50);
}
function meteriods(){
  if(frameCount%60===0){
    meteriod = createSprite(700,300,20,20);
    meteriod.addImage(meteriodimage);
    meteriod.y=Math.round(random(100,300))
    meteriod.scale=0.3;
    meteriod.velocityX=-6;
    meteriodGroup.add(meteriod);
  }
}