// loading stuff

function loadHandler()
{
  assetsLoaded++;
  if(assetsLoaded === assetsToLoad.length)
  {
    image.removeEventListener("load", loadHandler, false);

    gameState = MODESELECT;
  }
}


//end game
function endGame()
{

if (health.swx <= 0){
  title.font = "40pt Arial";
  title.fillText("Player 2 Wins!!!", 400, 100);
}

if (health2.swx <= 0){
  title.font = "40pt Arial";
  title.fillText("Player 1 Wins!!!", 400, 100);
}
}

//finding x center of onbect
function centerX(x){
var centerX = x.x + (x.width)/2
return centerX;

}

//finding y center of onbect
function centerY(y){
var centerY = y.y + (y.height)/2
return centerY;

}

//finding half width
function halfWidth(x){
var halfW = (x.width)/2
return halfW;

}

//finding half height
function halfHeight(y){
var halfH = (y.height)/2
return halfH;

}

//collision function

function collision(x,y){
  var hit = false;

  var vx = centerX(x) - centerX(y);
  var vy = centerY(x) - centerY(y);

  var combinedHalfWidths = halfWidth(x) + halfWidth(y);
  var combinedHalfHeights = halfHeight(x) + halfHeight(y);

  if(Math.abs(vx) < combinedHalfWidths){

    if(Math.abs(vy) < combinedHalfHeights){
      hit = true;
    }
    else{
      hit = false;
    }
  }
  else {
    hit = false;
  }
  return hit;
}

//removes red selecter during 2  player character select
function redRemove(){
  if (player2){
  redLeft.x = -100;
  redBottom.x = -100;
  redTop.x = -100;
  redRight.x = -100;
}
}



//removes yellow selecter during 2  player character select
function yellowRemove(){
  if (player2){
  yellowLeft.x = -100;
  yellowBottom.x = -100;
  yellowTop.x = -100;
  yellowRight.x = -100;
}
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
      if (pauseGame && select3.y > 275){
        select3.y = select3.y - 100;
        select4.y = select4.y - 100;
        select3.x = select3.x + 30;
        select4.x = select4.x - 30;
      }
      break;

      case DOWN:
      moveDown = true;
      if (pauseGame && select3.y < 350){
        select3.y = select3.y + 100;
        select4.y = select4.y + 100;
        select3.x = select3.x - 30;
        select4.x = select4.x + 30;
      }
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
      if (mana.swx < 50)
      {
        break;
      }
      if (!moveDown && !moveUp && !moveLeft && !moveRight)
      {
        break;
      }
      if(!zIsDown)
      {
        lineShoot = true;
        zIsDown = true;

      }
      break;

      case X:
      if (mana.swx < 50)
      {
        break;
      }
      if (!xIsDown)
      {
        mana.swx = mana.swx - 50;
        lineShoot = true;
        xIsDown = true;
      }
      break;

      case LEFT2:
      if (player2){
      moveLeft2 = true;
    }
      break;

      case RIGHT2:
      if (player2) {
      moveRight2 = true;
    }
      break;

      case UP2:
      if (player2){
      moveUp2 = true;
    }
      break;

      case DOWN2:
      if (player2){
      moveDown2 = true;
    }
      break;

      case SPACE2:
      if (player2){
      if (mana2.swx < 25)
      {
        break;
      }
      if (!moveDown2 && !moveUp2 && !moveLeft2 && !moveRight2)
      {

        break;
      }
      if(!spaceKeyIsDown2)
      {

        mana2.swx = mana2.swx - 25;
        lineShoot2 = true;
        spaceKeyIsDown2 = true;

      }
}
      break;

      case Z2:
      if (player2){
      if (mana2.swx < 50)
      {
        break;
      }
      if (!moveDown2 && !moveUp2 && !moveLeft2 && !moveRight2)
      {
        break;
      }
      if(!zIsDown2)
      {
        // mana2.swx = mana2.swx - 75;
        lineShoot2 = true;
        zIsDown2 = true;

      }
    }
      break;

      case X2:
      if (player2) {
      if (mana2.swx < 50)
      {
        break;
      }
      if (!xIsDown2)
      {
        mana2.swx = mana2.swx - 50;
        lineShoot2 = true;
        xIsDown2 = true;
      }
    }
    break;

    case PAUSE:
    if (gameState == PLAYING && !pauseGame && !pauseSwitch){
      pauseGame = true;

    }
  //   if (pauseGame){
  //   console.log(pauseSwitch);
  //   console.log(select3.y);
  //   console.log(pauseGame);
  // }
    if (pauseGame && select3.y == 275 && pauseSwitch){
      pauseGame = false;
    }

    if (pauseGame && select3.y == 375 && pauseSwitch){
      location.reload();
    }

    break;
  }
}, false);


  // }, false);


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

    case LEFT2:
    if (player2){
    moveLeft2 = false;

  }
    break;

    case RIGHT2:
    if (player2) {
    moveRight2 = false;
  }
    break;

    case UP2:
    if (player2){
    moveUp2 = false;
  }
    break;

    case DOWN2:
    if (player2) {
    moveDown2 = false;
  }
    break;

    case SPACE2:
    if (player2) {
    spaceKeyIsDown2 = false;
  }

    break;

    case Z2:
    if (player2){
    zIsDown2 = false;
  }
    break;

    case X2:
    xIsDown2 = false;
    break;

    case PAUSE:
    if (gameState == PLAYING && pauseGame){
      pauseSwitch = true;
    }
    if (gameState == PLAYING && !pauseGame){
      pauseSwitch = false;
    }

    break;
  }
},false);
}


