let state = 0;
let timer = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {

  background(100);

  switch (state) {

    case 0:
      background("yellow") ;
      text("0", 100, 100);
      background("red");
      for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
          rect(i * 120, j * 20, 2, 12);
        }
      }

      timer++;
      if (timer > 3*60){
        timer = 0 ;
        state = 1;
      }
      break;

    case 1:
      background("blue") ;
      text("1", 100, 100);
      background("green");
      text("1", 100, 100);
      for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
          fill(246, 115, 0);
          ellipse(i * 20, j * 150, 2, 12);

        }
      }

      timer++;
      if (timer > 3*100){
        timer = 0 ;
        state = 2;
      }

      break;

    case 2:
      background("red") ;
      text("2", 100, 100);
      background("yellow");
      for (let j = 0; j < 20; j++) {
        for (let i = 0; i < 20; i++) {
          fill(246, 115, 250);
          rect(i * 20, j * 50, 21, 12);
        }
      }


      timer++;
      if (timer > 3*30){
        timer = 0 ;
        state = 0;
      }
      break;

  }
}

function mouseReleased() {
  state++;
  if (state > 2) state = 0;

}
