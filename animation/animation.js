var monster = $("#monster");//セレクタで取得

function show() {
    monster.fadeIn(500);
}

function hide() {
    monster.fadeOut(300);
}

function moveRight() {
    monster.animate({left:450},500);
}

function moveLeft() {
    monster.animate({left:0},500);
}

function moveUp() {
    monster.animate({top:50},500)
}

function moveDown() {
    monster.animate({top:450},500)
}

function moveSequence() {
    const duration = 300
    monster
    .animate({left:450},duration)
    .animate({right:50},duration)
    .fadeOut()
    .animate({top:450},duration)
    .animate({top:50},duration)
    .fadeIn()
}