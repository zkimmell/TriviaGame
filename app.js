
var userChoice
var score

$(document).ready(function() 
function startGame(){
	$("#game").show();
	setTimeout(endGame,60000)
;}

function endGame(){
	alert("You scored:" + score);
	window.reset();}

$("#game").hide();

$("#correctAnswers").hide();


//user clicks start button, absl positioning
$("#startButton").on("click",startGame(), removeElement("#startButton"));


var cat1 = ($("input[@name=q1]:checked").val() != "a");

var cat2 = ($("input[@name=q2]:checked").val() != "b");

var cat3 = ($("input[@name=q3]:checked").val() != "d");

var cat4 = ($("input[@name=q4]:checked").val() != "d");

var cat5 = ($("input[@name=q5]:checked").val() != "c");

var cat6 = ($("input[@name=q6]:checked").val() != "a");

var cat7 = ($("input[@name=q7]:checked").val() != "c");

var cat8 = ($("input[@name=q8]:checked").val() != "d");





var catStr = 'You answered the following questions incorrectly: ' + categories.join(', ') + '';                     
$("#categorylist").text(catStr);                        
$("#categorylist").show("slow");            


