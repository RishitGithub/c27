
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;

var roof1;

var rope1, rope2, rope3,rope4,rope5;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    
	bob1 =new Bob(340,400);	
	bob2 = new Bob(420,400);	
	bob3 = new Bob(500,400);
	bob4 = new Bob(580,400);
	bob5 = new Bob(660,400);

	roof1 = new Roof(500,100,450,40);

	rope1 = new Rope(roof1.body, bob1.body, -160, 0)
  rope2 = new Rope(roof1.body, bob2.body, -80,0)
  rope3 = new Rope(roof1.body, bob3.body,0,0)
  rope4 = new Rope(roof1.body, bob4.body,80,0)
  rope5 = new Rope(roof1.body, bob5.body,160,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("gray");

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof1.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}

function keyPressed (){
  if (keyCode===UP_ARROW){
  Body.applyForce(bob1.body,bob1.body.position, {x:-150 , y: -150} )
  
  }
  
  
  if (keyCode ===DOWN_ARROW){
    Body.applyForce(bob5.body,bob5.body.position, {x:150 , y: -150} )
  }
  }
  

