var pipe = function(game){
    this.game = game;
    this.image = null;
    this.loaded = false;
    this.positionX = 300;
    this.positionY =120;
    this.gap = 100;
    this.positionYUp = this.positionY - this.gap -320;

    var self = this;

    this.init = function(){
        this.loadImage();
    }

    this.loadImage = function(){
        this.image = new Image();
        this.image.onload = function(){
            self.loaded = true;
            console.log('image loaded');
        }
        this.image.src = 'sprites/pipe-red.png';
    }

    this.update = function(){
        this.positionX -= 2;
        if(this.positionX <= -56){
            this.positionX = 300;
            this.positionY = Math.floor(Math.random()*(420 - 120 + 1) + 120);
            this.gap = Math.floor(Math.random()*(180 - 80 + 1) + 80);
        }
        
        
    }

    this.draw = function(){
        if(self.loaded == false){            
            return; 
        }
        self.game.context.drawImage(this.image,this.positionX,this.positionYUp);
        self.game.context.drawImage(this.image,this.positionX, this.positionY);
    }
}