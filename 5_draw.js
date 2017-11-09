function draw() 
{
    // clear the previous frame
    clear()

    var pL = sprites.paddleLeft, 
        pR = sprites.paddleRight,
        pT = sprites.paddleTop,
        pB = sprites.paddleBottom,
//        wT = sprites.wallTop,
//        wB = sprites.wallBottom,
        ball = sprites.ball,
        swing

    // top and bottom walls
//    ball.bounce(wT)
//    ball.bounce(wB)

    // paddleLeft, aka Labour
    if (keyDown("w")) pL.position.y -= PADDLE_MOVEMENT
    if (keyDown("s")) pL.position.y += PADDLE_MOVEMENT
    pL.position.y = constrain(pL.position.y, pL.height/2, height-pL.height/2)
    
    // paddleRight, aka Tory
    if (keyDown(UP_ARROW)) pR.position.y -= PADDLE_MOVEMENT
    if (keyDown(DOWN_ARROW)) pR.position.y += PADDLE_MOVEMENT
    pR.position.y = constrain(pR.position.y, pL.height/2, height-pL.height/2)
    
    // paddleTop, aka Green
    if (keyDown("7")) pT.position.x -= PADDLE_MOVEMENT
    if (keyDown("8")) pT.position.x += PADDLE_MOVEMENT
    pT.position.x = constrain(pT.position.x, pT.width/2, width-pT.width/2)
    
    // paddleBottom, aka LibDem
    if (keyDown("v")) pB.position.x -= PADDLE_MOVEMENT
    if (keyDown("b")) pB.position.x += PADDLE_MOVEMENT
    pB.position.x = constrain(pB.position.x, pB.width/2, width-pB.width/2)
    
  
    
    // TODO swing
    if (ball.bounce(pL)) 
    {
    swing = (ball.position.y - pL.position.y)/3
    ball.setSpeed(BALL_SPEED, ball.getDirection() + swing)
    }

    if(ball.bounce(pR)) 
    {
    swing = (ball.position.y - pR.position.y)/3
    ball.setSpeed(BALL_SPEED, ball.getDirection() - swing)
    }
    
    
    
    // TODO missed
    // player A missed
    if(ball.position.x < 0) 
    {
    ball.position.x = width/2
    ball.position.y = height/2
    ball.setSpeed(BALL_SPEED, 0)
    }

    // player B missed
    if(ball.position.x>width) 
    {
    ball.position.x = width/2
    ball.position.y = height/2
    ball.setSpeed(BALL_SPEED, 180)	
    }
   
    
    // redraw everything
    drawSprites()
    // you can find the drawEmojis function in 2_tools.js
    drawEmojis(pL, 'emojis', 'rose', 'vertical') 
    drawEmojis(pR, 'emojis', 'oak', 'vertical')
    drawEmojis(pT, 'emojis', 'globe', 'horizontal')
    drawEmojis(pB, 'emojis', 'dove','horizontal')
    
}