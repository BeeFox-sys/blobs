var blob,dragAng,dragDist,dragStart, grav;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  bg = loadImage("meadow.jpg");
   grav = createVector(0,.5);
   blob = new Blob(width/2,height/2);
}

function draw() {
  image(bg,0,0,windowWidth,windowHeight);
  fill(200,100,100);
  stroke(200,100,50);
  textAlign(CENTER);
  textSize(30);
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    text("Shake to blob", width/2, 50);
  }else{
   text("Double Click to blob", width/2, 50);
}
  if(!dragStart && frameCount > 30){
  blob.applyVector(grav.x,grav.y);
  blob.update();
}
  blob.drawBlob();
}

function mousePressed(){
  if(dist(mouseX,mouseY,blob.pos.x,blob.pos.y) <= blob.radi){
    dragStart = true;
  }
}

function mouseDragged(){
  if(dragStart){
    blob.pos.set(mouseX,mouseY);
  }
}

function mouseReleased(){
  blob.applyVector(random(-5,5),-1)
  dragStart = false;
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  print(windowWidth);
}

function doubleClicked(){
  blob = new Blob();
}
function deviceShaken() {
  blob = new Blob();
}
