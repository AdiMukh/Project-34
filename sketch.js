const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var pendulum, ball;

function setup() {
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    pendulum = new Pendulum(ball.body, {x:500, y:50});
    ball = new Ball(300, 300, 70, 70);
}

function draw() {
    background(180);
    Engine.update(engine);

    pendulum.display();
    ball.display();

}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}