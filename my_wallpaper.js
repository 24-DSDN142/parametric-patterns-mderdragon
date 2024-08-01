//your parameter variables go here!
let frogScale = 0.6
let centreFrog = 40
let cutWidth = 20
let cutLocation = false
let 

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;

}

function wallpaper_background() {
  background(83, 212, 245); //pond blue
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  noStroke()
  fill(50, 130, 44)//dark green

  if(cutLocation == true) {
    arc(180, 30, 90, 40, 60, cutWidth)//background lilypads with upper cut
    ellipse(45, 180, 60, 25)
}  else {
      arc(45, 180, 60, 25, 60, cutWidth)//lower cut
      ellipse(180, 30, 90, 40)
    }

  push()

  if(cutLocation == true) {
  translate(-45, 165)
  scale(0.5)
}

  stroke(1)
  fill(255, 122, 198)//pink

  push()
  translate(200, 15)//right petal
  rotate(45)
  ellipse(0, 0, 20, 50)
  pop()
  
  push()
  translate(160, 15)//left petal
  rotate(315)
  ellipse(0, 0, 20, 50)
  pop()

  ellipse(180, 10, 20, 50)//centre petal

  fill(255, 181, 223)//pale pink

  push()
  translate(195, 30)//lower right petal
  rotate(70)
  ellipse(0, 0, 15, 30)
  pop()

  push()
  translate(165, 30)//lower left petal
  rotate(290)
  ellipse(0, 0, 15, 30)
  pop()

  pop()

  push()

  fill(50, 130, 44)//dark green
  
  translate(centreFrog, centreFrog)
  scale(frogScale)
  
  ellipse(100, 150, 150, 50)//frog lilypad
  
  stroke(1)
  fill(148, 230, 135)//green
  
  beginShape()//body
  vertex(100, 50)
  vertex(25, 120)
  vertex(50, 150)
  vertex(150, 150)
  vertex(175, 120)
  endShape(CLOSE)

  line(90, 150, 90, 135)//back legs
  line(110, 150, 110, 135)
  line(90, 135, 75, 125)
  line(110, 135, 125, 125)

  rect(50, 75, 25, 85)//front legs
  rect(125, 75, 25, 85)

  ellipse(100, 75, 125, 75)//head

  fill(255)//white

  circle(60, 40, 30)//eyes
  circle(140, 40, 30)

  fill(0)//black

  ellipse(60, 40, 5, 10)//pupils
  ellipse(140, 40, 5, 10)

  fill(186, 194, 255)//purple

  arc(60, 40, 30, 30, 225, 315, CHORD)//upper eyelids
  arc(140, 40, 30, 30, 225, 315, CHORD)
  arc(60, 40, 30, 30, 10, 170, CHORD)//lower eyelids
  arc(140, 40, 30, 30, 10, 170, CHORD)

  noFill()
  circle(100, 65, 4)
  circle(95, 70, 4)
  circle(105, 70, 4)//nose
  arc(100, 75, 90, 50, 0, 180)//mouth

  pop()

  

}
