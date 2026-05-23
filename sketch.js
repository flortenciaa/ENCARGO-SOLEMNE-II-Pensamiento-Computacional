let estado = "menu";
let tamañoPlay = 150;

function setup() {
  createCanvas(800, 400);
  background(116, 165, 190);
}

function draw() {
 
  circulo();

  if (estado == "menu") {
    titulo();

    botones(325, 230); // boton de play
    botones(325, 265);
    botones(325, 300);
    botones(325, 335);
    
  } else if (estado == "animacion") {

    tamañoPlay += 20;

    rectMode(CENTER);
    fill(117, 6, 8);
    noStroke();
    ellipse(width / 2, height / 2, tamañoPlay, tamañoPlay); //

    // luego de apretar play
    if (tamañoPlay > width) {
      estado = "juego";
    }

  } else if (estado == "juego") {

    background(50, 20, 60);

    // fondo particulas random 
    for (let i = 0; i < 30; i++) {

      let x = random(width);
      let y = random(height);

      let tamaño = map(mouseX, 0, width, 5, 30);

      // cambio de color de particulas
      if (mouseIsPressed) {
        fill(117, 6, 8);
      } else {
        fill(217, 175, 203);
      }

      noStroke();
      ellipse(x, y, tamaño);
    }
  }
}

// titulo del juego
function titulo() {
  push();
  fill(117, 6, 8);
  stroke(117, 6, 8);
  strokeWeight(5);
  textSize(80);
  textAlign(CENTER);
  text("Toby's path", 400, 180);
  pop();
}

// botones del juego
function botones(x, y) {

  let hover = mouseX > x && mouseX < x + 150 &&
              mouseY > y && mouseY < y + 23;

  let colorBoton;

  if (hover) {
    colorBoton = color(117, 6, 8);
  } else {
    colorBoton = color(217, 175, 203);
  }

  push();
  stroke(117, 6, 8);
  strokeWeight(2);
  fill(colorBoton);
  rect(x, y, 150, 23, 5);

  if (hover && x == 325 && y == 230) {
    fill(200);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(14);
    text("Play", x + 75, y + 11);
  }

  pop();
}

// click de boton play
function mousePressed() {
  if (estado == "menu" && 
      mouseX > 325 && mouseX < 325 + 150 &&
      mouseY > 230 && mouseY < 230 + 23) {
    
    estado = "animacion";
  }
}

// circulo puntero
function circulo() {
  push();
  noStroke();

  if (mouseIsPressed) {
    fill(116, 165, 190);
    ellipse(mouseX, mouseY, 1600, 1000);
  } else {
    fill(217, 175, 203);
    ellipse(mouseX, mouseY, 30, 30);
  }

  pop();
}