// draws all of the sprites in the game

function drawPlayGame()
 {
   if (gameState == PLAYING)
   {
     if (pauseGame){
       title.font = "40pt Arial";
       title.fillText("Pause", 400, 100);
       title.fillText("Resume", 400, 300);
       title.fillText("Quit Game", 400, 400);

       if(pauseSprites.length !== 0)
       {
         for (var i = 0; i < pauseSprites.length; i++)
         {
           var sprite = pauseSprites[i];


           drawingSurface.drawImage(image, sprite.sx, sprite.sy, sprite.swx, sprite.swy, sprite.x, sprite.y, sprite.swx, sprite.swy);
         }

       }
     }
     if (!pauseGame){
     if(sprites.length !== 0)
     {
       for (var i = 0; i < sprites.length; i++)
       {
         var sprite = sprites[i];


         drawingSurface.drawImage(image, sprite.sx, sprite.sy, sprite.swx, sprite.swy, sprite.x, sprite.y, sprite.swx, sprite.swy);
       }

     }

     if(player2) {
       manaSprites.push(health2);
       manaSprites.push(hTop2);
       manaSprites.push(hBottom2);
       manaSprites.push(hLeft2);
       manaSprites.push(hRight2);
       manaSprites.push(mana2);
       manaSprites.push(mbTop2);
       manaSprites.push(mbBottom2);
       manaSprites.push(mbLeft2);
       manaSprites.push(mbRight2);
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
     dmg: 15
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
     dmg: 30
   }

   if (moveLeft && !moveDown && !moveUp){
     mana.swx = mana.swx - 50;
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
     mana.swx = mana.swx - 50;
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
     mana.swx = mana.swx - 50;
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
     mana.swx = mana.swx - 50;
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
   dmg: 30
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
   dmg: 30
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
   dmg: 30
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
   dmg: 30
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

 //linefire 2

 function lineFire2() {

   //player2 missiles
  if (player2) {
   if (spaceKeyIsDown2){
     var missile2 = {
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
       dmg: 15
     }

     if (moveLeft2){
       missile2.x = line2.x - 12;
       missile2.y = line2.y +  19;
       missile2.vx = -14;
     }

     if (moveRight2){
       missile2.x = line2.x + 10;
       missile2.y = line2.y +  19;
         missile2.vx = 14;
     }
     if (moveUp2){
       missile2.x = line2.x - 1;
       missile2.y = line2.y - 12;
       missile2.vy = -14;
     }
     if (moveDown2){
       missile2.x = line2.x - 1;
       missile2.y = line2.y + 50;
       missile2.vy = 14;
   }
   }
   // line sp attack

   if(zIsDown2){
     var missile2 = {
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
       dmg: 30
     }

     if (moveLeft2 && !moveDown2 && !moveUp2){
       mana2.swx = mana2.swx - 50;
       missile2.x = canvas.width;
       missile2.y = line2.y + 20;
       missile2.width = 50;
       missile2.height = 10;
       missile2.sx = 50;
       missile2.sy = 0;
       missile2.swx = 50;
       missile2.swy = 10;
       missile2.vx = -10;
     }
     if (moveRight2  && !moveDown2 && !moveUp2){
       mana2.swx = mana2.swx - 50;
       missile2.x = -50;
       missile2.y = line2.y + 20;
       missile2.width = 50;
       missile2.height = 10;
       missile2.sx = 50;
       missile2.sy = 0;
       missile2.swx = 50;
       missile2.swy = 10;
       missile2.vx = 10;
     }
     if (moveUp2 && !moveLeft2 && !moveRight2){
       mana2.swx = mana2.swx - 50;
       missile2.x = line2.x;
       missile2.y = canvas.height;
       missile2.width = 10;
       missile2.height = 50;
       missile2.sx = 0;
       missile2.sy = 0;
       missile2.swx = 10;
       missile2.swy = 50;
       missile2.vy = -10;
     }
     if (moveDown2 && !moveLeft2 && !moveRight2){
       mana2.swx = mana2.swx - 50;
       missile2.x = line2.x;
       missile2.y = -50;
       missile2.width = 10;
       missile2.height = 50;
       missile2.sx = 0;
       missile2.sy = 0;
       missile2.swx = 10;
       missile2.swy = 50;
       missile2.vy = 10;
     }

   }
   if (spaceKeyIsDown2 || zIsDown2)
   {
     sprites.push(missile2);
     missiles2.push(missile2);
   }

   if(xIsDown2){
   var missileUp2 = {
     width: 10,
     height: 50,
     sx: 0,
     sy: 0,
     swx: 10,
     swy: 50,
     vx:0,
     vy:-21,
     x: line2.x,
     y: line2.y,
     dmg: 30
   }

   var missileDown2 = {
     width: 10,
     height: 50,
     sx: 0,
     sy: 0,
     swx: 10,
     swy: 50,
     vx:0,
     vy:21,
     x: line2.x,
     y: line2.y,
     dmg: 30
   }

   var missileRight2 = {
     width: 50,
     height: 10,
     sx: 50,
     sy: 0,
     swx: 50,
     swy: 10,
     vx:21,
     vy:0,
     x: line2.x - 25,
     y: line2.y + 20,
     dmg: 30
   }

   var missileLeft2 = {
     width: 50,
     height: 10,
     sx: 50,
     sy: 0,
     swx: 50,
     swy: 10,
     vx:-21,
     vy:0,
     x: line2.x - 25,
     y: line2.y + 20,
     dmg: 30
   }



  sprites.push(missileUp2);
  missiles2.push(missileUp2);
  sprites.push(missileDown2);
  missiles2.push(missileDown2);
  sprites.push(missileLeft2);
  missiles2.push(missileLeft2);
  sprites.push(missileRight2);
  missiles2.push(missileRight2);
}
 }
}
// Increases player mana

function manaIncrease() {
if (!pauseGame){
  if (mana.swx < 250)
  {
  mana.swx++;
  }

  if(player2){
    if (mana2.swx < 250)
    {
    mana2.swx++;
    }
  }
}
}
