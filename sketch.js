
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var object;
var stone;
var sand,sand4;
var sand2,sand3;
var sand5,sand6;
var sand7,sand8;
var ground;
var iron;

function preload(){

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//bodies

	object=new Hammer(400,380)
	stone=new Stone(400,380,50,50)
	ground=new Ground(400,600,800 ,20)
	rubber=new Rubber(320,380)
	sand=new Sand(400,350)
	sand2=new Sand(400,350)
	sand3=new Sand(300,350)
	sand4=new Sand(360,350)
	sand5=new Sand(360,320)
	sand6=new Sand(420,350)
	sand7=new Sand(420,350)
	sand8=new Sand(480,350)
	iron=new Iron(310,350,40,50)


	Engine.run(engine);
  
}


function draw() {
  background("purple");
 
  Engine.update(engine)
  
  object.display();
  ground.display();
  stone.display();
  rubber.display();
  iron.display();

  sand.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();

  drawSprites();
 
}



