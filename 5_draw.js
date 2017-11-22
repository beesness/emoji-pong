function draw() 
{  
    // clear the previous frame
    clear()
    
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
        ball.setSpeed(ball.getSpeed(), ball.getDirection() + swing)
    }
    else if (ball.bounce(pR)) 
    {
        swing = (ball.position.y - pR.position.y) * SWING_FACTOR
        ball.setSpeed(ball.getSpeed(), ball.getDirection() - swing)
    }
    else if (ball.bounce(pT)) 
    {
        swing = (ball.position.x - pT.position.x) * SWING_FACTOR
        ball.setSpeed(ball.getSpeed(), ball.getDirection() - swing)
    }
    else if (ball.bounce(pB)) 
    {
        swing = (ball.position.x - pB.position.x) * SWING_FACTOR
        ball.setSpeed(ball.getSpeed(), ball.getDirection() - swing)
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
    
    // experiment
    // press D to change the "ball" direction 
    if (keyDown('d'))
    {
        // change the  ball rotation
        ball.rotation += random(-20, 20)
        ball.addSpeed(0.2, ball.rotation)
        
        // particles, just for the heck of it
        var particle = createSprite(ball.position.x, ball.position.y, 5, 5)
        particle.setSpeed(ball.getSpeed() + 5, ball.getDirection())
        particle.life = 100
    }
    
    // another experiment
    // press C to draw a circle orbiting around the "ball"
    if (keyDown('c'))
    {
        var angle = window.angle || Math.PI / 4,
            radius = EMOJI_SIZE * 2,
            x = radius * Math.cos(angle) + ball.position.x - EMOJI_SIZE/2,
            y = ball.position.y - radius * Math.sin(angle) - EMOJI_SIZE/2
        
        spritesheets.emojis.drawFrame('toxic', x, y)
        
        // increment the angle and store it in a global var (window.angle)
        window.angle = angle + 3 * (Math.PI / 180)
    }
}

function redrawEverything()
{
    var pL = sprites.paddles.left, 
        pR = sprites.paddles.right,
        pT = sprites.paddles.top,
        pB = sprites.paddles.bottom,
        ball = sprites.ball
    
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
    
    ball.debug = pL.debug = pR.debug = pT.debug = pB.debug = mouseIsPressed
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