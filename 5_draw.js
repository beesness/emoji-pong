function draw() 
{  
    // clear the previous frame
    clear()
    
    // if players are pressing keys, move the paddle(s)
    updatePaddle('left')
    updatePaddle('right')
    updatePaddle('top')
    updatePaddle('bottom')
    
    // check if the ball is bouncing off any paddle
    // or if the ball is going off screen (ie if one player missed it)
    updateBall()
    
    // redraw everything
    redrawEverything()
}

function updatePaddle(name)
{
    var paddle = sprites.paddles[name],
        player = players[name],
        ball = sprites.ball
    
    // if the paddle has been removed, exit this function immediately
    if (paddle.removed) return false
    
    if (player.direction == 'vertical')
    {
        if (keyDown(player.controlUp)) paddle.position.y -= PADDLE_MOVEMENT
        if (keyDown(player.controlDown)) paddle.position.y += PADDLE_MOVEMENT
        paddle.position.y = constrain(paddle.position.y, paddle.height/2, height-paddle.height/2) 
    }
    else
    {
        if (keyDown(player.controlLeft)) paddle.position.x -= PADDLE_MOVEMENT
        if (keyDown(player.controlRight)) paddle.position.x += PADDLE_MOVEMENT
        paddle.position.x = constrain(paddle.position.x, paddle.width/2, width-paddle.width/2)
    }
}

function updateBall()
{
    var ball = sprites.ball
    
    bounceBall('left')
    bounceBall('right')
    bounceBall('top')
    bounceBall('bottom')
    
    if (mouseIsPressed) console.log('ball speed: ' + ball.getSpeed().toFixed(1) + ' | x: ' + ball.position.x.toFixed(0) + ' | y: ' + ball.position.y.toFixed(0))
    
    // if the ball slows down too much, speed it up and change its direction
    if (ball.getSpeed() <= BALL_SPEED/2) upsetBall()    
    
    // experiment
    // press D to upset the ball 
    if (keyDown('d')) upsetBall()
    
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
    
    // constrain the ball within the canvas 
    // sometimes it jumps out (collision detection with the walls fails)
    ball.position.x = constrain(ball.position.x, 0, width)
    ball.position.y = constrain(ball.position.y, 0, height)
}

function upsetBall()
{
    var ball = sprites.ball
 
    // console.log('upsetBall ' + ball.getSpeed())
    
    // change the ball rotation
    ball.rotation += random(-EMOJI_SIZE, EMOJI_SIZE)
    // and its speed
    ball.addSpeed(BALL_SPEED_INCREMENT, ball.rotation)

    // particles, just for the heck of it
    var particle = createSprite(ball.position.x, ball.position.y, 5, 5)
    particle.setSpeed(ball.getSpeed() + BALL_SPEED_INCREMENT, ball.getDirection())
    particle.life = 120   
}

function bounceBall(side)
{
    var player = players[side],
        paddle = sprites.paddles[side],
        wall = sprites.walls[side],
        ball = sprites.ball
    
    // what if the player missed the ball?
    if (ball.bounce(wall))
    {
        updateScore(side, -1)
        ball.setSpeed(ball.getSpeed() - BALL_SPEED_DECREMENT)
        // resetBall()
    }
    
    // if the paddle has been removed, exit this function immediately
    if (paddle.removed) return false
    
    if (ball.bounce(paddle)) 
    {
        // depending on the player's direction, we'll consider the vertical or horizontal distance of the ball from the paddle centre
        var axis = (player.direction == 'vertical') ? 'y' : 'x'
        swing = (ball.position[axis] - paddle.position[axis]) * SWING_FACTOR
        ball.setSpeed(ball.getSpeed() + BALL_SPEED_INCREMENT, ball.getDirection() + swing)
    }
}

function updateScore(name, increment)
{
    var player = players[name],
        sprite = sprites.paddles[name]

    player.score += increment
    
    if (player.score <= 0) 
    {
        // game over
        // console.log('game over for ' + player.nickname)
        sprite.remove()
        player.score = 0
        player.isPlaying = false
    }    
    else 
    {
        // update sprite size
        sprite.size = player.score
        
        // update sprite width / height
        var dimension = (player.direction == 'horizontal') ? 'width' : 'height'
        sprite[dimension] = sprite.size * EMOJI_SIZE 
    }    
}

function redrawEverything()
{
    var pL = sprites.paddles.left, 
        pR = sprites.paddles.right,
        pT = sprites.paddles.top,
        pB = sprites.paddles.bottom,
        ball = sprites.ball
    
    // white background
    background(255) 
    
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
    
    textAlign(CENTER)
    
    checkWhoIsPlaying()
    
    if (!players.left.isPlaying && players.left.score>0)
    {
        // \n creates a new line
        text('🅰️\n❌', pL.position.x + EMOJI_SIZE, pL.position.y)    
    }
    if (!players.right.isPlaying && players.right.score>0)
    {
        text('🔼\n🔽', pR.position.x - EMOJI_SIZE, pR.position.y)    
    }
    if (!players.top.isPlaying && players.top.score>0)
    {
        text('9️⃣0️⃣', pT.position.x, pT.position.y + EMOJI_SIZE)    
    }
    if (!players.bottom.isPlaying && players.bottom.score>0)
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