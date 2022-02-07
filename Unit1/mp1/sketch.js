function setup() {
  // put setup code here
    createCanvas(800, 800);
}

function draw() {
  // put drawing code here


  fill("black");
  text(mouseX + ", " + mouseY, 20, 20);


if (mouseIsPressed){

  //mouth
   fill("black");
  arc(345, 483, 100, 200, 200, PI + QUARTER_PI, CHORD);

   //lighter
  fill("blue");
  rect(23, 99, 55, 100);

  fill("black");
  triangle(307, 444 , 58, 20, 86, 5);
  //eyes
  fill("red")
   ellipse(219, 307, 55, 55);
   fill("red")
   ellipse(443, 307, 55, 55);
   //sssshhhhhh
  fill("green");
  triangle(307, 444 , 58, 20, 86, 5);
  //fire
  fill("red");
  ellipse(49, 74, 30, 30);
  triangle(10, 45, 28, 20, 56, 45);
  triangle(30, 75, 28, 50, 66, 45);
  triangle(60, 65, 28, 20, 56, 45);
  triangle(10, 45, 78, 20, 56, 45);
  //smoke
  fill("white")
   ellipse(mouseX, mouseY, 30, 10);







} else {
background("black");

  //head shape
  fill("white");
  ellipse(354,389, 500, 400);
  //eyes
  fill("black")
   ellipse(219, 307, 55, 55);
   fill("black")
   ellipse(443, 307, 55, 55);
  //mouth
  fill("black");
  arc(345, 483, 100, 200, 200, PI + QUARTER_PI, CHORD);


  //sssshhhhhh
  fill("green");
  triangle(307, 444 , 58, 20, 86, 5);
  //lighter
  fill("blue");
  rect(23, 99, 55, 100);

  fill("white");
  fill("#FFFFFF")
        rect(222, 26 , 500, 50);
      fill("black")
        text("Hello this is Rocketman, and his special ability is he's always on a different world", 230, 49);
  textSize (13);
}



}

function mouseReleased() {
  print(mouseX + ", " + mouseY);
}
