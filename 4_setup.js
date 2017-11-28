function setup()
{
    // https://p5js.org/reference/#/p5/createCanvas
    canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT)
    // move the canvas so it's inside our <div id="canvas">.
    canvas.parent('canvas')
    
    // ball, aka the press
    // http://p5play.molleindustria.org/docs/classes/p5.play.html#method-createSprite
    sprites.ball = createSprite(width/2, height/2, EMOJI_SIZE, EMOJI_SIZE)
    //sprites.ball.maxSpeed = BALL_SPEED
    sprites.ball.shapeColor = 'rgba(255, 255, 255, 0)' // transparent
    resetBall()
    
    // paddles, aka the parties
    createPaddle('left') // aka Labour
    createPaddle('right') // aka Tory 
    createPaddle('top') // aka Green
    createPaddle('bottom') // aka Lib-Dem
    
    // walls
    createWall('left') 
    createWall('right')
    createWall('top')
    createWall('bottom')
}

function createPaddle(name)
{
    var sprite, x, y, width, height, 
        player = players[name] 
    
    //console.log('createPaddle ' + name)
    //console.log(player)
    
    if (name == 'left')
    {
        x = EMOJI_SIZE / 2
        y = CANVAS_HEIGHT / 2
    }
    else if (name == 'right')
    {
        x = CANVAS_WIDTH - EMOJI_SIZE / 2
        y = CANVAS_HEIGHT / 2   
    }
    else if (name == 'top')
    {
        x = CANVAS_WIDTH / 2, 
        y = EMOJI_SIZE / 2   
    }
    else if (name == 'bottom')
    {
        x = CANVAS_WIDTH / 2
        y = CANVAS_HEIGHT - EMOJI_SIZE/2  
    }

    width = (player.direction == 'vertical') ? EMOJI_SIZE : EMOJI_SIZE * player.score
    height = (player.direction == 'horizontal') ? EMOJI_SIZE : EMOJI_SIZE * player.score
    // (condition) ? yes : no
    // this is another way to express if (condition) { yes } else { no }
        
    sprite = createSprite(x, y, width, height)
    sprite.immovable = true // this prevents the paddle from being moved by the ball
    sprite.shapeColor = player.color
    sprite.size = player.score
    
    sprites.paddles[name] = sprite // store the sprite in the global sprites object
    
    return sprite // return the sprite, because why not
}

function createWall(name)
{
    var sprite, x, y, width, height, 
        player = players[name] 
    
    if (name == 'left')
    {
        x = 0
        y = CANVAS_HEIGHT / 2
    }
    else if (name == 'right')
    {
        x = CANVAS_WIDTH
        y = CANVAS_HEIGHT / 2   
    }
    else if (name == 'top')
    {
        x = CANVAS_WIDTH / 2, 
        y = 0   
    }
    else if (name == 'bottom')
    {
        x = CANVAS_WIDTH / 2
        y = CANVAS_HEIGHT  
    }

    width = (player.direction == 'vertical') ? 1 : CANVAS_WIDTH
    height = (player.direction == 'horizontal') ? 1 : CANVAS_HEIGHT
    // (condition) ? yes : no
    // this is another way to express if (condition) { yes } else { no }
        
    sprite = createSprite(x, y, width, height)
    sprite.immovable = true // this prevents the paddle from being moved by the ball
    sprite.shapeColor = player.color
    
    sprites.walls[name] = sprite // store the sprite in the global sprites object
    
    return sprite // return the sprite, because why not
}