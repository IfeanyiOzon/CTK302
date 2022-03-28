let state = 0;
let timer = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {

  background(100);

  switch (state) {

    case 0:


      text("0", 100, 100);
      background("blue");
      for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
          fill(255,140,0);
          rect(i * 20, j * 50, 21, 12);
        }
      }

      timer++;
      if (timer > 3 * 60) {
        timer = 0;
        state = 1;
      }
      break;

    case 1:

      text("1", 100, 100);
      background("yellow");
      for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
          fill(246, 115, 250);
          rect(i * 20, j * 50, 21, 12);

        }
      }

      timer++;
      if (timer > 3 * 60) {
        timer = 0;
        state = 2;
      }

      break;

    case 2:

      text("2", 100, 100);
      background("green");
      for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
          fill(255, 0, 0);
          rect(i * 20, j * 50, 21, 12);
        }
      }


      timer++;
      if (timer > 3 * 60) {
        timer = 0;
        state = 2;
      }
      break;

  }
}

function mouseReleased() {
  state++;
  if (state > 2) state = 1;

}
