"use strict"
var bird = function (game) {
    this.game = game;
    this.images = [];
    this.loaded = [false, false, false];    

    this.currentBirdImage = null;
    this.currentFrame = 0;
    this.birdPos = 0;
    this.birdSpeed = 0;
    this.birdAcceleration = 1.5;
    this.isUpDirection = false; // false = down ; true = up;

    var self = this;

    this.init = function () {
        this.loadImages();
    }

    this.loadImages = function () {
        var imgBird = new Image();
        var imgBirdDown = new Image();
        var imgBirdUp = new Image();

        imgBird.onload = function () {
            self.loaded[0] = true;
            self.currentBirdImage = imgBird;
            self.images.push(imgBird);
        }

        imgBirdUp.onload = function () {
            self.loaded[1] = true;
            self.images.push(imgBirdUp);
        }

        imgBirdDown.onload = function () {
            self.loaded[2] = true;
            self.images.push(imgBirdDown);
        }

        //Load all the birds
        imgBird.src = 'sprites/bird.png';
        imgBirdUp.src = 'sprites/birdup.png';
        imgBirdDown.src = 'sprites/birddown.png';
    }

    this.update = function () {
        //Check if all Images are loaded
        if (!self.loaded[0] || !self.loaded[1] || !self.loaded[2]) {
            return;
        }

        //Flappy bird animation
        self.currentFrame++;
        if (self.currentFrame == 16) {
            self.currentFrame = 0;
        }
        this.changeImage(self.currentFrame);

        //Adjust the bird position
        if (this.birdPos < 0) {
            this.birdSpeed += this.birdAcceleration;            
            this.birdPos = 0;
            
        } else if (this.birdPos <= 480) {
            this.birdSpeed += this.birdAcceleration;
            this.birdPos += this.birdSpeed * 1;
            //console.log(this.birdPos);
            //console.log(this.birdSpeed);
        }
        else{
            this.game.gameOver = true;
        }

        //Check collision
        this.checkCollision();

        


        //console.log('bird update');
    }

    this.checkCollision = function(){
        //console.log("YUP" + this.game.pipe.positionYUp);
        //console.log("bird" + this.birdPos);
        if(
            (
                66 + 34 >= this.game.pipe.positionX && 66 <= this.game.pipe.positionX +52
            ) &&             
            (
                this.birdPos + 24 >= this.game.pipe.positionY || this.birdPos <= this.game.pipe.positionYUp +320  
            )){
            this.game.gameOver = true;
        }
    }

    

    this.changeImage = function (frame) {
        if (frame == 5) {
            self.currentBirdImage = self.images[0];
        } else if (frame == 10) {
            self.currentBirdImage = self.images[1];
        } else if (frame == 15) {
            self.currentBirdImage = self.images[2];
        }
    }

    this.flap = function () {
        //console.log('click');
        self.birdSpeed = -9;


    }

    this.draw = function () {
        if (self.loaded[0] && self.loaded[1] && self.loaded[2]) {
            self.game.context.drawImage(self.currentBirdImage, 66, this.birdPos);
            //console.log('bird drawn');
        }
    }
}