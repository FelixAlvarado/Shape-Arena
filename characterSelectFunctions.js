//function for drawing character select

function drawCharacterSelect (){
if (gameState == CHARACTERSELECT){


title.font = "40pt Arial";

  title.fillText("Select your Shape!", 400, 100);

  if (yellowLeft.x < 293){
    // var item = cSelectLine;

  title.font = "25pt Arial";
  title.fillText("Mr. Line", 400, 225);
  title.font = "15pt Arial";
  title.fillText("Skill 1: Shot Fire", 400, 345);
  title.fillText("Skill 2: Wall Fire", 400, 365);
  title.fillText("Skill 3: Four Way Fire", 400, 385);
}

if (yellowLeft.x < 348 &&  yellowLeft.x > 347){
  // var item = cSelectLine;
title.font = "25pt Arial";
title.fillText("Senorita Triangle", 400, 225);
title.font = "15pt Arial";
title.fillText("Skill 1: Three Way Fire", 400, 345);
title.fillText("Skill 2: Teleport", 400, 365);
title.fillText("Skill 3: Sneak", 400, 385);
}

if (yellowLeft.x < 403 &&  yellowLeft.x > 402){
  // var item = cSelectLine;
title.font = "25pt Arial";
title.fillText("Dr. Square", 400, 225);
title.font = "15pt Arial";
title.fillText("Skill 1: Super Spin", 400, 345);
title.fillText("Skill 2: Speed Swipe", 400, 365);
title.fillText("Skill 3: Reflect", 400, 385);
}

if (yellowLeft.x < 458 &&  yellowLeft.x > 457){
  // var item = cSelectLine;
title.font = "25pt Arial";
title.fillText("The Circle", 400, 225);
title.font = "15pt Arial";
title.fillText("Skill 1: Quick Shot", 400, 345);
title.fillText("Skill 2: Seeking Clone", 400, 365);
title.fillText("Skill 3: Barrier", 400, 385);
}

  if(cSelectSprites.length !== 0)
  {
    for (var i = 0; i < cSelectSprites.length; i++)
    {
      var sprite = cSelectSprites[i];


      drawingSurface.drawImage(image, sprite.sx, sprite.sy, sprite.swx, sprite.swy, sprite.x, sprite.y, sprite.swx, sprite.swy);
    }

  }
}
}


// Fuction for slecting a characterSelect

