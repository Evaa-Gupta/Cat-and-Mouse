var cat
var mouse
var cat1,cat2,mouse1,mouse2,bg

function preload() {
    //load the images here
    cat1=loadImage("images/cat1.png")
    cat2=loadAnimation("images/cat2.png","images/cat3.png")
    cat3=loadImage("images/cat4.png")
    mouse1=loadImage("images/mouse1.png")
    mouse2=loadImage("images/mouse2.png","images/mouse3.png")
    mouse3=loadImage("images/mouse4.png")
    bg=loadImage("images/garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create cat and mouse sprites here
  cat=createSprite(870,600);
  cat.scale=0.2
  mouse=createSprite(200,600)
  mouse.scale=0.2
cat.addImage("c1",cat1)
mouse.addImage("m1",mouse1)
}

function draw() {
 background(bg);

if(cat.x-mouse.x< cat.width-mouse.width/2){
cat.addAnimation("c3",cat3)
cat.changeAnimation("c3",cat3)
cat.velocityX=0
mouse.addAnimation("m3",mouse3)
mouse.changeAnimation("m3",mouse3)
}
   

    //Write condition here to evalute if cat and mouse collide
    
    drawSprites();
}

function keyPressed(){
if (keyCode==LEFT_ARROW){

  cat.addAnimation("c2",cat2);
  cat.changeAnimation("c2",cat2);

  cat.velocityX=-4


mouse.addAnimation("m2",mouse2);
mouse.changeAnimation("m2",mouse2);

  
}
//For moving and changing animation write code here

}