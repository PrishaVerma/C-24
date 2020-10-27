
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(600,590,1200,20);
	paperBall=new Paper(200,500,30);
	dustbin1 = new Dustbin(1000,570,190,20,PI);
	dustbin2 = new Dustbin(1085,510,20,100,PI/2);
	dustbin3 = new Dustbin(915,510,20,100,PI/2);
	
	Engine.run(engine);
  
}


function draw() {
 // rectMode(CENTER);
  background(0);
  ground.display();
  paperBall.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
 // drawSprites();
 
}
function keyPressed(){
	if( keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:175,y:-175});
	}
}



