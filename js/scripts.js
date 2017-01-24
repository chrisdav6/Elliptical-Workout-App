



$(function() {

	var $dayInput = $("#day");
	var $timeInput = $("#time");
	var $distanceInput = $("#distance");
	var $caloriesInput = $("#calories");

	var $dataEntered = $(".dataEntered");

	/* Warning button close
	$(".warning a").on("click", function() {
		$(".warning").fadeOut(500);
	});
	*/

	var $timeData = [];
	var $distanceData = [];
	var $caloriesData = [];

	//Add array data function
	function sumArray(array) {
	  var total = 0;
		for (i = 0; i < array.length; i++) {
    	total += array[i];
		}
		return total;
	}


	$("#submitData").on("click", function() {
		//Make sure input fields are not left blank
		if($dayInput.val() === "" || $timeInput.val() === "" || $distanceInput.val() === "" || $caloriesInput.val() === "") {
			//Display please fill in all text fields warning
			$(".warning").fadeIn(500).delay(2000).fadeOut(500);
		} else {
			//Convert text input into number then push data into arrays
			$timeData.push(parseFloat($timeInput.val()));
			$distanceData.push(parseFloat($distanceInput.val()));
			$caloriesData.push(parseInt($caloriesInput.val()));
			//Create ul with data
			var $ulWork = $("<ul class='work'>" +
					"<li><strong>Day:</strong> " + $dayInput.val() + "</li>" +
					"<li><strong>Time Spent:</strong> " + $timeData[$timeData.length - 1] + " minutes</li>" +
					"<li><strong>Distance:</strong> " + $distanceData[$distanceData.length - 1] + " miles</li>" +
					"<li><strong>Calories Burned:</strong> " + $caloriesData[$caloriesData.length - 1] + "</li>" +
					"</ul>");
			//Append ul with data to page
	  	$(".dataPopulation").append($ulWork);
	  	//Calculate totalWork and update page
	  	$(".timeTotal").text(sumArray($timeData));
	  	$(".distanceTotal").text(sumArray($distanceData));
	  	$(".caloriesTotal").text(sumArray($caloriesData));
	  	//Testing Purposes
	  	console.log($timeData, $distanceData, $caloriesData);
	  	//Clear input values for new entry
	  	$dayInput.val("");
	  	$timeInput.val("");
	  	$distanceInput.val("");
	  	$caloriesInput.val("");
		}
		

	});

});