var oldUp = scene._onPointerUp,
            oldDown = scene._onPointerDown,
            oldMove = scene._onPointerMove;

var eventPrefix = BABYLON.Tools.GetPointerPrefix();
canvas.removeEventListener(eventPrefix + "move", oldMove);
canvas.removeEventListener(eventPrefix + "down", oldDown);
window.removeEventListener(eventPrefix + "up", oldUp);
        
// Wheel
scene._onPointerUp = function(evt){
    console.log(1);
    if(false === evt.pointerId > 0){ return;}
    oldUp(evt);
}

scene._onPointerDown = function(evt){
    console.log(2);
    if(false === evt.pointerId > 0){ return;}
    oldDown(evt);
}

scene._onPointerMove = function(evt){
    if(false === evt.pointerId > 0){ return;}
    oldMove(evt);
}

canvas.addEventListener(eventPrefix + "move", scene._onPointerMove, false);
// Whee
canvas.addEventListener(eventPrefix + "down", scene._onPointerDown, false);
window.addEventListener(eventPrefix + "up", scene._onPointerUp, false);