var playing=false;
var score;
var trialsleft;
var fruits=['apple', 'banana', 'cherries', 'grapes', 'mango', 'orange', 'peach', 'pear', 'watermelon'];
var action;
var step;
$(function(){
    //Click on start reset button
    $("#startreset").click(function(){
        
        //we are playing
        if(playing==true){
            
            //reload page
            location.reload();
            
        }
        
        else{
            
            //we are not playing
            playing=true; //game initiated
            
            score=0; //score set to 0
            $("#scorevalue").html(score);
            
            //show trials left
            $("#trialsleft").show();
            trialsleft=3;
            addHearts();
            
            //hide game over box
            $("#gameover").hide();
            
            //change button text to reset game
            $("#startreset").html("Reset Game");
            
            startAction();
            
        }
    });

    //are we playing?
        //yes
            //reload page
        //no
            //show trialsleft box
            //change button text to reset game
            //1. create random fruit
            //define random step
            //2. move fruit down one step every 30sec
            //is fruit too low?
            //no->repeat step 2
            //yes->any trials left?
                //yes: repeat number 1
                //no: game over, button text to start game
    
    $("#fruit1").mouseover(function(){
       score++;
        $("#scorevalue").html(score);//update the score
        
        //play the music
       // document.getElementById("slicesound").play();
        $("#slicesound")[0].play();
        
        //stop the fruit
        clearInterval(action);
        
        //hide fruit
        $("#fruit1").hide("explode", 500); // slicing the fruit
        
        //send a new fruit
        setTimeout(startAction, 500);
    });
//slice fruit
    //play sound
    //explode fruit

function addHearts(){
    $("#trialsleft").empty();
    for(i=0; i<trialsleft; i++){
                $("#trialsleft").append('<img src="images/heart.png" class="life">');
            }
}

function startAction(){
    $("#fruit1").show();
    chooseFruit(); //choose random fruit
    $("#fruit1").css({'left' : Math.round(Math.random()*550), 'top' : -50}); //random position horizontally
    
    //generate a random step
    step=5+Math.round(10*Math.random()); //change step
    
    //move fruit down by one step every 10ms
    action = setInterval(function(){
        //move fruit by one step
        $("#fruit1").css('top', $("#fruit1").position().top + step);
        
        
        //check if fruit is too low
    if($("#fruit1").position().top > $("#fruitcontainer").height()){
       //check trials left
       if(trialsleft>1){
        $("#fruit1").show();
    chooseFruit(); //choose random fruit
    $("#fruit1").css({'left' : Math.round(Math.random()*550), 'top' : -50}); //random position horizontally
    
    //generate a random step
    step=1+Math.round(5*Math.random()); //change step
        
        //reduce trials by one variable
        trialsleft --;
        
        //populate trials left box
        addHearts();
    }
        else{//game over
            playing=false; // we are not playing anymore
            $("#startreset").html("Start Game"); // change button to start game
            $("#gameover").show();
            $("#gameover").html("<p>Game Over!</p><p>Your Score is "+ score+ "</p>");
            $("#trialsleft").hide();
            stopAction();
        }
       }
    }, 10); 
}
    
    
    
// $("#fruitcontainer").append('<img src="images/apple.png" class="fruit">');


function chooseFruit(){
    $("#fruit1").attr('src', 'images/'+fruits[Math.round(8*Math.random())]+'.png');
}

//stop dropping fruits
function stopAction(){
    clearInterval(action);
    $("#fruit1").hide();
}
    });
