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
    var pL = sprites.paddles.left, 
        pR = sprites.paddles.right,
        pT = sprites.paddles.top,
        pB = sprites.paddles.bottom,
        ball = sprites.ball
    
    // left paddle, aka Labour
    if (keyDown(players.left.controlUp)) pL.position.y -= PADDLE_MOVEMENT
    if (keyDown(players.left.controlDown)) pL.position.y += PADDLE_MOVEMENT
    pL.position.y = constrain(pL.position.y, pL.height/2, height-pL.height/2)
    
    // right paddle, aka Tory
    if (keyDown(players.right.controlUp)) pR.position.y -= PADDLE_MOVEMENT
    if (keyDown(players.right.controlDown)) pR.position.y += PADDLE_MOVEMENT
    pR.position.y = constrain(pR.position.y, pL.height/2, height-pL.height/2)
    
    // top paddle, aka Green
    if (keyDown(players.top.controlLeft)) pT.position.x -= PADDLE_MOVEMENT
    if (keyDown(players.top.controlRight)) pT.position.x += PADDLE_MOVEMENT
    pT.position.x = constrain(pT.position.x, pT.width/2, width-pT.width/2)
    
    // bottom paddle, aka LibDem
    if (keyDown(players.bottom.controlLeft)) pB.position.x -= PADDLE_MOVEMENT
    if (keyDown(players.bottom.controlRight)) pB.position.x += PADDLE_MOVEMENT
    pB.position.x = constrain(pB.position.x, pB.width/2, width-pB.width/2)
}

function updateBall()
{
    var pL = sprites.paddles.left, 
        pR = sprites.paddles.right,
        pT = sprites.paddles.top,
        pB = sprites.paddles.bottom,
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
    var pL = sprites.paddles.left, 
        pR = sprites.paddles.right,
        pT = sprites.paddles.top,
        pB = sprites.paddles.bottom,
        ball = sprites.ball
    
    // clear the previous frame
    clear()
    
    // draw all the sprites
    drawSprites()
    
    // draw emojis on top of the sprites
    // you can find the drawEmojis function in 2_tools.js
    drawEmojis(ball, 'newspaper')
    drawEmojis(pL, players.left.emoji, players.left.direction) 
    drawEmojis(pR, players.right.emoji, players.right.direction)
    drawEmojis(pT, players.top.emoji, players.top.direction)
    drawEmojis(pB, players.bottom.emoji, players.bottom.direction)
    
    drawHints()
}

// if players haven't started playing yet (ie moving their paddle)
// show them which keys to press
function drawHints()
{
    var pL = sprites.paddles.left, 
        pR = sprites.paddles.right,
        pT = sprites.paddles.top,
        pB = sprites.paddles.bottom
    
    fill(255) // white
    textAlign(CENTER)
    
    checkWhoIsPlaying()
    
    if (!players.left.isPlaying)
    {
        // \n creates a new line
        text('🅰️\n❌', pL.position.x + EMOJI_SIZE, pL.position.y)    
    }
    if (!players.right.isPlaying)
    {
        text('🔼\n🔽', pR.position.x - EMOJI_SIZE, pR.position.y)    
    }
    if (!players.top.isPlaying)
    {
        text('9️⃣0️⃣', pT.position.x, pT.position.y + EMOJI_SIZE)    
    }
    if (!players.bottom.isPlaying)
    {
        text('🅱️ Ⓜ️', pB.position.x, pB.position.y - EMOJI_SIZE)    
    }
    
    
    
    
}

function checkWhoIsPlaying()
{
    if (keyDown(players.left.controlUp) || keyDown(players.left.controlDown)) players.left.isPlaying = true
    
    if (keyDown(players.right.controlUp) || keyDown(players.right.controlDown)) players.right.isPlaying = true
    
    if (keyDown(players.top.controlLeft) || keyDown(players.top.controlRight)) players.top.isPlaying = true
    
    if (keyDown(players.bottom.controlLeft) || keyDown(players.bottom.controlRight)) players.bottom.isPlaying = true
}