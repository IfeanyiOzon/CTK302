let x = 0;
let rowdiesR;

function setup() {
  createCanvas(500, 500);
  rowdiesR = loadFont("assets/Rowdies-R.ttf");
  rectMode(CENTER);
}

function draw() {
  background('black');
  fill('white');

 textFont(rowdiesR);
 textSize(48);
  text("I'm soooooo prettyyy", x, 300);

  x += 5;

  if (x > width) {
    x = 0;
  }

}
