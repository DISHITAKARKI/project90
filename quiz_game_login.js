player1_name = localStorage.getItem("winter")
player2_name = localStorage.getItem("karina")

score1 = 0;
score2 = 0;




function send(){
    number1=document.getElementById("NO.1").value
    number2=document.getElementById("NO.2").value
    actual_answer=parseInt(number1) *parseInt(number2)
    question = "<h4>" + number1 +"X"+number2 + "</h4>";

input_box= "<br>answer:<input type='text' id='input_check_box'>"
check_button="<br><br><button class='btn btn-info' onclick='check()'>check</button>"
row= question + input_box+ check_button
document.getElementById("output").innerHTML=row;
document.getElementById("NO.1").value="";
document.getElementById("NO.2").value="";
}
question_turn="player1"
answer_turn="player2"

function check(){
get_answer= document.getElementById("input_check_box").value;
if(get_answer== actual_answer){
if(answer_turn == "player1"){

    score1 = score1+1;
    document.getElementById("player1_score").innerHTML = score1
}
else{
    score2 = score2+1;
    document.getElementById("player2_score").innerHTML = score2
}
}
if(question_turn=="player1"){
    question_turn="player2"
    document.getElementById("player_question").innerHTML ="question turn- "+player2_name
    }
    else{
        question_turn="player1"
        document.getElementById("player_question").innerHTML ="question turn- "+player1_name
    }
}

if(answer_turn=="player1"){
    answer_turn="player2"
      document.getElementById("player_answer").innerHTML ="answer turn- "+player2_name
      }
      else{
         answer_turn="player1"
          document.getElementById("player_answer").innerHTML ="answer turn- "+player1_name
      }
  
      document.getElementById("output").innerHTML = "" ;
  