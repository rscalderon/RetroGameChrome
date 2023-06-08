// our paddle class will create our playerLeft and playerRight elements
class paddle {
    constructor(el) {
        this.node = document.createElement('div');
        this.node.setAttribute('class', 'paddle');
        el.appendChild(this.node);

        this.currentDirection = '';
        this.SPEED = 200;

        this.node.style.bottom = '200px';

        this.boundMove = this.move.bind(this);
        this.boundMove();
    }
  
    move() {
      const paddle = this.node;
      const direction = this.currentDirection;
    
      let bottomPosition = Number(paddle.style.bottom.replace('px', ''));
    //   let leftPosition = Number(head.style.left.replace('px', ''));
  
    //   if (direction === 'right') {
    //     head.style.left = `${(leftPosition += 50)}px`;
    //   }
    //   if (direction === 'left') {
    //     head.style.left = `${(leftPosition -= 50)}px`;
    //   }
      if (direction === 'up') {
        paddle.style.bottom = `${(bottomPosition += 50)}px`;
      }
      if (direction === 'down') {
        paddle.style.bottom = `${(bottomPosition -= 50)}px`;
      }
   
    //   if (leftPosition > 650 || bottomPosition > 650 || leftPosition < 0 || bottomPosition < 0 ) alert('game over')
  
      // setTimeout(this.move, this.SPEED);
  
      setTimeout(this.move.bind(this), this.SPEED);
      // return leftPosition;

    }
}