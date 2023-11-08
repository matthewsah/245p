
const books = [
    {title: 1984, author: "George Orwell"},
    {title: "In Search of Lost Time", author: "Marcel Proust"},
    {title: "Don Quixote", author: "Miguel de Cervantes"},
    {title: "Moby Dick", author: "Herman Melville"}
]

books
    .filter((book) => book.author != "George Orwell")
    .forEach((book) => console.log(`${book.title} ${book.author}`))

function changeTextColorToBlue() {
    let textElement = document.getElementById("content")
    textElement.classList.add("blue-text")
}

function updateContent() {
    let textElement = document.getElementById("content");
    textElement.innerHTML = "Bye-Bye World!"
}

let p1, p2;

function setup() {
  createCanvas(500, 500);
  p1 = new Particle(300, 300);
  p2 = new Box(300, 300);
  p3 = new Triangle(300, 300);
  p4 = new ParticleLeftRight(250, 250);
  p5 = new ParticleUpDown(250, 250);
}

function draw() {
  background(0);
  p1.update();
  p1.show();
  p2.update();
  p2.show();
  p3.update();
  p3.show();
  p4.update();
  p4.show();
  p5.update();
  p5.show();
}