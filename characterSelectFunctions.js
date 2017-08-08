//function for drawing character select

function drawCharacterSelect (){
if (gameState == CHARACTERSELECT){


title.font = "40pt Arial";

  title.fillText("Select your Shape!", 400, 100);

  if (yellowLeft.x < 293){
    // var item = cSelectLine;

  title.font = "25pt Arial";
  title.fillText("Mr. Line", 200, 225);
  title.font = "15pt Arial";
  title.fillText("Skill 1: Shot Fire", 200, 345);
  title.fillText("Skill 2: Wall Fire", 200, 365);
  title.fillText("Skill 3: Four Way Fire", 200, 385);
}

if (yellowLeft.x < 348 &&  yellowLeft.x > 347){
  // var item = cSelectLine;
title.font = "25pt Arial";
title.fillText("Senorita Triangle", 200, 225);
title.font = "15pt Arial";
title.fillText("Skill 1: Three Way Fire", 200, 345);
title.fillText("Skill 2: Teleport", 200, 365);
title.fillText("Skill 3: Sneak", 200, 385);
}

if (yellowLeft.x < 403 &&  yellowLeft.x > 402){
  // var item = cSelectLine;
title.font = "25pt Arial";
title.fillText("Dr. Square", 200, 225);
title.font = "15pt Arial";
title.fillText("Skill 1: Super Spin", 200, 345);
title.fillText("Skill 2: Speed Swipe", 200, 365);
title.fillText("Skill 3: Reflect", 200, 385);
}

if (yellowLeft.x < 458 &&  yellowLeft.x > 457){
  // var item = cSelectLine;
title.font = "25pt Arial";
title.fillText("The Circle", 200, 225);
title.font = "15pt Arial";
title.fillText("Skill 1: Quick Shot", 200, 345);
title.fillText("Skill 2: Seeking Clone", 200, 365);
title.fillText("Skill 3: Barrier", 200, 385);
}

if (player2){

    if (redLeft.x < 293){
      // var item = cSelectLine;

    title.font = "25pt Arial";
    title.fillText("Mr. Line", 600, 225);
    title.font = "15pt Arial";
    title.fillText("Skill 1: Shot Fire", 600, 345);
    title.fillText("Skill 2: Wall Fire", 600, 365);
    title.fillText("Skill 3: Four Way Fire", 600, 385);
  }

  if (redLeft.x < 348 &&  redLeft.x > 347){
    // var item = cSelectLine;
  title.font = "25pt Arial";
  title.fillText("Senorita Triangle", 600, 225);
  title.font = "15pt Arial";
  title.fillText("Skill 1: Three Way Fire", 600, 345);
  title.fillText("Skill 2: Teleport", 600, 365);
  title.fillText("Skill 3: Sneak", 600, 385);
  }

  if (redLeft.x < 403 &&  redLeft.x > 402){
    // var item = cSelectLine;
  title.font = "25pt Arial";
  title.fillText("Dr. Square", 600, 225);
  title.font = "15pt Arial";
  title.fillText("Skill 1: Super Spin", 600, 345);
  title.fillText("Skill 2: Speed Swipe", 600, 365);
  title.fillText("Skill 3: Reflect", 600, 385);
  }

  if (redLeft.x < 458 &&  redLeft.x > 457){
    // var item = cSelectLine;
  title.font = "25pt Arial";
  title.fillText("The Circle", 600, 225);
  title.font = "15pt Arial";
  title.fillText("Skill 1: Quick Shot", 600, 345);
  title.fillText("Skill 2: Seeking Clone", 600, 365);
  title.fillText("Skill 3: Barrier", 600, 385);
  }

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

      if (yellowLeft.x > 292.1 && yellowLeft.x < 292.99){
      P1 = line;
      if (!player2){
        line2.x = line2.x + 500;
      }

    yellowRemove();
    }


    if (player2){
     if (P2 != null){
    gameState = PLAYING;
  }
}
    if (!player2 && yellowLeft.x > 292.49 && yellowLeft.x < 292.51 && gameState == CHARACTERSELECT && play){
      gameState = PLAYING;
    }
}
      break;

      case Z:
      if (gameState == CHARACTERSELECT){
        play = false;
      if (player2){
        player2 = false;


        // removeObject(8, cSelectSprites);
        if(redLeft.x < 293){
        removeObject(cSelectLine2, cSelectSprites);
        }

        if(redLeft.x < 348 && redLeft.x > 347){
        removeObject(cSelectTriangle2, cSelectSprites);
        }

        if(redLeft.x < 403 && redLeft.x > 402){
        removeObject(cSelectSquare2, cSelectSprites);
        }
        if(redLeft.x < 458 && redLeft.x > 457){
        removeObject(cSelectCircle2, cSelectSprites);
        }

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

      redLeft.x = -100;
      redBottom.x = -100;
      redTop.x = -100;
      redRight.x = -100;
      gameState = MODESELECT;
    }
    break;



      case LEFT2:

      if (player2){

      if (redLeft.x > 292.5){

        if (R1 == redLeft.x){

          if(redLeft.x < 348 && redLeft.x > 347){
          removeObject(cSelectTriangle2, cSelectSprites);
          cSelectSprites.push(cSelectLine2);
          }

          if(redLeft.x < 403 && redLeft.x > 402){
          removeObject(cSelectSquare2, cSelectSprites);
          cSelectSprites.push(cSelectTriangle2);
          }

          if(redLeft.x > 457){
          removeObject(cSelectCircle2, cSelectSprites);
          cSelectSprites.push(cSelectSquare2);
          }

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

          if(redLeft.x < 293){
          removeObject(cSelectLine2, cSelectSprites);
          cSelectSprites.push(cSelectTriangle2);
          }

          if(redLeft.x < 348 && redLeft.x > 347){
          removeObject(cSelectTriangle2, cSelectSprites);
          cSelectSprites.push(cSelectSquare2);
          }

          if(redLeft.x < 403 && redLeft.x > 402){
          removeObject(cSelectSquare2, cSelectSprites);
          cSelectSprites.push(cSelectCircle2);
          }
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
        if (redLeft.x > 292.1 && redLeft.x < 292.99){
        P2 = line2;
        redRemove();
      }
      if (P1 != null){
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

      case SPACE2:
      break;

      case Z2:
      break;


    }
  }, false);

}
