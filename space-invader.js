//console.log("start of js");
//console.log("test");

//determine player location to move later
var player = {
    top: 700,
    left: 600
};

var bullets = [];
var timeLeft = 5;

var aliens = [
    // {top: 50, left: 400},
    // {top: 50, left: 500},
    // {top: 50, left: 600},
    // {top: 50, left: 700},
    // {top: 50, left: 800},
    // {top: 100, left: 400},
    // {top: 100, left: 500},
    // {top: 100, left: 600},
    // {top: 100, left: 700},
    // {top: 100, left: 800},
    // {top: 150, left: 400},
    // {top: 150, left: 500},
    // {top: 150, left: 600},
    // {top: 150, left: 700},
    // {top: 150, left: 800},
    // {top: 200, left: 400},
    // {top: 200, left: 500},
    // {top: 200, left: 600},
    // {top: 200, left: 700},
    // {top: 200, left: 800},
    {top: 50, left: Math.random()*1000},
    {top: 50, left: Math.random()*1000},
    {top: 50, left: Math.random()*1000},
    {top: 50, left: Math.random()*1000},
    {top: 50, left: Math.random()*1000},
    {top: 100, left: Math.random()*1000},
    {top: 100, left: Math.random()*1000},
    {top: 100, left: Math.random()*1000},
    {top: 100, left: Math.random()*1000},
    {top: 100, left: Math.random()*1000},
    {top: 150, left: Math.random()*1000},
    {top: 150, left: Math.random()*1000},
    {top: 150, left: Math.random()*1000},
    {top: 150, left: Math.random()*1000},
    {top: 150, left: Math.random()*1000},
    {top: 200, left: Math.random()*1000},
    {top: 200, left: Math.random()*1000},
    {top: 200, left: Math.random()*1000},
    {top: 200, left: Math.random()*1000},
    {top: 200, left: Math.random()*1000},
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
    if (e.keyCode === 37){
        console.log("player move left");
        player.left = player.left - 10;
        movePlayer();
        //player move right
    } else if (e.keyCode === 39){
        console.log("player move right");
        player.left = player.left + 10;
        movePlayer();
        //player shooting
    } else if (e.keyCode === 32) {
        console.log("player shoot");
        bullets.push({
            left: player.left + 12,
            top: player.top - 100
        })
        drawBullets();
    }
}

window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);

function movePlayer(){
    document.getElementById('player').style.left =
    player.left+"px";
}

function drawAliens() {
    document.getElementById('aliens').innerHTML = "";
    for( var alien = 0; alien < aliens.length; alien++){
        document.getElementById('aliens').innerHTML +=
        `<div class='alien' style='left:${aliens[alien].left}px; top:${aliens[alien].top}px;'></div>`;
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
                (bullets[bullet].top >= aliens[alien].top) &&
                (bullets[bullet].left >= aliens[alien].left) &&
                (bullets[bullet].left <= aliens[alien].left + 50)
                ){
                aliens.splice(alien, 1);
                //console.log(aliens);
                bullets.splice(bullet, 1);
            }
        }
    }
}

function winMsg() {
    if (aliens.length === 0){
        document.getElementById('win-msg').textContent = "You Win!";
        // setTimeout(function(){
        //     document.getElementById("win-msg").innerHTML = '';
        // }, 3000);
    }
}

function lose() {
    if (aliens.length > 0 && (aliens[0].top > 570 || aliens[1].top > 570 || aliens[2].top > 570 || aliens[3].top > 570 || aliens[4].top > 570 || aliens[5].top > 570 || aliens[6].top > 570 || aliens[7].top > 570 || aliens[8].top > 570 || aliens[9].top > 570 || aliens[10].top > 570 || aliens[11].top > 570 || aliens[12].top > 570 || aliens[13].top > 570 || aliens[14].top > 570 || aliens[15].top > 570 || aliens[16].top > 570 || aliens[17].top > 570 || aliens[18].top > 570 || aliens[19].top > 570)) {
        document.getElementById('win-msg').textContent = "You Lose!";
    }
}

function gameLoop(){
    setTimeout(gameLoop, 10);
    moveBullets();
    drawBullets();
    moveAliens();
    drawAliens();
    collisionDetection();
    winMsg();
    lose();
}


gameLoop();

