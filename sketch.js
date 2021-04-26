var canvas;
var surface1, surface2, surface3, surface4; 
var box; 
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
   

    //create 4 different surfaces
surface1= createSprite(100,580,150,15);
surface1.shapeColor="red"
surface2= createSprite(250,580,150,15);
surface2.shapeColor="blue"
surface3= createSprite(400,580,150,15);
surface3.shapeColor="green"
surface4= createSprite(550,580,150,15);
surface4.shapeColor="yellow"
    //create box sprite and give velocity
box = createSprite(random(10,80));
box.velocityX = 4;
box.velocityY = 5;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    box.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box)&& box.bounceOff(surface1)){
        box.shapeColor = "red";
    }

    if(surface2.isTouching(box)&& box.bounceOff(surface2)){
        box.shapeColor ="blue";
    }

    if(surface3.isTouching(box)&& box.bounceOff(surface3)){
        box.shapeColor="green";
    }

    if(surface4.isTouching(box)&& box.bounceOff(surface4)){
        box.shapeColor="yellow";
        box.velocityX = 0;
        box.velocityY = 0;
    }

    drawSprites();
}
