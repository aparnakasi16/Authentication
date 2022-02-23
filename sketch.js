var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player,allPlayers,school,users;
var schoolCount,userCount;
var gline,grline;
var home,login,allUsers;
function preload() {
  backgroundImage = loadImage("download.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.start();

}

function draw() {
  background(backgroundImage);
 

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
