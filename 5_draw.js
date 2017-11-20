function draw() 
{   
    // if players are pressing keys, move the paddle(s)
    updatePaddles()
    
    // check if the ball is bouncing off any paddle
    // or if the ball is going off screen (ie if one player missed it)
    updateBall()
    
    // redraw everything
    redrawEverything()
}

function updatePaddles()
{
    var pL = sprites.paddleLeft, 
        pR = sprites.paddleRight,
        pT = sprites.paddleTop,
        pB = sprites.paddleBottom,
        ball = sprites.ball
    
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
}

function updateBall()
{
    var pL = sprites.paddleLeft, 
        pR = sprites.paddleRight,
        pT = sprites.paddleTop,
        pB = sprites.paddleBottom,
        ball = sprites.ball
    
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
    else if (ball.bounce(pT)) 
    {
        swing = (ball.position.x - pT.position.x) * SWING_FACTOR
        ball.setSpeed(BALL_SPEED, ball.getDirection() - swing)
    }
    else if (ball.bounce(pB)) 
    {
        swing = (ball.position.x - pB.position.x) * SWING_FACTOR
        ball.setSpeed(BALL_SPEED, ball.getDirection() - swing)
    }
    
    // what happens when players miss
    if (ball.position.x < 0) // paddleLeft missed
    {
        resetBall()
    }
    else if (ball.position.x > width) // paddleRight missed
    {
        resetBall()
    }
    else if (ball.position.y < 0) // paddleTop missed
    {
        resetBall()
    }
    else if (ball.position.y > height) // paddleBottom missed
    {
        resetBall()
    }
}

function redrawEverything()
{
    var pL = sprites.paddleLeft, 
        pR = sprites.paddleRight,
        pT = sprites.paddleTop,
        pB = sprites.paddleBottom,
        ball = sprites.ball
    
    // clear the previous frame
    clear()
    
    // draw all the sprites
    drawSprites()
    
    // draw emojis on top of the sprites
    // you can find the drawEmojis function in 2_tools.js
    drawEmojis(ball, 'newspaper')
    drawEmojis(pL, 'rose', 'vertical') 
    drawEmojis(pR, 'oak', 'vertical')
    drawEmojis(pT, 'globe', 'horizontal')
    drawEmojis(pB, 'dove','horizontal')
}