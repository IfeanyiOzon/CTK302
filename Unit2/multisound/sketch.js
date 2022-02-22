let state = 0;
let songA, songB, songC;

function preload() {
  songA = loadSound("assets/songA.mp3");
  songB = loadSound("assets/songB.mp3");
  songC = loadSound("assets/songC.mp3");
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  switch (state) {
    case 0:
      songA.play();
      state = 1;
      break;


    case 1:
      background("red");
      break;

    case 2:
      songB.play();
      state = 3;
      break;

    case 3:
      background("blue");
      break;

    case 4:
      songC.play();
      state = 5;
      break;

    case 5:
      background("green");
      break;
  }

}


function mouseReleased() {
  state++;
  songA.pause();
  songB.pause();
  songC.pause();
  if (state > 5) {
    state = 0
  }

}
