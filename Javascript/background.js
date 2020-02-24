var background = function(game){
    this.game = game;
    this.image = null;
    this.loaded = false;
    this.position = 0;

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
        this.image.src = 'sprites/background.png';
    }

    this.update = function(){
        this.position--;
        if(this.position == -288){
            this.position = 0;
        }
        
    }

    this.draw = function(){
        if(self.loaded == false){            
            return; 
        }
        self.game.context.drawImage(this.image,this.position,0);
        self.game.context.drawImage(this.image,this.position+288,0);
    }
}