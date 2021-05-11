const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
const constraint = Matter.Constraint;

var Pengine, Pworld
var ground;
// var allBlocks = block1, block2, block3, block4, block5;

function preload(){
  backImg = loadImage('background.jpg');
}

function setup(){

    createCanvas(1500, 1000);

    Pengine = Engine.create() // creating the physics enginne
    Pworld = Pengine.world //creating the physics engine's own world
    
    ground = new groundClass(1500/2, 990, 1500, 20);
    invisground = new invisGroundClass(1700, 150, 500, 50)
    metal_ball = new ballClass(940, 760, 80);

    block1 = new blocksClass(100, 800);
    block2 = new blocksClass(200, 800);
    block3 = new blocksClass(300, 800);
    block4 = new blocksClass(400, 800);
    block5 = new blocksClass(500, 800);
    block6 = new blocksClass(600, 800);
    block7 = new blocksClass(700, 800);
    block8 = new blocksClass(800, 800);

    //second floor
    

    sBlock1 = new blocksClass(150, 705);
    sBlock2 = new blocksClass(250, 705);
    sBlock3 = new blocksClass(350, 705);
    sBlock4 = new blocksClass(450, 705);
    sBlock5 = new blocksClass(550, 705);
    sBlock6 = new blocksClass(650, 705);
    sBlock7 = new blocksClass(750, 705);

    //third floor

    tBlock1 = new blocksClass(200, 610);
    tBlock2 = new blocksClass(300, 610);
    tBlock3 = new blocksClass(300+100, 610);
    tBlock4 = new blocksClass(300+200, 610);
    tBlock5 = new blocksClass(300+300, 610);
    tBlock6 = new blocksClass(300+400, 610);

    //fourth floor

    fBlock1 = new blocksClass(250, 515);
    fBlock2 = new blocksClass(350, 515);
    fBlock3 = new blocksClass(450, 515);
    fBlock4 = new blocksClass(550, 515);
    fBlock5 = new blocksClass(650, 515);

    //fifth floor

    lBlock1 = new blocksClass(300, 420);
    lBlock2 = new blocksClass(400, 420);
    lBlock3 = new blocksClass(500, 420);
    lBlock4 = new blocksClass(600, 420);

    //sixth floor

    mBlock1 = new blocksClass(350, 325);
    mBlock2 = new blocksClass(450, 325);
    mBlock3 = new blocksClass(550, 325);

    //seventh floor

    nBlock1 = new blocksClass(400, 230);
    nBlock2 = new blocksClass(500, 230);

    //last floor

    oBlock1 = new blocksClass(450, 135);
    


    realRope = new Rope(metal_ball.body,{x: 945, y: 150} )
}
function draw(){

    background(242,172,185)
    Engine.update(Pengine)
    ground.display();
   
    realRope.display(); metal_ball.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();

    //second Floor
    sBlock1.display();
    sBlock2.display();
    sBlock3.display();
    sBlock4.display(); 
    sBlock5.display();
    sBlock6.display();
    sBlock7.display();  
    
    //third Floor
    
    tBlock1.display()
    tBlock2.display()
    tBlock3.display()
    tBlock4.display()
    tBlock5.display()
    tBlock6.display()

    // fourth floor

    fBlock1.display();
    fBlock2.display();
    fBlock3.display();
    fBlock4.display();
    fBlock5.display();

    //fifth floor
    lBlock1.display();
    lBlock2.display()
    lBlock3.display()
    lBlock4.display()

    //sixth floor

    mBlock1.display();
    mBlock2.display();
    mBlock3.display();

    //seventh floor

    nBlock1.display();
    nBlock2.display();

    // last floor

    oBlock1.display();

    // console.log(Math   .round(mouseX, mouseY));
    // console.log(Math.round(mouseX), Math.round(mouseY));
    invisground.display();
    // invisground.fill(242,172,185)
    
}
function mouseDragged(){
  Matter.Body.setPosition(metal_ball.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  realRope.remove();
}
