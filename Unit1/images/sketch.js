let mj;
let camera;
let snowman;

function setup() {
  createCanvas(500, 500);

  mj = loadImage("assets/mj.jpg");
  snowman = loadImage("assets/Snowman.jpg");
  camera = loadImage("assets/Camera.jpg");

}

function draw() {
image(mj, width / 2, 100,100,100);
image(camera, width / 2, 200,100,100);
image(snowman, width / 2, 300,100,100);
}
