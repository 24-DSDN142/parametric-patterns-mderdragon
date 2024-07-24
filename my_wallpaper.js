//your parameter variables go here!
let headHeight = 75
let lilypadWidth = 150



function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 100;
}

function wallpaper_background() {
  background(83, 212, 245); //pond blue
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  fill(50, 130, 44)//dark green

  noStroke()
  ellipse(100, 150, lilypadWidth, 50)//lilypad
  
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

  ellipse(100, 75, 125, headHeight)//head

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
  

}
