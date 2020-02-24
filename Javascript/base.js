var base = function(game){
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
        this.image.src = 'sprites/base.png';
    }

    this.update = function(){
        this.position -= 2;
        if(this.position == -336){
            this.position = 0;
        }
        
    }

    this.draw = function(){
        if(self.loaded == false){            
            return; 
        }
        self.game.context.drawImage(this.image,this.position,this.game.height - 87);
        self.game.context.drawImage(this.image,this.position + 336,this.game.height - 87);
    }
}