6/* we will use 3 objects from Matter.js libraray
- World
- Engine
- Bodies*/
//Namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object, ob1;
var ground;
var ball;

function setup() {
  createCanvas(600,600);

  engine = Engine.create();
  world = engine.world;

  /*var options = {
    isStatic : true
 }*/

  object = Bodies.rectangle(300, 200, 100, 50);
  World.add(world, object);

  ob1 = Bodies.rectangle(350,300,60,70);
  World.add(world, ob1);

  var groundOptions = {
    isStatic : true
  }

  ground = Bodies.rectangle(300,590,600,20, groundOptions);
  World.add(world, ground);

  var ballOptions = {
    restitution : 0.8
  }

  ball = Bodies.circle(200,300,50, ballOptions);
  World.add(world, ball);

  /*console.log(object);
  console.log(object.position.x);
  console.log(object.position.y);*/

  console.log(ball);
}

function draw() {
  background(0); 
  Engine.update(engine);

  var angle = object.angle;
  push();
  rotate(angle);
  fill("red");
  rect(object.position.x,object.position.y,100,50);
  pop();

  push();
  rotate(ob1.angle);
  rect(ob1.position.x, ob1.position.y, 60,70);
  pop();

  rectMode(CENTER);
  fill("white");
  rect(ground.position.x,ground.position.y,600,20);

  ellipseMode(RADIUS);
  fill("red");
  ellipse(ball.position.x,ball.position.y,50,50);
 }