function loadSpritesheetAndAnimation(name)
{
    // TODO explain this
    if (!frames[name]) 
    {
        console.log('Please define frames.' + name + ' in 1_data.js')
        return 
    }    
    
    spritesheets[name] = loadSpriteSheet(SPRITE_SHEET, frames[name])
    animations[name] = loadAnimation(spritesheets[name])
}

function drawEmojis(sprite, spritesheetName, frameName, direction)
{
    // TODO explain this
    if (!sprite.size) sprite.size = PADDLE_SIZE
    if (!direction) direction = 'horizontal'
    
    var spritesheet = spritesheets[spritesheetName]
    
    for (var i=0; i<sprite.size; i++)
    {
        // TODO explain this
        var x = sprite.position.x - sprite.width/2,
            y = sprite.position.y - sprite.height/2
        
        if (direction == 'horizontal') x += EMOJI_SIZE*i
        else y += EMOJI_SIZE*i
        
        spritesheet.drawFrame(frameName, x, y)
    }
}