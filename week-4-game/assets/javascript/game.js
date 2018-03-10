// $(document).ready(function(){
    // var bustaRhymes = 100;
    // var guru = 180;
    // var meth = 120;
    // var qTip = 150;

    $(document).ready(function(){

		var bustaRhymes = 100;
		var guru = 120;
		var meth = 180;
		var qtip = 150;
		var opponent;
		var defender;
		var player;
		var yourPlayer;
		var playerHealthPower;
		var opponentHealthPower;
		var playerAttack;
		var opponentAttack;
        $("#restartGame").hide();
        $("#micdrop").hide();

		$("#characters").find('div').on("click", function(){
            yourPlayer = (this.id);
            console.log(yourPlayer);
			$(("#" + yourPlayer)).appendTo($("#player-character"));
			player = $("#player-character").children("#" + yourPlayer).text();
			var myPlayer = $.trim(player)
			if(myPlayer === "Busta Rhymes"){
				playerHealthPower = bustaRhymes;
				playerAttack = 5;
			}else if(myPlayer === "Guru"){
				playerHealthPower = guru;
				playerAttack = 8;
			}else if(myPlayer === "Method Man"){
				playerHealthPower = meth;
				playerAttack = 20;
			}else if(myPlayer === "Q-Tip"){
				playerHealthPower = qtip;
				playerAttack = 25;
			};

			$("#player-character div").off("click");
			for (var i = 0; i < 3; i++){
				var enemy = ($("#characters div").get(0));
				$(enemy).appendTo($("#enemies-available"));
			}

			$("#enemies-available div").off("click");
			$("#enemies-available div").on("click", function(){
				$("#game-status").empty();
				defender = (this.id);;
				$(("#" + defender)).appendTo($("#defender"));
                opponent = $("div").children("#" + defender).text();
                $('#enemies-available').hide();
				console.log(opponent);
				var myOpponent = $.trim(opponent)
				console.log(myOpponent);
				if(myOpponent === "Busta Rhymes"){
					opponentHealthPower = bustaRhymes;
					opponentAttack = 5;
				}else if(myOpponent === "Guru"){
					opponentHealthPower = guru;
					opponentAttack = 8;
				}else if(myOpponent === "Method Man"){
					opponentHealthPower = meth;
					opponentAttack = 20;
				}else if(myOpponent === "Q-Tip"){
					opponentHealthPower = qtip;
					opponentAttack = 25;
				}
			$("#p-health-power").text("Your Health Power: " + playerHealthPower);
			$("#o-health-power").text(opponent + "Health Power: " + opponentHealthPower);
			});
			// $("#defender div").off("click");
			$("#attack").click(function(){
				if($("#" + defender).length){
					$("#game-status").empty();
					attack();
				}else{
					$("#game-status").text("No enemy has been chosen.");
				}
			});

			$("#restartGame").click(function(){
				console.log("this button works!")
				location.reload(true);
			});

		});

		function attack(){
			console.log(playerAttack);
			$("#game-status").append("You attacked " + opponent + " for " + playerAttack + " damage."); 
			$("#game-status").append("<div>" + opponent + "attacked you" + " for " + opponentAttack + " damage.</div>");

			playerHealthPower = playerHealthPower - opponentAttack;
			opponentHealthPower = opponentHealthPower - playerAttack;

			$("#p-health-power").text("Your Health Power: " + playerHealthPower);
			$("#o-health-power").text(opponent + "Health Power: " + opponentHealthPower);

			if(playerHealthPower > 0 & opponentHealthPower > 0){
				$("#game-status").empty();

				$("#game-status").append("You attacked " + opponent + " for " + playerAttack + " damage."); 
				$("#game-status").append("<div>" + opponent + "attacked you" + " for " + opponentAttack + " damage.</div>");
				playerAttack = playerAttack + playerAttack;
				playerHealthPower = playerHealthPower - opponentAttack;
				opponentHealthPower = opponentHealthPower - playerAttack;
			}
			else if(playerHealthPower <= 0 & opponentHealthPower > 0){
				$("#game-status").empty();
				$("#game-status").append("You have been defeated. GAME OVER!!!");
				$("#restartGame").show();
			}
			else if(opponentHealthPower <= 0 & playerHealthPower > 0){
				$("#game-status").empty();
				$("#" + defender).remove();
				if ($("#enemies-available").children().length > 1 ) {
                    $('#enemies-available').show();
					$("#game-status").append("You have defeated " + opponent + ". You can choose to fight another enemy.");
				}else{
                    $("#game-status").text("You have vanquished all of the foe's. Drop that mic!");
                    $("#restartGame").show();
                    $("#micdrop").show();
				}
			}
		
		}

});
// When the game starts, the player will choose a character by clicking on the fighter's picture. The player will fight as that character for the rest of the game.

// The player must then defeat all of the remaining fighters. Enemies should be moved to a different area of the screen.

// The player chooses an opponent by clicking on an enemy's picture.

// Once the player selects an opponent, that enemy is moved to a defender area.

// The player will now be able to click the attack button.

// Whenever the player clicks attack, their character damages the defender. The opponent will lose HP (health points). These points are displayed at the bottom of the defender's picture.

// The opponent character will instantly counter the attack. When that happens, the player's character will lose some of their HP. These points are shown at the bottom of the player character's picture.

// The player will keep hitting the attack button in an effort to defeat their opponent.

// When the defender's HP is reduced to zero or below, remove the enemy from the defender area. The player character can now choose a new opponent.

// The player wins the game by defeating all enemy characters. The player loses the game the game if their character's HP falls to zero or below.

// Each character in the game has 3 attributes: Health Points, Attack Power and Counter Attack Power.

// Each time the player attacks, their character's Attack Power increases by its base Attack Power.

// For example, if the base Attack Power is 6, each attack will increase the Attack Power by 6 (12, 18, 24, 30 and so on).

// The enemy character only has Counter Attack Power

// Unlike the player's Attack Points, Counter Attack Power never changes

// The Health Points, Attack Power and Counter Attack Power of each character must differ

// No characters in the game can heal or recover Health Points

// A winning player must pick their characters wisely by first fighting an enemy with low Counter Attack Power. This will allow them to grind Attack Power and to take on enemies before they lose all of their Health Points. Healing options would mess with this dynamic

// Your players should be able to win and lose the game no matter what character they choose. The challenge should come from picking the right enemies, not choosing the strongest player
// }