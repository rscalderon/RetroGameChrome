// our ball class
class ball {
    constructor(el, playerLeft, playerRight, rightScoreBox, leftScoreBox) {
        this.node = document.createElement('div');
        this.node.setAttribute('id', 'ball');
        el.appendChild(this.node);

        this.parentEl = el;
        
        this.playerLeft = playerLeft;
        this.playerRight = playerRight;

        this.rightScoreBox = rightScoreBox;
        this.leftScoreBox = leftScoreBox;

        this.leftScore = 0;
        this.rightScore = 0;

        this.rightScoreBox.innerText = this.rightScore;
        this.leftScoreBox.innerText = this.leftScore;

        console.log(this.rightScoreBox)

        this.direction = null;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.SPEED = 10;
    
        this.node.style.bottom = '450px';
        this.node.style.left = '715px';
        // added leftPos and bottomPos as ball props
        this.node.bottomPosition = Number(this.node.style.bottom.replace('px', ''));
        this.node.leftPosition = Number(this.node.style.left.replace('px', ''));
    
        this.boundMove = this.move.bind(this);
        
        this.boundBallInit = this.ballInit.bind(this);
        this.boundResetBall = this.resetBall.bind(this);
        this.boundScore = this.score.bind(this);


        setTimeout(this.boundMove, this.SPEED);
    }

    // return Math.floor(Math.random() * 14) * 50;
    ballInit() {
        if (this.xSpeed === 0 && this.ySpeed === 0) {
            const arr = [-1, 1]; 
            const posNegGenerator = arr[Math.floor(Math.random()*arr.length)];
            // assign random xspeed and yspeed values
            this.xSpeed = posNegGenerator * 5;
            this.ySpeed = (Math.random() * 2 - 1) * 5;
        }
        // Math.random() * 2 - 1
    }

    move() {
        // initialize ball as our HTML element, our vertical speed as ySpeed and horizontal speed as xSpeed
        const ball = this.node;
        let xSpeed = this.xSpeed; 
        let ySpeed = this.ySpeed; 
        // const direction = null;
        
        // convert x and y coordinates to 
        let bottomPosition = ball.bottomPosition = Number(ball.style.bottom.replace('px', ''));
        let leftPosition = ball.leftPosition = Number(ball.style.left.replace('px', ''));
        
        // bounce control flow that changes speed direction when ball hits top or bottom border
        if (bottomPosition < 80 || bottomPosition > 865 ) this.ySpeed = ySpeed = -ySpeed;
        if (leftPosition > 1425 ) {
            if (bottomPosition < this.playerRight() + 160 && bottomPosition > this.playerRight()) {
                this.xSpeed = xSpeed = -xSpeed;
                this.xSpeed -= 3;
                // console.log('on the paddle')
            } else {
                // this.rightScoreBox.innerHtml = '4';
                this.boundScore('left');
            }
        }
        if (leftPosition < 20) {
            if (bottomPosition < this.playerLeft() + 160 && bottomPosition > this.playerLeft()) {
                this.xSpeed = xSpeed = -xSpeed;
                this.xSpeed += 3;
                // console.log('on the paddle')
            } else {
                // this.leftScoreBox.innerHtml = '8';
                this.boundScore('right');
            }
        };
        
    
        ball.style.bottom = `${(bottomPosition += ySpeed)}px`;
        ball.style.left = `${(leftPosition += xSpeed)}px`;
 
        setTimeout(this.boundMove, this.SPEED);
    }
    score (scorer) {
        // check if sphere is out of bounds on left and right, in which case respawn new ball
        if (scorer === 'right') {
            this.rightScore++;
            this.rightScoreBox.innerText = this.rightScore;
            console.log(`Player right score: ${this.rightScore}`);
            this.boundResetBall();
        } else if (scorer === 'left') {
            this.leftScore++;
            this.leftScoreBox.innerText = this.leftScore;
            console.log(`Player left score: ${this.leftScore}`);
            this.boundResetBall();
        }
    };

    resetBall() {
        console.log(this.node.parentElement);
        this.parentEl.removeChild(this.node);
        this.node = document.createElement('div');
        this.node.setAttribute('id', 'ball');
        this.parentEl.appendChild(this.node);
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.node.style.bottom = '450px';
        this.node.style.left = '715px';
    }
}