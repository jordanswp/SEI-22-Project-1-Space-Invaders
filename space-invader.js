console.log("start of js");

//determine player location to move later
var player = {
    top: 700,
    left: 600
};

var bullets = [];

var aliens = [
    {top: 150, left: 500},
    {top: 200, left: 400},
    {top: 150, left: 400},
    {top: 100, left: 400},
    {top: 100, left: 500},
    {top: 200, left: 500},
    {top: 50, left: 400},
    {top: 50, left: 500},
    {top: 50, left: 600},
    {top: 50, left: 700},
    {top: 150, left: 600},
    {top: 150, left: 700},
    {top: 100, left: 600},
    {top: 100, left: 700},
    {top: 200, left: 600},
    {top: 200, left: 700},
    {top: 50, left: 800},
    {top: 100, left: 800},
    {top: 150, left: 800},
    {top: 200, left: 800},
    ];

// //listen for player input
// document.addEventListener('keydown', logKey);

// //What to do when player presses a key
// function logKey(e) {
//     console.log(`${e.Keycode}`);

//     if (e.Keycode === 37){
//         console.log("Left");
//         player.left = player.left - 10;
//         console.log(player.left);
//     } else if (e.code === 39) {
//         console.log("Right");
//     }
// }

document.onkeydown = function (e) {
    console.log(e.keyCode);
    //player move left
    if (e.keyCode === 65){
        console.log("player move left");
        player.left = player.left - 10;
        movePlayer();
        //player move right
    } else if (e.keyCode === 68){
        console.log("player move right");
        player.left = player.left + 10;
        movePlayer();
        //player shooting
    } else if (e.keyCode === 75) {
        console.log("player shoot");
        bullets.push({
            left: player.left + 12,
            top: player.top - 100
        })
        drawBullets();
    }
}

function movePlayer(){
    document.getElementById('player').style.left =
    player.left+"px";
}

function drawAliens() {
    document.getElementById('aliens').innerHTML = "";
    for( var alien = 0; alien < aliens.length; alien++){
        document.getElementById('bullets').innerHTML += `<div class='alien' style='left:${aliens[alien].left}px; top:${aliens[alien].top}px;'></div>`;
    }
};

function drawBullets() {
    //alert('fire');
    document.getElementById('bullets').innerHTML = "";
    for( var bullet = 0; bullet < bullets.length; bullet++){
    //alert('fire');
        document.getElementById('bullets').innerHTML += `<div class='bullet' style='left:${bullets[bullet].left}px; top:${bullets[bullet].top}px;'></div>`;
    }
};

function moveBullets(){
    for( var bullet = 0; bullet < bullets.length; bullet++){
        bullets[bullet].top = bullets[bullet].top - 5;
    }
}

function moveAliens(){
    for( var alien = 0; alien < aliens.length; alien++){
        aliens[alien].top = aliens[alien].top + 0.1;
    }
}

function collisionDetection() {
    for( var alien = 0; alien < aliens.length; alien++){
        for( var bullet = 0; bullet < bullets.length; bullet++){
            if (
                (bullets[bullet].top <= aliens[alien].top + 50) &&
                (bullets[bullet].top > aliens[alien].top) &&
                (bullets[bullet].left >=aliens[alien].left) &&
                (bullets[bullet].left <= bullets[bullet].left )
                ){
                aliens.splice(alien, 1);
                bullets.splice(bullet, 1);
            }
        }
    }
}

function gameLoop(){
    setTimeout(gameLoop, 10)
    moveBullets();
    drawBullets();
    moveAliens();
    drawAliens();
    collisionDetection();
}
gameLoop();
