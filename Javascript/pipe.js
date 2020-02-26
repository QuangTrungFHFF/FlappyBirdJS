"use strict"
var pipe = function(game){
    this.game = game;
    this.image = [];
    this.loaded = [false,false];
    this.positionX = 300;
    this.positionY = 120;
    this.gap = 100;
    this.positionYUp = -300;
    this.frame =0;
    this.interval = 2;

    var self = this;

    this.init = function(){
        this.loadImage();
    }

    this.loadImage = function(){
        this.image[0] = new Image();
        this.image[0].onload = function(){
            self.loaded[0] = true;
            console.log('image 1 loaded');
        }
        this.image[0].src = 'sprites/pipe-red.png';

        this.image[1] = new Image();
        this.image[1].onload = function(){
            self.loaded[1] = true;
            console.log('image 2 loaded');
        }
        this.image[1].src = 'sprites/pipe-red2.png';
    }

    this.update = function(){
        this.frame++;
        if(this.frame > 700)
        {
            self.interval++;
            this.frame = 0;
        }
        this.positionX -= self.interval;
        
        if(this.positionX <= -56){
            this.positionX = 300;
            this.positionY = Math.floor(Math.random()*(420 - 120 + 1) + 120);
            this.gap = Math.floor(Math.random()*(160 - 80 + 1) + 80);
            this.positionYUp = this.positionY - this.gap -320;
        }

        //Check score
        this.checkScore();
    }

    this.checkScore = function(){
        if(this.positionX + -14 >=0 && this.positionX + -14 < self.interval ){
            this.game.score += self.interval - 1;
            console.log("score" + this.game.score);
        }
        
    }

    this.draw = function(){
        if(self.loaded[0] == false || self.loaded[1] == false){            
            return; 
        }
        self.game.context.drawImage(this.image[1],this.positionX,this.positionYUp);
        self.game.context.drawImage(this.image[0],this.positionX, this.positionY);
    }
}