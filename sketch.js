const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1500, 800);
	
	//Ground
	roof = new Roof(750, 400, 30, 30);
}

function draw() {
	background(200);

	roof.display();
}