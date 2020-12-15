
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinObj, paperObj, groundObj;
var world;


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObj = new Paper(200, 450, 70);
	groundObj = new Ground(width/2, 670, width, 20);
	dustbinObj = new Dustbin(1200, 650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  paperObj.display();
  dustbinObj.display();
  groundObj.display();

  drawSprites();
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paperObj.body, paperObj.body.position, {x:130, y:-145});
	}
}