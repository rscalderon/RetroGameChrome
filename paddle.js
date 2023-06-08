// our paddle class will create our playerLeft and playerRight elements
class paddle {
    constructor(el) {
        // defines direction of 
        this.node = document.createElement('div');
        this.node.setAttribute('class', 'paddle');
        el.appendChild(this.node);

        this.currentDirection = '';
        this.SPEED = 5;

        this.node.style.bottom = '200px';

        this.boundInfoPasser = this.infoPasser.bind(this);

        // console.log(el.offsetHeight);

        this.boundMove = this.move.bind(this);
        this.boundMove();
    }
  
    move() {
      const paddle = this.node;
      const direction = this.currentDirection;
    
      let bottomPos = Number(paddle.style.bottom.replace('px', ''));
    //   let leftPosition = Number(head.style.left.replace('px', ''));
  
    //   if (direction === 'right') {
    //     head.style.left = `${(leftPosition += 50)}px`;
    //   }
    //   if (direction === 'left') {
    //     head.style.left = `${(leftPosition -= 50)}px`;
    //   } 
      if (direction === 'up') {
        if (bottomPos <= 730)
        paddle.style.bottom = `${(bottomPos += 5)}px`;
    }
    if (direction === 'down') {
        if (bottomPos >= 80)
        paddle.style.bottom = `${(bottomPos -= 5)}px`;
      }
   
    //   if (leftPosition > 650 || bottomPosition > 650 || leftPosition < 0 || bottomPosition < 0 ) alert('game over')
  
      // setTimeout(this.move, this.SPEED);
  
      setTimeout(this.move.bind(this), this.SPEED);
      // return leftPosition;
    }
    infoPasser() {
        return Number(this.node.style.bottom.replace('px', ''));
    }
}