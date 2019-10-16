
//click functions for each of the button
//when button 1 is clicked, you look for the global variable button 1 and see what its value is
//add this number to your score (score = button 1 + score)
//put this score into the HTML (1st run: replacing score = 0 to score = 5 )

//global variables for the 4 buttons

var button1 = Math.floor(Math.random()*10)+1;
var button2 = Math.floor(Math.random()*10)+1;
var button3 = Math.floor(Math.random()*10)+1;
var button4 = Math.floor(Math.random()*10)+1;

//initalize a score variable

var score = 0;
var wins = 0;
var loses = 0;
// $('#win').html(win);
// $('#lose').html(0+lose);

// jquery function starts here

$(document).ready(function(){ 

// I setted for targeted randon number between from 30 to 100.
// which is computer picked.

var ranNum = Math.floor(Math.random()* 70)+30+1;
    $('#match-Number').html(ranNum);
    // console.log(ranNum);
                                                    // score =0  is the display order; this point I start with 0, 
    score = 0;
                                                    // then assigned to html h3 element
    $('#score').text(" " + score);
                                                    // assigned button1 function here once click 
    $(".btn1").on("click", function(){
                                                    // the clicked random number added by same number
        score += button1;
                                                    // check win global scope for function 
        checkWin() 
        
        });
    // console.log(button1); 
    $(".btn2").on("click", function(){
        score += button2;
        checkWin() 
            
        });
        // console.log(button2); 
    $(".btn3").on("click", function(){  
        score += button3;
        checkWin()
    
       });
        // console.log(button3);
    $(".btn4").on("click", function(){   
        score += button4;
        checkWin()

       });
       // console.log(button4);
    

function checkWin(){
    $('#score').html(score);
        // conditional for loses or Win
        if(score === ranNum){
            wins++;
            $('#win').html(wins);

            score = 0; 
            $('#score').html(score);
        
            ranNum = Math.floor(Math.random()* 70)+30+1;
            $('#match-Number').html(ranNum);

            button1 = Math.floor(Math.random()*10)+1;
            button2 = Math.floor(Math.random()*10)+1;
            button3 = Math.floor(Math.random()*10)+1;
            button4 = Math.floor(Math.random()*10)+1;
            

        }
        else if( score > ranNum){
            // increment loses, reset score, and generate a new random number
            loses++;
            $('#lose').html(loses);

            score = 0;
            $('#score').html(score);

            ranNum = Math.floor(Math.random()* 70)+30+1;
            $('#match-Number').html(ranNum);

            button1 = Math.floor(Math.random()*10)+1;
            button2 = Math.floor(Math.random()*10)+1;
            button3 = Math.floor(Math.random()*10)+1;
            button4 = Math.floor(Math.random()*10)+1;
       
        } 
    
   }
//    check()
//    function check(){
//        if(wins === 10 ){
//            alert("GONGRATULATIONS YOU WON.");
//        }else if(loses === 10){
//            alert("GAME OVER!");
//        }
           
       

//    }

 

});