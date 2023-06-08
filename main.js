document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const board = document.querySelector('#board');

    const leftBoard = document.querySelector('#leftBoard')
    const rightBoard = document.querySelector('#rightBoard')

    const rightScoreBox = document.querySelector('#scoreBoxRight');
    const leftScoreBox = document.querySelector('#scoreBoxLeft');

    // const [rightScoreBox, leftScoreBox] = [document.querySelector('#scoreBoxRight'), document.querySelector('#scoreBoxLeft') ]

    const playerLeft = new paddle(leftBoard);
    let leftScore = 0;
    
    const playerRight = new paddle(rightBoard);
    let rightScore = 0;

    // setInterval(() => console.log(playerRight.boundInfoPasser()), 500);

    let sphere = new ball(board, playerLeft.boundInfoPasser, playerRight.boundInfoPasser, rightScoreBox, leftScoreBox);

    //   console.log(playerLeft);
    //   console.log(playerRight);
    
    // check if sphere is out of bounds on left and right, in which case respawn new ball
    // setInterval(() => {
    //    console.log('setInterval works');
    //     if (sphere.leftPosition > 1200 ) {
    //         delete sphere.node;
    //         sphere = new ball(board, playerLeft.boundInfoPasser, playerRight.boundInfoPasser);
    //         rightScore++;
    //         console.log('Player right score');
    //     }
    //     if (sphere.leftPosition < 0) {
    //         delete sphere.node;
    //         sphere = new ball(board, playerLeft.boundInfoPasser, playerRight.boundInfoPasser);
    //         leftScore++;
    //         console.log('Player left score');
    //     }
    // }, 5);

    body.addEventListener('keydown', (e) => {
        if (e.code === 'KeyW') {
            playerLeft.currentDirection = 'up';
        } else if (e.code === 'KeyS') {
            playerLeft.currentDirection = 'down';
        } else if (e.code === 'ArrowUp') {
            playerRight.currentDirection = 'up';
        } else if (e.code === 'ArrowDown') {
            playerRight.currentDirection = 'down';
        } else if (e.code === 'KeyR') {
            
        }
        sphere.boundBallInit();
    });

});


