const Bodies = Matter.Bodies;
const Engine = Matter.Engine
const World = Matter.World;
const Constraint = Matter.Constraint;

var engine,ground,bac;

function preload(){

    bac=loadImage("bac10.png")


}

function setup(){
    var canvas = createCanvas(1800,600)
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(1500,595,3000,20)
   /// box1 = new Box(900,100,70,70)
  //  box2 = new Box(900,100,70,70)
    box3 = new Box(200,100,70,70)
    box4 = new Box(200,100,70,70)
    box5 = new Box(200,100,70,70)
    box6 = new Box(400,100,70,70)
    box7 = new Box(400,100,70,70)
    box9 = new Box(400,100,70,70)
    box8 = new Box(1000,100,70,70)
    box10 = new Box(1000,100,70,70)
    box11 = new Box(1000,100,70,70)  
    box12 = new Box(1000,100,70,70)
    box13 = new Box(700,100,70,70)
    box14 = new Box(700,100,70,70)
    box15 = new Box(700,100,70,70)
    box16 = new Box(700,100,70,70)
    box17 = new Box(700,100,70,70)
    box18 = new Box(700,100,70,70)
    box19 = new Box(700,100,70,70)
    box20 = new Box(700,100,70,70)


    //ball
    fox = new Fox(1500,400,80,80)


    rope = new Rope(fox.body,{x:1500,y:400})

}

function draw(){
    background(bac);
    Engine.update(engine);

    ground.display();
   // box1.display();
   // box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();

    rope.display();


    fox.display();

}


function mouseReleased(){
    rope.fly();
}

function keyPressed(){
    if(keyCode === 32){
        rope.attach(fox.body);
    }
}
function mouseDragged(){
    
        Matter.Body.setPosition(fox.body, {x: mouseX , y: mouseY});
    
}