function characterSelect()
{

  var Y1 = yellowLeft.x;
  var R1 = redLeft.x;
  window.addEventListener("keydown", function(event)
  {
    switch(event.keyCode){

      case LEFT:
      if (yellowLeft.x > 292.5){

        if (Y1 == yellowLeft.x){

          if(yellowLeft.x < 348 && yellowLeft.x > 347){
          removeObject(cSelectTriangle, cSelectSprites);
          cSelectSprites.push(cSelectLine);
          }

          if(yellowLeft.x < 403 && yellowLeft.x > 402){
          removeObject(cSelectSquare, cSelectSprites);
          cSelectSprites.push(cSelectTriangle);
          }

          if(yellowLeft.x > 457){
          removeObject(cSelectCircle, cSelectSprites);
          cSelectSprites.push(cSelectSquare);
          }

        yellowLeft.x = yellowLeft.x - 55;
        yellowRight.x = yellowRight.x - 55;
        yellowTop.x = yellowTop.x - 55;
        yellowBottom.x = yellowBottom.x - 55;
      }
        }

      break;


      case RIGHT:
      if (yellowLeft.x < 457.5){

        if (Y1 == yellowLeft.x){

          if(yellowLeft.x < 293){
          removeObject(cSelectLine, cSelectSprites);
          cSelectSprites.push(cSelectTriangle);
          }

          if(yellowLeft.x < 348 && yellowLeft.x > 347){
          removeObject(cSelectTriangle, cSelectSprites);
          cSelectSprites.push(cSelectSquare);
          }

          if(yellowLeft.x < 403 && yellowLeft.x > 402){
          removeObject(cSelectSquare, cSelectSprites);
          cSelectSprites.push(cSelectCircle);
          }
          if (yellowLeft.x < 404) {
        yellowLeft.x = yellowLeft.x + 55;
        yellowRight.x = yellowRight.x + 55;
        yellowTop.x = yellowTop.x + 55;
        yellowBottom.x = yellowBottom.x + 55;
}

      }
      }
      break;

      case SPACE:
      if (gameState == CHARACTERSELECT){
      if (yellowLeft.x == 292.5){
      gameState = PLAYING;
    }
}
      break;

      case Z:
      if (gameState == CHARACTERSELECT){

      if (player2){
        player2 = false;
        removeObject(8, cSelectSprites);
      }


      if(yellowLeft.x < 293){
      removeObject(cSelectLine, cSelectSprites);
      }

      if(yellowLeft.x < 348 && yellowLeft.x > 347){
      removeObject(cSelectTriangle, cSelectSprites);
      }

      if(yellowLeft.x < 403 && yellowLeft.x > 402){
      removeObject(cSelectSquare, cSelectSprites);
      }

      if(yellowLeft.x < 458 && yellowLeft.x > 457){
      removeObject(cSelectCircle, cSelectSprites);
      }
      cSelectSprites.push(cSelectLine);
      yellowLeft.x = 292.499;
      yellowBottom.x = 292.5;
      yellowTop.x = 292.5;
      yellowRight.x = 337.5;
      redLeft.x = 457.499;
      redBottom.x = 457.5;
      redTop.x = 457.5;
      redRight.x = 502.5;
      gameState = MODESELECT;
    }
    break;



      case LEFT2:

      if (player2){

      if (redLeft.x > 292.5){

        if (R1 == redLeft.x){

          // if(redLeft.x < 348 && redLeft.x > 347){
          // removeObject(cSelectTriangle, cSelectSprites);
          // cSelectSprites.push(cSelectLine);
          //}

          // if(redLeft.x < 403 && redLeft.x > 402){
          // removeObject(cSelectSquare, cSelectSprites);
          // cSelectSprites.push(cSelectTriangle);
          //}

          // if(redLeft.x > 457){
          // removeObject(cSelectCircle, cSelectSprites);
          // cSelectSprites.push(cSelectSquare);
          //}

        redLeft.x = redLeft.x - 55;
        redRight.x = redRight.x - 55;
        redTop.x = redTop.x - 55;
        redBottom.x = redBottom.x - 55;

      }
        }
}
      break;


      case RIGHT2:
      if(player2){
      if (redLeft.x < 457.5){

        if (R1 == redLeft.x){

          // if(redLeft.x < 293){
          // removeObject(cSelectLine, cSelectSprites);
          // cSelectSprites.push(cSelectTriangle);
          //}

          // if(redLeft.x < 348 && redLeft.x > 347){
          // removeObject(cSelectTriangle, cSelectSprites);
          // cSelectSprites.push(cSelectSquare);
          //}

          //if(redLeft.x < 403 && redLeft.x > 402){
          // removeObject(cSelectSquare, cSelectSprites);
          // cSelectSprites.push(cSelectCircle);
          //}
          if (redLeft.x < 404) {
        redLeft.x = redLeft.x + 55;
        redRight.x = redRight.x + 55;
        redTop.x = redTop.x + 55;
        redBottom.x = redBottom.x + 55;
  }

      }
      }
    }
      break;

      case SPACE2:
      if(player2){
      if (gameState == CHARACTERSELECT){
      if (redLeft.x == 292.5){
      gameState = PLAYING;
    }
  }
}
      break;

      // case Z2:
      // if (gameState == CHARACTERSELECT){
      //
      // if (player2){
      //   player2 = false;
      //   removeObject(8, cSelectSprites);
      // }


    //   if(redLeft.x < 293){
    //   removeObject(cSelectLine, cSelectSprites);
    //   }
    //
    //   if(redLeft.x < 348 && redLeft.x > 347){
    //   removeObject(cSelectTriangle, cSelectSprites);
    //   }
    //
    //   if(yellowLeft.x < 403 && yellowLeft.x > 402){
    //   removeObject(cSelectSquare, cSelectSprites);
    //   }
    //
    //   if(yellowLeft.x < 458 && yellowLeft.x > 457){
    //   removeObject(cSelectCircle, cSelectSprites);
    //   }
    //   cSelectSprites.push(cSelectLine);
    //   yellowLeft.x = 292.499;
    //   yellowBottom.x = 292.5;
    //   yellowTop.x = 292.5;
    //   yellowRight.x = 337.5;
    //   gameState = MODESELECT;
    // }

    // break;




    }
  }, false);

  window.addEventListener("keyup", function(event)
  {
    switch(event.keyCode){

      case LEFT:
      Y1 = yellowLeft.x;

      break;

      case RIGHT:
      Y1 = yellowLeft.x;
      break;

      case SPACE:
      break;

      case Z:
      break;

      case LEFT2:
      R1 = redLeft.x;
      break;

      case RIGHT2:
      R1 = redLeft.x;
      break;



    }
  }, false);

}
