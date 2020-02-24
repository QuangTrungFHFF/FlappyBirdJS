var bird = function(game){
    this.game = game;
    this.images = [];
    this.loaded = [false,false,false];

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
        }

        imgBirdUp.onload = function(){
            self.loaded[1] = true;
        }

        imgBirdDown.onload = function(){
            self.loaded[2] =true;
        }      
        
        //Load all the birds
        imgBird.src = 'sprites/bird.png';
        imgBirdUp.src = 'sprites/birdup.png';
        imgBirdDown.src = 'sprites/birddown.png';

        this.images.push(imgBird);
        this.images.push(imgBirdUp);
        this.images.push(imgBirdDown);
    }

    this.update = function(){
        //console.log('bird update');
    }

    this.draw = function(){
        if(self.loaded[0] && self.loaded[1] && self.loaded[2]){
            self.game.context.drawImage(self.images[0], 100, 100);
            //console.log('bird drawn');
        }
    }
}