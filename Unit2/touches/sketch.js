let numberOfTouches ;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);

  switch(numberOfTouches) {
    case 0:
      text("N-now th-that that don't kill me", 5, 22) ;
      break ;

      case 1:
       text("Can only make me stronger", 5, 22) ;
      // put a picture here
      break ;

      case 2:
      text("I need you to hurry up now", 5, 22) ;
            // put a picture here
      break ;

      case 3:
     text("'Cause I can't wait much longer", 5, 22) ;
            // put a picture here
      break ;


  }

}
