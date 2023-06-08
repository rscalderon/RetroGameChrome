// our ball class
class ball {
    constructor(el) {
        this.node = document.createElement('div');
        this.node.setAttribute('id', 'ball');
        el.appendChild(this.node);
    
        this.direction = null;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.SPEED = 10;
    
        this.node.style.bottom = '450px';
        this.node.style.left = '468px';
        // added leftPos and bottomPos as ball props
        this.node.bottomPosition = Number(this.node.style.bottom.replace('px', ''));
        this.node.leftPosition = Number(this.node.style.left.replace('px', ''));
    
        this.score = 0;
    
        // Refactor the below line to create a bound version of `this.Move`.
        // We must do this in order to retain the context of `this` in an asynchronous setTimeout call
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind
        this.boundMove = this.move.bind(this);
        
        this.boundBallInit = this.ballInit.bind(this);
        // this.boundbottomPosition = this.bottomPositionFunc.bind(this);
        // this.boundLeftPosition = this.leftPositionFunc.bind(this);
        // this.boundScore = this.scoreFunc.bind(this);
        // this.boundincrementScore = this.incrementScore.bind(this);
        // this.boundresetScore = this.resetScore.bind(this);
    
        setTimeout(this.boundMove, this.SPEED);
    }

    // return Math.floor(Math.random() * 14) * 50;
    ballInit() {
        if (this.xSpeed === 0 && this.ySpeed === 0) {
            // assign random xspeed and yspeed values
            this.xSpeed = (Math.random() * 2 - 1) * 5;
            this.ySpeed = (Math.random() * 2 - 1) * 5;
        }
        // Math.random() * 2 - 1
    }

    move() {
        const ball = this.node; 
        const xSpeed = this.xSpeed; 
        const ySpeed = this.ySpeed; 
        // const direction = null;

        // updating leftPos and bottomPos as ball props
        let bottomPosition = ball.bottomPosition = Number(ball.style.bottom.replace('px', ''));
        let leftPosition = ball.leftPosition = Number(ball.style.left.replace('px', ''));

        ball.style.bottom = `${(bottomPosition += ySpeed)}px`;
        ball.style.left = `${(leftPosition += xSpeed)}px`;

        // if (direction === 'right') {
        //     ball.style.left = `${(leftPosition += 5)}px`;
        // //   if (leftPosition >= 700) {
        // //     // alert('Game over!');
        // //     const test = document.querySelector('#gameOver')
        // //     test.style.opacity = '1';
        // //     ball.style.left = '350px';
        // //     ball.style.bottom = '350px';
        // //     this.node.score = 0;
        // // };
        // //   // console.log(leftPosition);
        // };
        // if (direction === 'left') {
        //     ball.style.left = `${(leftPosition -= 5)}px`;
        // //             //   if (leftPosition < 0) {
        // //             //     // alert('Game over!');
        // //             //     const test = document.querySelector('#gameOver')
        // //             //     test.style.opacity = '1';
        // //             //     this.node.score = 0;
        // //             //     ball.style.left = '350px';
        // //             //     ball.style.bottom = '350px';
        // };
        // //   // console.log(leftPosition);
        // if (direction === 'up') {
        //     ball.style.bottom = `${(bottomPosition -= 5)}px`;
        //     //   if (bottomPosition < 0) {
        //         //     const test = document.querySelector('#gameOver')
        //         //     test.style.opacity = '1';
        //         //     ball.style.left = '350px';
        //         //     ball.style.bottom = '350px';
        //         //     this.node.score = 0;
        // };
        // if (direction === 'down') {
        //     ball.style.bottom = `${(bottomPosition += 5)}px`;
        //     //   if (bottomPosition >= 700) {
        //         //     // alert('Game over!');
        //         //     const test = document.querySelector('#gameOver')
        //         //     test.style.opacity = '1';
        //         //     this.node.score = 0;
        //         //     ball.style.left = '350px';
        //         //     ball.style.bottom = '350px';   
        setTimeout(this.boundMove, this.SPEED);
        }
}