document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const board = document.querySelector('#board');

  const leftBoard = document.querySelector('#leftBoard')
  const rightBoard = document.querySelector('#rightBoard')

  const playerLeft = new paddle(leftBoard);
  const playerRight = new paddle(rightBoard);

//   console.log(playerLeft);
//   console.log(playerRight);

  body.addEventListener('keydown', (e) => {
    if (e.code === 'KeyW') {
        console.log('pressed w');
        playerLeft.currentDirection = 'up';
    } else if (e.code === 'KeyS') {
        console.log('pressed s');
        playerLeft.currentDirection = 'down';
    } else if (e.code === 'ArrowUp') {
        console.log('pressed up');
        playerRight.currentDirection = 'up';
    } else if (e.code === 'ArrowDown') {
        console.log('pressed down');
        playerRight.currentDirection = 'down';
    }
  });

});


