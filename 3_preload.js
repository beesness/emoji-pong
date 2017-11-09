/* 
    It's advisable (but not necessary) to load assets in the preload function 
    otherwise they may appear with a little delay
*/

function preload()
{
    // all the emojis
    // you can find the function loadSpritesheetAndAnimation in 2_tools.js
    loadSpritesheetAndAnimation('emojis')
    
    // ball
    // TODO image instead of animation?
    loadSpritesheetAndAnimation('ball')
}