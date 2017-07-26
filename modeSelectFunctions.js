//draws the select screen for the game

function drawSelectGame(){
if (gameState == MODESELECT)
{
  title.font = "40pt Arial";
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
  if (gameState == MODESELECT){
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
      if (gameState == MODESELECT){
      if (select1.y == 275 || select1.y == 350){

      gameState = CHARACTERSELECT;

}
      if (select1.y == 350){
        player2 = true;
        // cSelectSprites.splice(3, 0, redLeft);
        // cSelectSprites.splice(5, 0, redRight);
        // cSelectSprites.splice(6, 0, redTop);
        // cSelectSprites.splice(8, 0, redBottom);
        redLeft.x = 457.499;
        redBottom.x = 457.5;
        redTop.x = 457.5;
        redRight.x = 502.5;
        cSelectSprites.push(cSelectCircle2);
      }
      select1.y = 275;
      select2.y = 275;
    }
      break;



    }
  }, false);

  window.addEventListener("keyup", function(event)
  {
    switch(event.keyCode){

      case UP:
      break;

      case DOWN:
      break;

      case SPACE:
      if (player2){
        play = true;
      }
      break;



    }
  }, false);
}
}
