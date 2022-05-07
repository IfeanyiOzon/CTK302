var bubbles = [];
let url = "";

function setup() {
  // let key = "1xG5lzBtJV3gK61ZE_qdku3ms9-pCJqwl0T8RVHI11m0"; // this is KEY of the URL from the sheet


  let key = "1i8mSPuLYQ20n0sBMMp7GMKv3UKUG6SKH8EGnsIOP-E0"

  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1"; // here I'm making the string for loadJSON.

  loadJSON(url, gotData);

  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
}

// The data comes back as an array of objects

function gotData(data) {
  console.log(data); // Print the data in the console

  // add each line to an array of bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(
      new Bubble(
        data[i]["What energy level are you at?"],
        data[i]["are you watching nab basketball today"],
        data[i]["how was your day"])); // THESE NEED TO MATCH SPREADSHEET

  }
}

function draw() {
  background("blue");

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }
}

// my Bubble class
class Bubble {
  constructor(energy, nab, day) {
    // only the order of these parameters matters!
    this.energy = energy;
    this.nab = nab;
    this.day = day;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(2, 5), 0);
  }

  display() {
    stroke("red");
    noFill();
    ellipse(this.pos.x, this.pos.y + 10, 120, 120);
    fill("white");
    text(
      this.energy + "\n" + this.nab + "\n" + this.day,
      this.pos.x,
      this.pos.y
    );



  }


}
