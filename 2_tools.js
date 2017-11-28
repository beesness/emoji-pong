/** 
    * In this file we'll store reusable blocks of code, aka functions
    */

/**
    * This function draws emojis on top of a sprite  
    *
    * @method drawEmojis 
    * @param {Sprite} sprite The sprite on top of which emojis will be drawn
    * @param {String} frame The name of the frame that will be drawn, from FRAMES
    * @param {String} direction Either 'horizontal' or 'vertical'
    */
function drawEmojis(sprite, frame, direction)
{
    // if the sprite has been removed, exit this function immediately
    if (sprite.removed) return false
        
    // if the sprite doesn't have a size property, then we'll assume it's 1 (square)
    var size = sprite.size || 1
    
    // if the direction parameter is not set, let's assume it's 'horizontal'
    if (!direction) direction = 'horizontal'
    
    // loop through the sprite, according to its size
    for (var i=0; i<size; i++)
    {
        // we need the top-left corner of the sprite
        // by default position.x and .y are the centre of a sprite
        // so we need to subtract half the width & height
        var x = sprite.position.x - sprite.width/2,
            y = sprite.position.y - sprite.height/2
        
        if (direction == 'horizontal') x += EMOJI_SIZE*i
        else y += EMOJI_SIZE*i
        
        spritesheets.emojis.drawFrame(frame, x, y)
    }
    
    return true
}

/**
    * This function resets the ball in the centre and gives it a random new direction  
    *
    * @method resetBall 
    */
function resetBall()
{
    var ball = sprites.ball,
        direction = random(0,360)
    
    ball.setSpeed(BALL_SPEED, direction)
    ball.position.x = width/2
    ball.position.y = height/2
}