
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var wall;
var wall1;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options = {
	restitution:0.3,
	dencity:1.2,
	friction:0
}
	ball = Matter.Bodies.circle(300, 20, 20) 
    World.add(world,ball);
	Engine.run(engine);
 var ground_options = {
	 isStatic:true
 }
 ground = Matter.Bodies.rectangle(800,670,1600,20,ground_options)
 World.add(world,ground);
 wall = Matter.Bodies.rectangle(1100,600,20,120,ground_options)
 World.add(world,wall);
 wall1 = Matter.Bodies.rectangle(1350,600,20,120,ground_options)
 World.add(world,wall1);

 
}

	
 function keyPressed(){
	 if(keyCode === UP_ARROW){Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})}
 }   


function draw() {
	background("black");
  rectMode(CENTER);	
  ellipse(ball.position.x,ball.position.y,20);	
  rect(ground.position.x,ground.position.y,1600,20);
  rect(wall.position.x,wall.position.y,20,120);
  rect(wall1.position.x,wall1.position.y,20,120);

  drawSprites();
  
}



