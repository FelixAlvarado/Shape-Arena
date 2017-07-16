// (function(){

var canvas = document.querySelector("canvas");
var drawingSurface = canvas.getContext("2d");

var sprites = [];
var missiles = [];
var assetsToLoad = [];




sprites.push(line);



var image = new Image();
// image.addEventListener("load", loadHandler, false);
image.src = "tilesheet.jpg";
// assetsToLoad.push(image);

// var assetsLoaded = 0;
// var LOADING = 0;
var PLAYING = 1;
var OVER = 2;
var gameState = PLAYING;
;
var RIGHT = 39;
var LEFT = 37;
var UP = 38;
var DOWN = 40;
var SPACE = 32;

var lineShoot = false;
var spaceKeyIsDown = false;
var moveRight = false;
var moveLeft = false;
var moveUp = false;
var moveDown = false;

window.addEventListener("keydown", function(event)
{
  switch(event.keyCode){
    case LEFT:
    moveLeft = true;
    break;

    case RIGHT:
    moveRight = true;
    break;

    case UP:
    moveUp = true;
    break;

    case DOWN:
    moveDown = true;
    break;

    case SPACE:
    if (!moveDown && !moveUp && !moveLeft && !moveRight)
    {
      break;
    }
    if(!spaceKeyIsDown)
    {
      lineShoot = true;
      spaceKeyIsDown = true;
    }
    break;

  }
}, false);

window.addEventListener("keyup", function(event)
{
  switch(event.keyCode){
    case LEFT:
    moveLeft = false;
    break;

    case RIGHT:
    moveRight = false;
    break;

    case UP:
    moveUp = false;
    break;

    case DOWN:
    moveDown = false;
    break;

    case SPACE:
    spaceKeyIsDown = false;

  }
},false);

function removeObject(objectToRemove, array){
  var i = array.indexOf(objectToRemove);
  if (i !== -1)
  {
    array.splice(i, 1);
  }
}

function lineFire()
{
  var missile = {
    width: 12,
    height:12,
    sx: 100,
    sy: 0,
    swx: 12,
    swy: 12,
    vx:0,
    vy:0,
    x: 0,
    y: 0,
  }

  if (moveLeft){
    missile.x = line.x - 12;
    missile.y = line.y +  19;
    missile.vx = -16;
  }
  if (moveRight){
    missile.x = line.x + 10;
    missile.y = line.y +  19;
      missile.vx = 16;
  }
  if (moveUp){
    missile.x = line.x - 1;
    missile.y = line.y - 12;
    missile.vy = -16;
  }
  if (moveDown){
    missile.x = line.x - 1;
    missile.y = line.y + 50;
  missile.vy = 16;
}

  sprites.push(missile);
  missiles.push(missile);
}

function playGame()
{
//LEFT
if(moveLeft && !moveRight)
{
  line.vx = -8;

}
//RIGHT
if(!moveLeft && moveRight)
{
  line.vx = 8;
}
//UP
if(moveUp && !moveDown)
{
  line.vy = -8;
}
//DOWN
if(moveDown && !moveUp)
{
  line.vy = 8;
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

  if(missile.x < -12 || missile.x > canvas.width || missile.y < -12 || missile.y > canvas.height){
    removeObject(missile, missiles);
    removeObject(missile,sprites);
    i--;
  }

}

}



function update()
{
requestAnimationFrame(update, canvas);

switch(gameState)
{
  // case LOADING:
  // console.log("loading...");
  // break;

  case 1:
  playGame();
  break;

  case OVER:
  endGame();
  break;

}

function render()
{
  drawingSurface.clearRect(0,0,canvas.width, canvas.height);

  if(sprites.length !== 0)
  {
    for (var i = 0; i < sprites.length; i++)
    {
      var sprite = sprites[i];


      drawingSurface.drawImage(image, sprite.sx, sprite.sy, sprite.swx, sprite.swy, sprite.x, sprite.y, sprite.swx, sprite.swy);
    }

  }
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
