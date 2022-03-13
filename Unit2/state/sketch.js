let state = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {

  background(100);

  switch (state) {

    case 0:
    text("0", 100, 100);
      background("red");
      for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
          rect(i * 120, j * 20, 2, 12);
        }
      }
      break;

    case 1:
    text("1", 100, 100);
      background("green");
      text("1", 100, 100);
      for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
          fill(246, 115, 0);
          ellipse(i * 20, j * 150, 2, 12);

        }
      }
      break;

    case 2:
    text("2", 100, 100);
    background("yellow");
    for (let j = 0; j < 20; j++) {
      for (let i = 0; i < 20; i++) {
        fill(246, 115, 250);
        rect(i * 20, j * 50, 21, 12);

      }
    }
    break;

    case 3:
    background("purple ");
    text("3", 100, 100);
    for (let j = 0; j < 20; j++) {
      for (let i = 0; i < 20; i++) {
        fill(246, 0, 250);
        rect(i * 20, j * 50, 21, 41);

      }
    }
    break;

    case 4:
      text("4", 100, 100);
      for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
          fill(255,223,0);
          rect(i * 20, j * 310, 21, 41);

        }
      }
      break;


  }
}

function mouseReleased() {
  state++;
  if (state > 4) state = 0;

}
