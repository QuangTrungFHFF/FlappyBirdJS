var bird = function(game){
    this.game = game;
    this.images = [];
    this.loaded = [false,false,false];

    this.currentBirdImage = null;    
    this.currentFrame = 0;

    self = this;


    this.init = function(){
        this.loadImages();
    }

    this.loadImages = function(){
        var imgBird = new Image();
        var imgBirdDown = new Image();
        var imgBirdUp = new Image();

        imgBird.onload = function(){
            self.loaded[0] = true;
            self.currentBirdImage = imgBird;
            self.images.push(imgBird);
        }

        imgBirdUp.onload = function(){
            self.loaded[1] = true;
            self.images.push(imgBirdUp);
        }

        imgBirdDown.onload = function(){
            self.loaded[2] =true;
            self.images.push(imgBirdDown);
        }      
        
        //Load all the birds
        imgBird.src = 'sprites/bird.png';
        imgBirdUp.src = 'sprites/birdup.png';
        imgBirdDown.src = 'sprites/birddown.png';

        
        
        
    }

    this.update = function(){
        //Check if all Images are loaded
        if(!self.loaded[0] || !self.loaded[1] || !self.loaded[2]){
            return;
        }

        self.currentFrame++;
        if(self.currentFrame == 30){
            self.currentFrame = 0;
        }

        this.changeImage(self.currentFrame);
        
        //console.log('bird update');
    }

    this.changeImage = function(frame){
        if(frame == 9){
            self.currentBirdImage = self.images[0];
        }
        else if(frame == 19){
            self.currentBirdImage = self.images[1];
        }else if(frame == 29){
            self.currentBirdImage = self.images[2];
        }
    }

    this.draw = function(){
        if(self.loaded[0] && self.loaded[1] && self.loaded[2]){
            self.game.context.drawImage(self.currentBirdImage, 100, 100);
            //console.log('bird drawn');
        }
    }
}