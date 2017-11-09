function draw() 
{
    // clear the previous frame
    clear()

    var pL = sprites.paddleLeft, 
        pR = sprites.paddleRight,
        wT = sprites.wallTop,
        wB = sprites.wallBottom,
        ball = sprites.ball

    // top and bottom walls
    ball.bounce(wT)
    ball.bounce(wB)

    // paddleLeft
    if (keyDown("w")) pL.position.y -= PADDLE_MOVEMENT
    if (keyDown("s")) pL.position.y += PADDLE_MOVEMENT
    pL.position.y = constrain(pL.position.y, pL.height/2, height-pL.height/2)
    
    // paddleRight
    if (keyDown(UP_ARROW)) pR.position.y -= PADDLE_MOVEMENT
    if (keyDown(DOWN_ARROW)) pR.position.y += PADDLE_MOVEMENT
    pR.position.y = constrain(pR.position.y, pR.height/2, height-pR.height/2)
    
    // swing
    if (ball.bounce(pL)) 
    {
        swing = (ball.position.y - pL.position.y) * SWING_FACTOR
        ball.setSpeed(BALL_SPEED, ball.getDirection() + swing)
    }
    else if (ball.bounce(pR)) 
    {
        swing = (ball.position.y - pR.position.y) * SWING_FACTOR
        ball.setSpeed(BALL_SPEED, ball.getDirection() - swing)
    }
     
    // paddleLeft missed
    if(ball.position.x < 0) 
    {
        ball.position.x = width/2
        ball.position.y = height/2
        ball.setSpeed(BALL_SPEED, random(0,360))
    }
    // paddleRight missed
    else if(ball.position.x > width) 
    {
        ball.position.x = width/2
        ball.position.y = height/2
        ball.setSpeed(BALL_SPEED, random(0,360))
    }
   
    
    // redraw everything
    drawSprites()
}