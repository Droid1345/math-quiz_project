var player1,player2;
function adduser(){
    player1= document.getElementById("player1_name_input").value;
    player2= document.getElementById("player2_name_input").value;
    localStorage.setItem("Player1name",player1);
    localStorage.setItem("Player2name",player2);
    window.location="https://youtube.com";
}