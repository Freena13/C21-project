var ball;
var radius = 40;
var world;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	var ball_options = 
	{
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	ball = Bodies.circle(20,100,radius/2,ball_options)
	World.add(world,ball);

	ground = new Ground(400,770,800,20);
	leftSide = new Ground(570,710,20,100);
	rightSide = new Ground(700,710,20,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,radius,radius)
 
  ground.display();
  leftSide.display();
  rightSide.display();
  
  drawSprites();
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(ball,ball.position,{x:65,y:-65});
	}
}



