class Blob{

constructor(xpos, ypos, r, m, b,ch,cs,cb,eh,ed,er,ec){
  this.radi =  r || random(50, 195);
  this.blobness = b || random(2, 2.8);
  this.hue = ch || random(40, 270);
  this.sat = cs || random(50, 100);
  this.bri = cb || random(50, 100);
  this.blobFill = color(this.hue, this.sat, this.bri);
  this.blobStroke = color(this.hue, this.sat, (this.bri-25));
  this.eyeHeight = eh || constrain(random(-this.radi),-this.radi+50,0);
  this.eyeDist = ed || random(50, this.radi+this.eyeHeight);
  this.eyeRadi = er || random(10,this.radi/10);
  this.eyeColour = ec || color(random(360),random(100),random(50,100));
  this.pos =  createVector(0,0);
  if(xpos != null && ypos != null){
    this.pos.set(xpos,ypos);
  }else{
    this.pos.set(random(this.radi,width-this.radi),random(this.radi, height-pow(log(this.radi),this.blobness)));
  }
  this.acc = createVector(0,0);
  this.vel = createVector(0,0);
  this.vel.limit(10);
  this.mood = m || random(0.2,2);
}

drawBlob(){
  fill(this.blobFill);
  stroke(this.blobStroke);
  strokeWeight(5);
  applyMatrix();
  translate(this.pos.x, this.pos.y);
  beginShape();
  for (var i = 0; i <= TWO_PI; i+=0.1) {;
    var x = this.radi*cos(i);
    var y = this.radi*sin(i);
    if (y > 0) {
      y = pow(log(y), this.blobness);
    }
    vertex(x, y);
  }
  vertex(this.radi*cos(0), this.radi*sin(0));
  endShape();
  fill(this.eyeColour);
  translate(this.eyeDist, this.eyeHeight);
  ellipse(0, 0, this.eyeRadi, this.eyeRadi);
  translate(-(this.eyeDist*2), 0);
  ellipse(0, 0, this.eyeRadi, this.eyeRadi);
  resetMatrix();
}

applyVector(x,y){
  this.acc.add(x,y);
}

update(){
  this.vel.add(this.acc);
  this.acc.set(0,0);
  if(this.pos.y>=height-100 && this.vel.y > 0){
    this.vel.set(0,0);
  }
  if(this.pos.x >= width-this.radi && this.vel.x > 0){
    this.vel.set(-this.vel.x, this.vel.y);
  } else if(this.pos.x <= this.radi && this.vel.x < 0){
    this.vel.set(-this.vel.x, this.vel.y);
  }
  if(random(100)<this.mood&&this.pos.y>=height-100){
    this.applyVector(random(-5,5),random(-10,-3));
  }
  this.pos.add(this.vel);
}





}
