// (function(){

var canvas = document.querySelector("canvas");
var drawingSurface = canvas.getContext("2d");
var title = canvas.getContext("2d");
var onePlayer = canvas.getContext("2d");
var twoPlayer = canvas.getContext("2d");
var instructions = canvas.getContext("2d");

title.font = "40pt Arial";
title.textAlign = "center";





// onePlayer.font = "bold 30px Arial";
// onePlayer.textAlign = "center";
// twoPlayer.font = "bold 100px Arial";
// twoPlayer.textAlign = "center";
// instructions.font = "bold 100px Arial";
// instructions.textAlign = "center";

var sprites = [];
var missiles = [];
var assetsToLoad = [];
var manaSprites = [];
var selectSprites = []
var cSelectSprites = [];



sprites.push(line);
manaSprites.push(mana);
manaSprites.push(mbTop);
manaSprites.push(mbBottom);
manaSprites.push(mbLeft);
manaSprites.push(mbRight);
selectSprites.push(select1);
selectSprites.push(select2);
selectSprites.push(lineSelect);
selectSprites.push(triangleSelect);
selectSprites.push(squareSelect);
selectSprites.push(circleSelect);
cSelectSprites.push(selectScreen);
cSelectSprites.push(yellowLeft);
cSelectSprites.push(yellowRight);
cSelectSprites.push(yellowTop);
cSelectSprites.push(yellowBottom);
cSelectSprites.push(cSelectLine);

var image = new Image();
// image.addEventListener("load", loadHandler, false);
image.src = "tilesheet.jpg";
// assetsToLoad.push(image);

// var assetsLoaded = 0;
// var LOADING = 0;
var PLAYING = 1;
var OVER = 2;
var MODESELECT = 3;
var CHARACTERSELECT = 4;
var gameState = MODESELECT;

var RIGHT = 39;
var LEFT = 37;
var UP = 38;
var DOWN = 40;
var SPACE = 32;
var Z = 90;
var X = 88;

var lineShoot = false;
var spaceKeyIsDown = false;
var zIsDown = false;
var xIsDown = false;
var moveRight = false;
var moveLeft = false;
var moveUp = false;
var moveDown = false;



function removeObject(objectToRemove, array){
  var i = array.indexOf(objectToRemove);
  if (i !== -1)
  {
    array.splice(i, 1);
  }
}



function playGame()
{

  keyDown(event);

  keyUp(event);

//LEFT
if(moveLeft && !moveRight)
{
  line.vx = -7;

}
//RIGHT
if(!moveLeft && moveRight)
{
  line.vx = 7;
}
//UP
if(moveUp && !moveDown)
{
  line.vy = -7;
}
//DOWN
if(moveDown && !moveUp)
{
  line.vy = 7;
}
//zero velocity if no buttons pressed
if(!moveDown && !moveUp)
{
  line.vy = 0;
}
//zero velocity if no buttons pressed
if(!moveLeft && !moveRight)
{
  line.vx = 0;
}

if(lineShoot)
{
  lineFire();
  lineShoot = false;
}

line.x = Math.max(0, Math.min(line.x + line.vx, canvas.width - line.width));
line.y = Math.max(0, Math.min(line.y + line.vy, canvas.height - line.height));

//moveMissile
for(var i = 0; i < missiles.length; i++)
{
  var missile = missiles[i];
  missile.x += missile.vx;
  missile.y += missile.vy;

  if(missile.x < -missile.width || missile.x > canvas.width || missile.y < -missile.height || missile.y > canvas.height){
    removeObject(missile, missiles);
    removeObject(missile,sprites);
    i--;
  }

}

}

setInterval(manaIncrease, 40);


function update()
{
requestAnimationFrame(update, canvas);

switch(gameState)
{
  // case LOADING:
  // console.log("loading...");
  // break;

  case PLAYING:
  console.log(gameState);
  playGame();
  break;

  case OVER:

  endGame();
  break;

  case MODESELECT:
  selectGame();
  break;

case CHARACTERSELECT:
console.log(gameState);
characterSelect();
  break;

}

function render()
{

  drawingSurface.clearRect(0,0,canvas.width, canvas.height);
drawPlayGame();
drawSelectGame();
drawCharacterSelect();


}

  render();
}
update();
// function loadHandler()
// {
//   assetsLoaded++;
//   if(assetsLoaded === assetsToLoad.length)
//   {
//     image.removeEventListener("load", loadHandler, false);
//
//     gameState = PLAYING;
//   }
// }


function endGame()
{
  //empty right now
}


// }());
