
//draws the select screen for the game

function drawSelectGame(){
if (gameState == MODESELECT)
{
  title.fillText("Shape Arena!!!", 400, 100);
    title.fillText("1P", 400, 300);
    title.fillText("2P", 400, 375);

    if(selectSprites.length !== 0)
    {
      for (var i = 0; i < selectSprites.length; i++)
      {
        var sprite = selectSprites[i];


        drawingSurface.drawImage(image, sprite.sx, sprite.sy, sprite.swx, sprite.swy, sprite.x, sprite.y, sprite.swx, sprite.swy);
      }

    }
  }
}


// select game function

function selectGame()
{
  window.addEventListener("keydown", function(event)
  {
    switch(event.keyCode){

      case UP:
      if (select1.y == 350){
        select1.y = select1.y - 75;
        select2.y = select2.y - 75;
      }

      break;

      case DOWN:
      if (select1.y == 275){
        select1.y = select1.y + 75;
        select2.y = select2.y + 75;
      }
      break;

      case SPACE:
      if (select1.y == 275){
  gameState = PLAYING;
}
      break;



    }
  }, false);



}




// removes object from array

function removeObject(objectToRemove, array){
  var i = array.indexOf(objectToRemove);
  if (i !== -1)
  {
    array.splice(i, 1);
  }
}


//keydown for line
function keyDown(){

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
      if (mana.swx < 25)
      {
        break;
      }
      if (!moveDown && !moveUp && !moveLeft && !moveRight)
      {
        break;
      }
      if(!spaceKeyIsDown)
      {
        mana.swx = mana.swx - 25;
        lineShoot = true;
        spaceKeyIsDown = true;

      }

      break;

      case Z:
      if (mana.swx < 100)
      {
        break;
      }
      if (!moveDown && !moveUp && !moveLeft && !moveRight)
      {
        break;
      }
      if(!zIsDown)
      {
        mana.swx = mana.swx - 100;
        lineShoot = true;
        zIsDown = true;

      }
      break;

      case X:
      if (mana.swx < 100)
      {
        break;
      }
      if (!xIsDown)
      {
        mana.swx = mana.swx - 100;
        lineShoot = true;
        xIsDown = true;
      }

    }
  }, false);


}


// key up function for line control
function keyUp()
{
window.addEventListener("keyup", function (event)
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
    break;

    case Z:
    zIsDown = false;
    break;

    case X:
    xIsDown = false;
    break;

  }
},false);
}


// draws all of the sprites in the game

function drawPlayGame()
 {
   if (gameState == PLAYING)
   {
     if(sprites.length !== 0)
     {
       for (var i = 0; i < sprites.length; i++)
       {
         var sprite = sprites[i];


         drawingSurface.drawImage(image, sprite.sx, sprite.sy, sprite.swx, sprite.swy, sprite.x, sprite.y, sprite.swx, sprite.swy);
       }

     }

     if(manaSprites.length !== 0)
     {
       for (var i = 0; i < manaSprites.length; i++)
       {
         var sprite = manaSprites[i];


         drawingSurface.drawImage(image, sprite.sx, sprite.sy, sprite.swx, sprite.swy, sprite.x, sprite.y, sprite.swx, sprite.swy);
       }

     }
   }
 }
// function that shoots out the lines attack

 function lineFire()
 {
 if (spaceKeyIsDown){
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
     missile.vx = -14;
   }
   if (moveRight){
     missile.x = line.x + 10;
     missile.y = line.y +  19;
       missile.vx = 14;
   }
   if (moveUp){
     missile.x = line.x - 1;
     missile.y = line.y - 12;
     missile.vy = -14;
   }
   if (moveDown){
     missile.x = line.x - 1;
     missile.y = line.y + 50;
   missile.vy = 14;
 }
 }
 // line sp attack

 if(zIsDown){
   var missile = {
     width: 0,
     height:0,
     sx: 0,
     sy: 0,
     swx: 0,
     swy: 0,
     vx:0,
     vy:0,
     x: 0,
     y: 0,
   }

   if (moveLeft && !moveDown && !moveUp){
     missile.x = canvas.width;
     missile.y = line.y + 20;
     missile.width = 50;
     missile.height = 10;
     missile.sx = 50;
     missile.sy = 0;
     missile.swx = 50;
     missile.swy = 10;
     missile.vx = -10;
   }
   if (moveRight  && !moveDown && !moveUp){
     missile.x = -50;
     missile.y = line.y + 20;
     missile.width = 50;
     missile.height = 10;
     missile.sx = 50;
     missile.sy = 0;
     missile.swx = 50;
     missile.swy = 10;
     missile.vx = 10;
   }
   if (moveUp && !moveLeft && !moveRight){
     missile.x = line.x;
     missile.y = canvas.height;
     missile.width = 10;
     missile.height = 50;
     missile.sx = 0;
     missile.sy = 0;
     missile.swx = 10;
     missile.swy = 50;
     missile.vy = -10;
   }
   if (moveDown && !moveLeft && !moveRight){
     missile.x = line.x;
     missile.y = -50;
     missile.width = 10;
     missile.height = 50;
     missile.sx = 0;
     missile.sy = 0;
     missile.swx = 10;
     missile.swy = 50;
     missile.vy = 10;
   }

 }
 if (spaceKeyIsDown || zIsDown)
 {
   sprites.push(missile);
   missiles.push(missile);
 }

 if(xIsDown){
 var missileUp = {
   width: 10,
   height: 50,
   sx: 0,
   sy: 0,
   swx: 10,
   swy: 50,
   vx:0,
   vy:-21,
   x: line.x,
   y: line.y,
 }

 var missileDown = {
   width: 10,
   height: 50,
   sx: 0,
   sy: 0,
   swx: 10,
   swy: 50,
   vx:0,
   vy:21,
   x: line.x,
   y: line.y,
 }

 var missileRight = {
   width: 50,
   height: 10,
   sx: 50,
   sy: 0,
   swx: 50,
   swy: 10,
   vx:21,
   vy:0,
   x: line.x - 25,
   y: line.y + 20,
 }

 var missileLeft = {
   width: 50,
   height: 10,
   sx: 50,
   sy: 0,
   swx: 50,
   swy: 10,
   vx:-21,
   vy:0,
   x: line.x - 25,
   y: line.y + 20,
 }

 sprites.push(missileUp);
 missiles.push(missileUp);
 sprites.push(missileDown);
 missiles.push(missileDown);
 sprites.push(missileLeft);
 missiles.push(missileLeft);
 sprites.push(missileRight);
 missiles.push(missileRight);

 }

 }

// Increases player mana

function manaIncrease(){
  if (mana.swx < 250)
  {
  mana.swx++;
  }
}
