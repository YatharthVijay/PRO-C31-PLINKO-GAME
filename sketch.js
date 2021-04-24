const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];

var divisionHeight = 300;
var score = 0;

function setup()
{
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2, height, width, 20);

  for (var k = 0; k <= width; k = k + 80)
  {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var i = 75; i <= width; i = i + 50) 
  {  
    plinkos.push(new Plinko(i, 75));
  }

  for (var j = 50; j <= width-10; j = j + 50) 
  {  
    plinkos.push(new Plinko(j, 175));
  }

  for (var l = 75; l <= width; l = l + 50) 
  {  
    plinkos.push(new Plinko(l, 275));
  }

  for (var m = 50; m <= width-10; m = m + 50) 
  {  
    plinkos.push(new Plinko(m, 375));
  }
}

function draw()
{
  background("black");
  textSize(20);

  Engine.update(engine);

  ground.display();
  
  for (var i = 0; i < plinkos.length; i++)
  {
    plinkos[i].display();
  }
  
  if(frameCount % 60 === 0)
  {
    particles.push(new Particle(random(width/2-30, width/2+30), 10, 10));
    score++;
  }
 
  for (var j = 0; j < particles.length; j++)
  {
    particles[j].display();
  }
  
  for (var k = 0; k < divisions.length; k++)
  {
    divisions[k].display();
  }
}