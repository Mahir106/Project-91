player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name + " : ";
document.getElementById("player2_name").innerHTML=player2_name + " : ";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question turn - " + player1_name;
document.getElementById("player_answer").innerHTML="Answer turn - " + player2_name;

function send(){
    get_number1=document.getElementById("number_1").value;
    get_number2=document.getElementById("number_2").value;


    question_word="<h4>"+ get_number1 + "X" + get_number2 + "</h4>";
    input_box="<br>Answer : <input type='text' id='input_checkbox'>";
    check_btn="<br><br> <button class='btn btn-info' onclick='check()'>Check</button>";
    row= question_word + input_box + check_btn;
    document.getElementById("output").innerHTML= row;
    document.getElementById("number_1").value= "";
    document.getElementById("number_2").value= "";
}