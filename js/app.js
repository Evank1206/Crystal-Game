// var randomNum = [1,2,3,4,5,6,7,8,9,10];
// // console.log(randomNum);
// for(var i = 0; i<randomNum.length; i++){

//     function 

// }

//global variables for the 4 buttons
// button 1 = random number
// button 2 = 

//initalize a score variable
//score = 0;


//click functions for each of the button
//when button 1 is clicked, you look for the global variable button 1 and see what its value is
//add this number to your score (score = button 1 + score)
//put this score into the HTML (1st run: replacing score = 0 to score = 5 )

var button1 = Math.random()*10;
var button2 = Math.random()*10;
var button3 = Math.random()*10;
var button4 = Math.random()*10;

// $(document).ready(function(){
    $(".btn1").on("click", function(){
        console.log(button1);
$('#Score').text("test");


    });
    $(".btn2").on("click", function(){
        console.log(button2);
    });
    $(".btn3").on("click", function(){
        console.log(button3);
    });
    $(".btn4").on("click", function(){
        console.log(button4);
    });

    // var ranNum = Math.floor(Math.random()* 60)+30;
    // $('#Match-Number').html(ranNum);
// console.log(ranNum);


    // var getNum = Math.floor(Math.random()*10)+1;
// console.log(getNum);
    // $('#Score').html(getNum);


// var getNum1 = Math.floor(Math.random()*10)+1;

// $('.btn1').html(getNum1);





// });