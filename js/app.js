// var randomNum = [1,2,3,4,5,6,7,8,9,10];
// // console.log(randomNum);
// for(var i = 0; i<randomNum.length; i++){

//     function 

// }

$(document).ready(function(){

    var ranNum = Math.floor(Math.random()* 60)+30;
    $('#Match-Number').html(ranNum);
// console.log(ranNum);


var getNum = Math.floor(Math.random()*10)+1;
// console.log(getNum);
$('#Score').html(getNum);


// var getNum1 = Math.floor(Math.random()*10)+1;

// $('.btn1').html(getNum1);





});