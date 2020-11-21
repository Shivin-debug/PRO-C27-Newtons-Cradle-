const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof;
var bob1, bob2, bob3, bob4, bob5;
var chain1, chain2, chain3, chain4, chain5;

function setup() {
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;

  roof = new Roof(400, 30, 400, 20);

  bob1 = new Bob(400, 230, 30);
  bob2 = new Bob(340, 230, 30);
  bob3 = new Bob(280, 230, 30);
  bob4 = new Bob(460, 230, 30);
  bob5 = new Bob(520, 230, 30);

  chain1 = new Chain(roof.body, bob1.bob, 0);
  chain2 = new Chain(roof.body, bob2.bob, -60);
  chain3 = new Chain(roof.body, bob3.bob, -120);
  chain4 = new Chain(roof.body, bob4.bob, 60);
  chain5 = new Chain(roof.body, bob5.bob, 120);

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("purple");

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  chain1.display();     
  chain2.display();
  chain3.display();
  chain4.display(); 
  chain5.display();            
  
  drawSprites();
  keyPressed();
}

function keyPressed(){
  if (keyCode === UP_ARROW){
	  Body.applyForce(bob5.bob, bob5.bob.position, {x:85, y:-85});
  }
}


