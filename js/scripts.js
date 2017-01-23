



$(function() {

	var $dayInput = $("#day");
	var $timeInput = $("#time");
	var $distanceInput = $("#distance");
	var $caloriesInput = $("#calories");

	var $dataEntered = $(".dataEntered");

	$("#submitData").on("click", function() {
		//Make sure input fields are not left blank
		if($dayInput.val() === "" || $timeInput.val() === "" || $distanceInput.val() === "" || $caloriesInput.val() === "") {
			//Display please fill in all text fields warning
			$(".warning").fadeIn(500).delay(1000).fadeOut(500);
		} else {
			//Create ul with data
			var $ulWork = $("<ul class'work'>" +
					"<li><strong>Day:</strong> " + $dayInput.val() + "</li>" +
					"<li><strong>Time Spent:</strong> " + $timeInput.val() + "</li>" +
					"<li><strong>Distance:</strong> " + $distanceInput.val() + "</li>" +
					"<li><strong>Calories Burned:</strong> " + $caloriesInput.val() + "</li>" +
					"</ul>");
			//Append ul with data to page
		  	$(".dataEntered").append($ulWork);
		  	//Clear input values for new entry
		  	$dayInput.val("");
		  	$timeInput.val("");
		  	$distanceInput.val("");
		  	$caloriesInput.val("");
		}
		

	});

});