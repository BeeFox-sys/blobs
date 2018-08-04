var bg,radi,blobness,hue,sat,bri,eyeHeight,eyeDist,eyeRadi,eyeBlob,blobFill,blobStroke,eyeColour,rand,eyeUp;

//aprox. total of 4.9338246447e+23 diffrent blobs
//               (493,382,464,470,000,000,000,000)
//               (493 sextillion blobs)

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  randomize();
  bg = loadImage("meadow.jpg");
}

function draw() {
  clear();
  image(bg,0,0,constrain(windowWidth,600,1400),windowHeight);
  fill(blobFill);
  stroke(blobStroke);
  strokeWeight(5);
  applyMatrix();
  translate(width/2, height/10*7);
  beginShape();
  for (var i = 0; i <= TWO_PI; i+=0.1) {;
    var x = radi*cos(i);
    var y = radi*sin(i);
    if (y > 0) {
      y = pow(log(y), blobness);
    }
    vertex(x, y);
  }
  vertex(radi*cos(0), radi*sin(0));
  endShape();
  fill(eyeColour);
  //translate(eyeOffset,0);
  translate(eyeDist, eyeHeight);
  ellipse(0, 0, eyeRadi, eyeRadi);
  translate(-(eyeDist*2), 0);
  ellipse(0, 0, eyeRadi, eyeRadi);
  resetMatrix();
  fill(200,100,100);
  stroke(200,100,50);
  textAlign(CENTER);
  textSize(30);
  text("Press [Space] to blob", width/2, height-50);
}

function keyPressed() {
  switch(key) {
  case ' ':
    if (rand == true) {
      randomize();
    }
  default:
    break;
  }
}

function randomize(){
    radi = random(50, 195);
    blobness = random(2, 2.8);
    hue = random(40, 270);
    sat = random(50, 100);
    bri = random(50, 100);
    blobFill = color(hue, sat, bri);
    blobStroke =color(hue, sat, (bri-25));
    eyeHeight = constrain(random(-radi),-radi+50,0);
    eyeDist = random(50, radi+eyeHeight);
    eyeRadi = random(10,radi/10);
    eyeColour = color(random(360),random(100),random(50,100));
    rand = true;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  print(windowWidth);
}
