const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var viking;
var cave;
var gem1_image, gem2_image, gem3_image, gem4_image, gem5_image;
var gemsGroup;
var knivesGroup;

function preload(){
cave_image = loadImage("images/cave.png");
 viking_image = loadImage("images/vikinggirl2.png");
ground_image = loadImage("images/ground.png");
knife3_image = loadImage("images/knife.png");
gem1_image = loadAnimation("images/gem1.gif");
gem2_image = loadImage("images/gem2.png");
gem3_image = loadAnimation("images/gem3.gif");
gem4_image = loadAnimation("images/gem4.gif");
gem5_image = loadImage("images/gem5.png");
knife1_image = loadImage("images/icicle.png");
knife2_image = loadImage("images/rock.png");
}

function spawnKnives(){
if (frameCount % 130 === 0){
    var knife = createSprite( 30, 0, 20,20);
    knife.x = Math.round(random(0, displayWidth));
    knife.velocityY = 3
    knife.scale = 0.1

    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: knife.addImage("knife1",knife1_image);
            knife.scale = 1.5;
              break;
      case 2: knife.addImage("knife2", knife2_image);
            knife.scale = 1.5;
              break;

    case 3: knife.addImage("knife3", knife3_image);
              break;
              default: break;
            }

knivesGroup.add(knife);
}
}

function spawnGems(){
if (frameCount % 90 === 0 ){
    var gems = createSprite( 30,0,20,20);
    gems.x = Math.round(random(0, displayWidth));
   
    
   
    gems.velocityY = 3

    

    var rand = Math.round(random(1,4));
    switch (rand) {
 case 1: gems.addAnimation("gem1", gem1_image);
        gems.scale = 0.5;
        break;
case 2: gems.addImage("gem2", gem2_image);
        gems.scale = 0.05;
        break;
case 3: gems.addAnimation("gem3", gem3_image);
        gems.scale = 0.08;
        break;
case 4: gems.addAnimation("gem4", gem4_image);
        gems.scale = 0.1;
        break;
 case 5: gems.addImage("gem5", gem5_image);
        gems.scale= 2;
        break;


default: break;
    }

    gemsGroup.add(gems);
}

}


function setup(){
    createCanvas(displayWidth,displayHeight);
    cave = createSprite(displayWidth, displayHeight);
    cave.addImage("Cave1", cave_image)
    cave.scale = 7;
    ground = createSprite(displayWidth/2, displayHeight-30, 100, 20);
    ground.addImage("ground1", ground_image);
    viking = createSprite(displayWidth/2, displayHeight-148, 20, 80);
    viking.addImage("Viking1", viking_image);
    viking.scale = 0.2;

    gemsGroup = new Group();
    knivesGroup = new Group();
} 

function draw(){
    background ("white");
    edges = createEdgeSprites();


    if(keyDown(RIGHT_ARROW)) {
        viking.x = viking.x+10;
        ground.x  = ground.x +10;
      }
        
       if(keyDown(LEFT_ARROW)) {
         viking.x = viking.x -10;
         ground.x = ground.x -10;
       }
    
    ground.bounce (edges[0]);
    ground.bounce(edges[1]);
    viking.collide(edges[0]);
    viking.collide(edges[1]);


spawnKnives();
spawnGems();
    drawSprites();
}