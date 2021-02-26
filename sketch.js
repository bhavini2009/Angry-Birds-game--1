
var rect1 ;
var rect2 ;
var rect3 ;
var rect4 ;


function setup() {
  createCanvas(400,400);
  rect3=createSprite(300, 200, 50, 50);
  rect1 = createSprite(100,100,50,60);
  rect2 =createSprite(150,200,70,80);
  rect4=createSprite(50,200,50,50);
  rect3.velocityX=-1;
  rect4.velocityX=+1;
  rect4.shapeColor="orange";
  rect3.shapeColor="red";
}

function draw() {
  background("blue");  
  rect2.x=mouseX;
  rect2.y=mouseY;
  textSize(25);
  text(rect1.x-rect2.x,200,200); 
  text(rect1.width/2+rect2.width/2,200,300); 
  if (rect1.x-rect2.x< rect1.width/2+rect2.width/2&&rect2.x-rect1.x<rect1.width/2+rect2.width/2&&
    rect1.y-rect2.y< rect1.height/2+rect2.height/2&&rect2.y-rect1.y<rect1.height/2+rect2.height/2){
    rect1.shapeColor="purple";
    rect2.shapeColor="purple";
  }
  else{rect1.shapeColor="pink";
  rect2.shapeColor="green"}
  if(rect3.x-rect4.x< rect3.width/2+rect4.width/2&&rect4.x-rect3.x<rect3.width/2+rect4.width/2){
    rect3.velocityX=rect3.velocityX*(-1)
    rect4.velocityX=rect4.velocityX*(-1)
  }
  drawSprites();
}