/** 
    * It's advisable (but not necessary) to load assets in the preload function 
    * otherwise they may appear with a little delay
    */

function preload()
{
    // preload all the emojis into a spritesheet
    spritesheets.emojis = loadSpriteSheet(SPRITE_SHEET, EMOJI_FRAMES)
}