function draw() 
{
    // clear the previous frame
    clear()

    var pL = sprites.paddleLeft, 
        wT = sprites.wallTop,
        ball = sprites.ball

    // wallTop bounce
    ball.bounce(wT)
    // wallBottom bounce
    // TODO 

    // paddleLeft
    if (keyDown("w")) pL.position.y -= PADDLE_MOVEMENT
    if (keyDown("s")) pL.position.y += PADDLE_MOVEMENT
    pL.position.y = constrain(pL.position.y, pL.height/2, height-pL.height/2)
    
    // paddleRight
    // TODO
    
    // what happens when ball bounces off paddleLeft
    if (ball.bounce(pL)) 
    {
        swing = (ball.position.y - pL.position.y) * SWING_FACTOR
        ball.setSpeed(BALL_SPEED, ball.getDirection() + swing)
    }
    // what happens when ball bounces off paddleRight
    // TODO
    
    // paddleLeft missed
    if(ball.position.x < 0) 
    {
        ball.position.x = width/2
        ball.position.y = height/2
        ball.setSpeed(BALL_SPEED, random(0,360))
    }
    // paddleRight missed
    // TODO
    
    // redraw everything
    drawSprites()
}