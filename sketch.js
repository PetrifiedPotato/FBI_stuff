var speed, weight;
var car;
var wall;
var width;

function setup() {
  createCanvas(1500,400);
 
  speed=random(223,321)
  weight=random(30,52)
  width=random(22,83)
  car=createSprite(50,200,70,40)
  wall=createSprite(1000,200,width,height/2)
  car.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  drawSprites();
  
if(hitWall(car,wall)){
  if(wall.x-car.x<(car.width+wall.width)/2){

    car.velocityX = 0;
    var deformation=0.5*weight*speed*speed/width*width*width
    if(deformation>=180){

      car.shapeColor=color(255,0,0);
    }
    if(deformation<3.68 && deformation>=12.42){

      car.shapeColor=color(230,0,0);
    }
    

  }
}
  
}


function hitWall(rcat,lwall){
carRightEdge=lcar.x +lcar.width;
wallLeftEdge=Lwall.x;
if(carRightEdge>=wallLeftEdge){
  return true
}
return false;
}
