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
  redLeft.y = -100;
  redBottom.y = -100;
  redTop.y = -100;
  redRight.y = -100;
}
}



//removes yellow selecter during 2  player character select
function yellowRemove(){
  if (player2){
  yellowLeft.y = -100;
  yellowBottom.y = -100;
  yellowTop.y = -100;
  yellowRight.y = -100;
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

      if (!moveDown && !moveUp && !moveLeft && !moveRight && P1 != square)
      {
        break;
      }
      if(!spaceKeyIsDown)
      {
        if (mana.swx >= 25 && P1 == line){
        lineShoot = true;
      }
      if (mana.swx >= 25 && P1 == triangle){
        triangleShoot = true;
      }
      if (mana.swx >= 30 && P1 == circle){
        circleShoot = true;
      }

        spaceKeyIsDown = true;


      }


      break;

      case Z:

      if (!moveDown && !moveUp && !moveLeft && !moveRight && P1 != square)
      {
        break;
      }
      if(!zIsDown)
      {
        if (mana.swx >= 50 && P1 == line){
        lineShoot = true;
      }

      if (mana.swx >= 75 && P1 == triangle){
      triangleShoot = true;
    }
        zIsDown = true;

        if(P1 == square){
          squareHit = true;
        }
        if (player2){
          if (collision(P1,P2)){
            squareHit = false;
          }
        }


      }
      break;

      case X:

      if (!xIsDown)
      {
        if (mana.swx >= 50 && P1 == line){
        mana.swx = mana.swx - 50;
        lineShoot = true;
      }
      if (mana.swx >= 100 && P1 == triangle){
        mana.swx = mana.swx - 100;
        triangleShoot = true;
      }
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


      if (!moveDown2 && !moveUp2 && !moveLeft2 && !moveRight2 && P2 != square2)
      {

        break;
      }

      if(!spaceKeyIsDown2 && player2)
      {
        if (P2 == line2 && mana2.swx >= 25){
        mana2.swx = mana2.swx - 25;
        lineShoot2 = true;
      }

      if (P2 == triangle2 && mana2.swx >= 25){
      mana2.swx = mana2.swx - 25;
      triangleShoot2 = true;
    }

    spaceKeyIsDown2 = true;
      }

      break;

      case Z2:
      if (player2){
      if (!moveDown2 && !moveUp2 && !moveLeft2 && !moveRight2 && P2 != square2)
      {
        break;
      }
      if(!zIsDown2)
      {
        // mana2.swx = mana2.swx - 75;
        if (P2 == line2 && mana2.swx >= 50){
        lineShoot2 = true;
      }
        zIsDown2 = true;
        triangleShoot2 = true;
        if(P2 == square2){
          squareHit2 = true;
        }
        if (player2){
          if (collision(P1,P2)){
            squareHit2 = false;
          }
        }

      }
    }
      break;

      case X2:
      if (player2) {
      if (!xIsDown2)
      {
        if (mana2.swx >= 50 && P2 == line2){
        lineShoot2 = true;
        mana2.swx = mana2.swx - 50;
      }
        xIsDown2 = true;
        if (mana2.swx >= 100 && P2 == triangle2){
          mana2.swx = mana2.swx - 100;
          triangleShoot2 = true;
        }
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
    squareHit = false;
    break;

    case X:
    xIsDown = false;
    reflect = false;
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

         if (spaceKeyIsDown || zIsDown || xIsDown || spaceKeyIsDown2 || zIsDown2 || xIsDown2){

         if ((sprite == square && mana.swx > 0) || (sprite == square2 && mana2.swx > 0)){
           drawingSurface.save();

           drawingSurface.translate(
             Math.floor(sprite.x + (sprite.width / 2)),
             Math.floor(sprite.y + (sprite.width / 2))
           );

           drawingSurface.rotate(sprite.rotation*Math.PI / 180);

            drawingSurface.drawImage(image, sprite.sx, sprite.sy, sprite.swx, sprite.swy, Math.floor(-sprite.width / 2), Math.floor(-sprite.height / 2), sprite.width, sprite.height);

         }
         else{
         drawingSurface.drawImage(image, sprite.sx, sprite.sy, sprite.swx, sprite.swy, sprite.x, sprite.y, sprite.swx, sprite.swy);
}
       }
         else{
         drawingSurface.drawImage(image, sprite.sx, sprite.sy, sprite.swx, sprite.swy, sprite.x, sprite.y, sprite.swx, sprite.swy);
}
    if(spaceKeyIsDown || zIsDown || xIsDown || spaceKeyIsDown2 || zIsDown2 || xIsDown2){
         if ((sprite == square && mana.swx > 0) || (sprite == square2 && mana2.swx > 0)){
           drawingSurface.restore();
       }
     }
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

// circle attacks
function circleFire() {
  if (spaceKeyIsDown){
        mana.swx = mana.swx - 30;
    var missile = {
      width: 12,
      height:12,
      sx: 138,
      sy: 38,
      swx: 12,
      swy: 12,
      vx:0,
      vy:0,
      x: P1.x + 19,
      y: P1.y + 19,
      dmg: 20,
      reflect: false
    }

    if (moveLeft){
      missile.vx = -21;
    }
    if (moveRight){
        missile.vx = 21;
    }
    if (moveUp){
      missile.vy = -21;
    }
    if (moveDown){
    missile.vy = 21;
  }
  sprites.push(missile);
  missiles.push(missile);
  }


}
 //square attacks

function squareFire2(){
if(spaceKeyIsDown2 && mana2.swx > 0){
  P2.rotation = P2.rotation + 20;
  P2.vx = P2.vx*1.5;
  P2.vy = P2.vy*1.5;
  mana2.swx = mana2.swx - 2;
  if (player2){
  if(collision(P1,P2) && mana2.swx > 0){
    health.swx = health.swx - 2;
}
  }
}

if(zIsDown2 && mana2.swx > 0){
  P2.rotation = P2.rotation + 40;
  P2.vx = P2.vx*2.5;
  P2.vy = P2.vy*2.5;
  mana2.swx = mana2.swx - 4;
  if (player2){
  if(collision(P1,P2) && mana2.swx > 0 && squareHit2){
    health.swx = health.swx - 45;
    squareHit2 = false;
}
  }
}

if(xIsDown2 && mana2.swx > 0){
  P2.rotation = P2.rotation + 30;
  P2.vx = 0;
  P2.vy = 0;
  mana2.swx = mana2.swx - 3;
  if (player2){
    reflect2 = true;
  }
}


}
 //square attacks

function squareFire(){
if(spaceKeyIsDown && mana.swx > 0){
  P1.rotation = P1.rotation + 20;
  P1.vx = P1.vx*1.5;
  P1.vy = P1.vy*1.5;
  mana.swx = mana.swx - 2;
  if (player2){
  if(collision(P1,P2) && mana.swx > 0){
    health2.swx = health2.swx - 2;
}
  }
}

if(zIsDown && mana.swx > 0){
  P1.rotation = P1.rotation + 40;
  P1.vx = P1.vx*2.5;
  P1.vy = P1.vy*2.5;
  mana.swx = mana.swx - 4;
  if (player2){
  if(collision(P1,P2) && mana.swx > 0 && squareHit){
    health2.swx = health2.swx - 45;
    squareHit = false;
}
  }
}

if(xIsDown && mana.swx > 0){
  P1.rotation = P1.rotation + 30;
  P1.vx = 0;
  P1.vy = 0;
  mana.swx = mana.swx - 3;
  if (player2){
    reflect = true;
  }
}


}

 // triangle attackes

 function triangleFire()
 {

 if (spaceKeyIsDown){
   mana.swx = mana.swx- 25;
   var missile = {
     width: 12,
     height:12,
     sx: 138,
     sy: 0,
     swx: 12,
     swy: 12,
     vx:0,
     vy:0,
     x:  P1.x + 19,
     y: P1.y +  19,
     dmg: 10,
     reflect: false
   }

   var missile2 = {
     width: 12,
     height:12,
     sx: 138,
     sy: 0,
     swx: 12,
     swy: 12,
     vx:0,
     vy:0,
     x: P1.x + 19,
     y: P1.y + 19,
     dmg: 10,
     reflect: false
   }

   var missile3 = {
     width: 12,
     height:12,
     sx: 138,
     sy: 0,
     swx: 12,
     swy: 12,
     vx:0,
     vy:0,
     x: P1.x + 19,
     y: P1.y + 19,
     dmg: 10,
     reflect: false
   }

   if (moveLeft){
     missile.vx = -14;
     missile2.vx = -14;
     missile2.vy = 3;
     missile3.vx = -14;
     missile3.vy = -3;
   }
   if (moveRight){
       missile.vx = 14;
       missile2.vx = 14;
       missile2.vy = -3;
       missile3.vx = 14;
       missile3.vy = 3;
   }
   if (moveUp){
     missile.vy = -14;
     missile2.vx = 3;
     missile2.vy = -14;
     missile3.vx = -3;
     missile3.vy = -14;
   }
   if (moveDown){
   missile.vy = 14;
   missile2.vx = -3;
   missile2.vy = 14;
   missile3.vx = 3;
   missile3.vy = 14;
 }
 }
 // line sp attack

 if(zIsDown){
mana.swx = mana.swx - 75;
if (moveRight){
  triangle.x = triangle.x + 150;
}

if (moveLeft){
  triangle.x = triangle.x - 150;
}

if (moveUp){
  triangle.y = triangle.y - 150;
}

if (moveDown){
  triangle.y = triangle.y + 150;
}


 }
 if (spaceKeyIsDown)
 {
   sprites.push(missile);
   missiles.push(missile);
   sprites.push(missile2);
   missiles.push(missile2);
   sprites.push(missile3);
   missiles.push(missile3);
 }

 if(xIsDown && player2){
if (P2.x < 400){
P1.x = P2.x - 50;
}
if (P2.x >= 400){
P1.x = P2.x + 50;
}

P1.y = P2.y;


}
 }

 // triangle 2 attacks

 function triangleFire2()
 {
 if (spaceKeyIsDown2){

   var missile = {
     width: 12,
     height:12,
     sx: 138,
     sy: 0,
     swx: 12,
     swy: 12,
     vx:0,
     vy:0,
     x:  P2.x + 19,
     y: P2.y +  19,
     dmg: 10,
     reflect: false
   }

   var missile2 = {
     width: 12,
     height:12,
     sx: 138,
     sy: 0,
     swx: 12,
     swy: 12,
     vx:0,
     vy:0,
     x: P2.x + 19,
     y: P2.y + 19,
     dmg: 10,
     reflect: false
   }

   var missile3 = {
     width: 12,
     height:12,
     sx: 138,
     sy: 0,
     swx: 12,
     swy: 12,
     vx:0,
     vy:0,
     x: P2.x + 19,
     y: P2.y + 19,
     dmg: 10,
     reflect: false
   }

   if (moveLeft2){
     missile.vx = -14;
     missile2.vx = -14;
     missile2.vy = 3;
     missile3.vx = -14;
     missile3.vy = -3;
   }
   if (moveRight2){
       missile.vx = 14;
       missile2.vx = 14;
       missile2.vy = -3;
       missile3.vx = 14;
       missile3.vy = 3;
   }
   if (moveUp2){
     missile.vy = -14;
     missile2.vx = 3;
     missile2.vy = -14;
     missile3.vx = -3;
     missile3.vy = -14;
   }
   if (moveDown2){
   missile.vy = 14;
   missile2.vx = -3;
   missile2.vy = 14;
   missile3.vx = 3;
   missile3.vy = 14;
 }
 }
 // triagle2 sp attack

 if(zIsDown2){
   if (mana2.swx >= 75){
mana2.swx = mana2.swx - 75;
if (moveRight2){
  triangle2.x = triangle2.x + 150;
}

if (moveLeft2){
  triangle2.x = triangle2.x - 150;
}

if (moveUp2){
  triangle2.y = triangle2.y - 150;
}

if (moveDown2){
  triangle2.y = triangle2.y + 150;
}
}


 }
 if (spaceKeyIsDown2)
 {
   sprites.push(missile);
   missiles2.push(missile);
   sprites.push(missile2);
   missiles2.push(missile2);
   sprites.push(missile3);
   missiles2.push(missile3);
 }

 if(xIsDown2 && player2){
if (P1.x < 400){
P2.x = P1.x - 50;
}
if (P1.x >= 400){
P2.x = P1.x + 50;
}

P2.y = P1.y;


}
 }

// function that shoots out the lines attack

 function lineFire()
 {

 if (spaceKeyIsDown){
       mana.swx = mana.swx - 25;
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
     dmg: 15,
     reflect: false
   }

   if (moveLeft){
     missile.x = line.x;
     missile.y = line.y +  19;
     missile.vx = -14;
   }
   if (moveRight){
     missile.x = line.x;
     missile.y = line.y +  19;
       missile.vx = 14;
   }
   if (moveUp){
     missile.x = line.x - 1;
     missile.y = line.y;
     missile.vy = -14;
   }
   if (moveDown){
     missile.x = line.x - 1;
     missile.y = line.y + 38;
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
     dmg: 30,
     reflect: false
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
   dmg: 30,
   reflect: false
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
   dmg: 30,
   reflect: false
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
   dmg: 30,
   reflect: false
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
   dmg: 30,
   reflect: false
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
       dmg: 15,
       reflect: false
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
       dmg: 30,
       reflect: false
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
     dmg: 30,
     reflect: false
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
     dmg: 30,
     reflect: false
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
     dmg: 30,
     reflect: false
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
     dmg: 30,
     reflect: false
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
