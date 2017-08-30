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
var missiles2 = [];
var assetsToLoad = [];
var manaSprites = [];
var selectSprites = []
var cSelectSprites = [];
var pauseSprites = [];


// sprites.push(line);
manaSprites.push(health);
manaSprites.push(hTop);
manaSprites.push(hBottom);
manaSprites.push(hLeft);
manaSprites.push(hRight);
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
cSelectSprites.push(yellowRight);
cSelectSprites.push(redLeft);
cSelectSprites.push(yellowBottom);
cSelectSprites.push(redRight);
cSelectSprites.push(redTop);
cSelectSprites.push(yellowLeft);
cSelectSprites.push(redBottom);
cSelectSprites.push(yellowTop);
cSelectSprites.push(cSelectLine);
cSelectSprites.push(cBorder1);
cSelectSprites.push(cBorder2);
cSelectSprites.push(cBorder3);
cSelectSprites.push(cBorder4);
pauseSprites.push (select3);
pauseSprites.push(select4);
var image = new Image();
image.addEventListener("load", loadHandler, false);
image.src = "tilesheet.jpg";
assetsToLoad.push(image);

var assetsLoaded = 0;
var LOADING = 0;
var PLAYING = 1;
var OVER = 2;
var MODESELECT = 3;
var CHARACTERSELECT = 4;
var gameState = LOADING;
var P1 = null;
var P2 = null;
var player2 = false;
var play = false;  //making sure p1 select always appears on p2 select screen
var pauseGame = false; //used during playing gamestate for pause screen. Space used for pausing
var pauseSwitch = false;
var RIGHT = 68; // d **down and right buttons only work at same time when its arrow keys (try and look up later) could also be just my conputer
var LEFT = 65; // a
var UP = 87; //w
var DOWN = 83; //s
var SPACE = 67; //c like a x on ps congtroller
var Z = 86; //v like a circle on ps controller
var X = 66; //b like a square on ps controller
var PAUSE = 32; //space the pause button in all games

//player 2 controllers
var RIGHT2 = 76; // l
var LEFT2 = 74; // j
var UP2 = 73; //i
var DOWN2 = 75; //k
var SPACE2 = 190; //. like a x on ps congtroller
var Z2 = 191; //    / like a circle on ps controller
var X2 = 16; //  shift like a square on ps controller

var lineShoot = false;
var spaceKeyIsDown = false;
var zIsDown = false;
var xIsDown = false;
var moveRight = false;
var moveLeft = false;
var moveUp = false;
var moveDown = false;
var lineShoot2 = false;
var spaceKeyIsDown2 = false;
var zIsDown2 = false;
var xIsDown2 = false;
var moveRight2 = false;
var moveLeft2 = false;
var moveUp2 = false;
var moveDown2 = false;



function removeObject(objectToRemove, array){
  var i = array.indexOf(objectToRemove);
  if (i !== -1)
  {
    array.splice(i, 1);
  }
}



function playGame()
{
if (player2){
  sprites.push(line2);
}

  keyDown(event);

  keyUp(event);

//LEFT
if(moveLeft && !moveRight)
{
  P1.vx = -7;

}

//RIGHT
if(!moveLeft && moveRight)
{
  P1.vx = 7;
}
//UP
if(moveUp && !moveDown)
{
  P1.vy = -7;
}
//DOWN
if(moveDown && !moveUp)
{
  P1.vy = 7;
}
//zero velocity if no buttons pressed
if(!moveDown && !moveUp)
{
  P1.vy = 0;
}
//zero velocity if no buttons pressed
if(!moveLeft && !moveRight)
{
  P1.vx = 0;
}

if(lineShoot)
{
  if (P1 == line){
  lineFire();
  lineShoot = false;
}
}
P1.x = Math.max(0, Math.min(P1.x + P1.vx, canvas.width - P1.width));
P1.y = Math.max(0, Math.min(P1.y + P1.vy, canvas.height - P1.height));

//player 2 mode
if(player2){
//LEFT2
if(moveLeft2 && !moveRight2)
{

  line2.vx = -7;

}
//RIGHT2
if(!moveLeft2 && moveRight2)
{
  line2.vx = 7;
}
//UP2
if(moveUp2 && !moveDown2)
{
  line2.vy = -7;
}
//DOWN2
if(moveDown2 && !moveUp2)
{
  line2.vy = 7;
}
//zero velocity if no buttons pressed
if(!moveDown2 && !moveUp2)
{
  line2.vy = 0;
}
//zero velocity if no buttons pressed
if(!moveLeft2 && !moveRight2)
{
  line2.vx = 0;
}

if(lineShoot2)
{

  lineFire2();
  lineShoot2 = false;
}

line2.x = Math.max(0, Math.min(line2.x + line2.vx, canvas.width - line2.width));
line2.y = Math.max(0, Math.min(line2.y + line2.vy, canvas.height - line2.height));
}

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

  if(collision(missile, line2)){
    removeObject(missile, missiles);
    removeObject(missile,sprites);
    health2.swx = health2.swx - missile.dmg;
    i--;
    if(health2.swx <= 0){
      gameState = OVER;
    }

  }



}

//moveMissile
for(var i = 0; i < missiles2.length; i++)
{
  var missile = missiles2[i];
  missile.x += missile.vx;
  missile.y += missile.vy;

  if(missile.x < -missile.width || missile.x > canvas.width || missile.y < -missile.height || missile.y > canvas.height){
    removeObject(missile, missiles2);
    removeObject(missile,sprites);
    i--;
  }

  if(collision(missile, line)){
    removeObject(missile, missiles2);
    removeObject(missile,sprites);
    health.swx = health.swx - missile.dmg;
    i--;
    if(health.swx <= 0){
      gameState = OVER;
    }

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

  case LOADING:
  console.log('loading...');
  break;

  case PLAYING:
  if (!pauseGame){
  playGame();

}
  break;

  case OVER:

  // endGame(); inside render function
  break;

  case MODESELECT:
  selectGame();
  break;

case CHARACTERSELECT:
characterSelect();
  break;

}

function render()
{

  drawingSurface.clearRect(0,0,canvas.width, canvas.height);


drawPlayGame();
drawSelectGame();
drawCharacterSelect();
endGame();

}


  render();
}
update();






// }());
