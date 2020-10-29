class Game{
    constructor(){
        
    }

    start(){
        if (gameState === 0){
        form = new Form();
        form.display();    
    }
    
}
choosePlayer(){
    image(player1_img,100,100,300,400);
    image(player2_img,600,100,300,450);
    image(player3_img,1100,100,300,450);
    var button1 = createButton("Select");
    var button2 = createButton("Select");
    var button3 = createButton("Select");
    var button4 = createButton("START");
    button1.position(250,550);
    button2.position(750,550);
    button3.position(1250,550);
    button4.position(680,650);
    button4.style('height', '40px');
    button4.style('width', '200px');
    button4.style('background', 'pink');

  /*  button1.mousePressed(function(){
        button1.style('background','red');
        player.addImage(player1_img);
          
    }) 

    button2.mousePressed(function(){
        button3.style('background','red');
        player.addImage(player2_img);
         
    }) 

    button3.mousePressed(function(){
        button3.style('background','red');
        player.addImage(player3_img);
      
    }) */

    var start = createButton("Start");
    start.position(700,800);

    /*if(button4.mousePressed){
        gameState = 2;
        button1.hide();
        button2.hide();
        button3.hide();
        button4.hide();
        player1_img.hide();
        player2_img.hide();
        player3_img.hide();
    }*/
    

/*else if(button2.mousePressed){
    button2.style("background","red");
 
}
else if(button3.mousePressed){
    button3.style("background","red");
     
}
else{
    button1.style("background","white");
    button2.style("background","white");
    button3.style("background","white");
}*/
    
}
}
