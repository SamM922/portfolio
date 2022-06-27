var wins = 0;
var losses = 0;
var ties = 0;
$("#rock").click(function(){
    var comp = Math.floor(Math.random() * 3);
    if (comp === 0){
        $("#result").text("Tie! Rock v Rock");
        ties = ties + 1;
        $("#counter").text(wins + " Wins, " + losses + " Losses, " + ties + " Ties");
    } else if (comp === 1){
        $("#result").text("You lose! Rock v Paper");
        losses = losses + 1;
        $("#counter").text(wins + " Wins, " + losses + " Losses, " + ties + " Ties");
    } else if (comp === 2){
        $("#result").text("You win! Rock v Scissors");
        wins = wins + 1;
        $("#counter").text(wins + " Wins, " + losses + " Losses, " + ties + " Ties");
    } else {
        $("#result").text("There was an error");
    }
});
$("#paper").click(function(){
    var comp = Math.floor(Math.random() * 3);
    if (comp === 0){
        $("#result").text("You win! Paper v Rock");
        wins = wins + 1;
        $("#counter").text(wins + " Wins, " + losses + " Losses, " + ties + " Ties");
    } else if (comp === 1){
        $("#result").text("Tie! Paper v Paper");
        ties = ties + 1;
        $("#counter").text(wins + " Wins, " + losses + " Losses, " + ties + " Ties");
    } else if (comp === 2){
        $("#result").text("You lose! Paper v Scissors");
        losses = losses + 1;
        $("#counter").text(wins + " Wins, " + losses + " Losses, " + ties + " Ties");
    } else {
        $("#result").text("There was an error");
    }
});
$("#scissors").click(function(){
    var comp = Math.floor(Math.random() * 3);
    if (comp === 0){
        $("#result").text("You lose! Scissors v Rock");
        losses = losses + 1;
        $("#counter").text(wins + " Wins, " + losses + " Losses, " + ties + " Ties");
    } else if (comp === 1){
        $("#result").text("You win! Scissors v Paper");
        wins = wins + 1;
        $("#counter").text(wins + " Wins, " + losses + " Losses, " + ties + " Ties");
    } else if (comp === 2){
        $("#result").text("Tie! Scissors v Scissors");
        ties = ties + 1;
        $("#counter").text(wins + " Wins, " + losses + " Losses, " + ties + " Ties");
    } else {
        $("#result").text("There was an error");
    }
});
$("#reset").click(function(){
    $("#result").text("Ready!");
});
