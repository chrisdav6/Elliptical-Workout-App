



$(function() {

	var $dayInput = $("#day");
	var $timeInput = $("#time");
	var $distanceInput = $("#distance");
	var $caloriesInput = $("#calories");
	var $weekCount = 1;

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

	//Prevent form submit default action
	$("form").submit(function(e) {
		e.preventDefault();
	});


	$("#submitData").on("click", function() {
		//Make sure input fields are not left blank
		if($dayInput.val() === "" || $timeInput.val() === "" || $distanceInput.val() === "" || $caloriesInput.val() === "") {
			//Display please fill in entire form warning
			$(".warning h2").text("Please complete entire form").prepend("<i class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></i>").closest(".warning").removeClass("bg-primary").addClass("alert-danger").fadeIn(500).delay(2000).fadeOut(500);
		}else if(isNaN($timeInput.val()) || isNaN($distanceInput.val()) || isNaN($caloriesInput.val())) {
			//Display please fill in only numbers warning
			$(".warning h2").text("Please only input numbers").prepend("<i class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></i>").closest(".warning").removeClass("bg-primary").addClass("alert-danger").fadeIn(500).delay(2000).fadeOut(500);
		} else {
			$(".warning h2").text("Data Successfully Added!").prepend("<i class='glyphicon glyphicon-ok-sign' aria-hidden='true'></i>").closest(".warning").removeClass("alert-danger").addClass("bg-primary").fadeIn(500).delay(2000).fadeOut(500);
			//Convert text input into number then push data into arrays
			$timeData.push(parseFloat($timeInput.val()));
			$distanceData.push(parseFloat($distanceInput.val()));
			$caloriesData.push(parseInt($caloriesInput.val()));
			//Create ul with data
			var $ulWork = $("<ul class='work'>" +
					"<li><strong>Day:</strong> " + $dayInput.val() + "</li>" +
					"<li><strong>Time Spent:</strong> " + $timeData[$timeData.length - 1] + " minutes</li>" +
					"<li><strong>Distance:</strong> " + $distanceData[$distanceData.length - 1] + " miles</li>" +
					/* Edit and remove button */
					/*"<li><button class='remove btn btn-default'>Edit</button></li>" +
					"<li><button class='remove btn btn-danger'>Remove</button></li>" +*/
					"</ul>");
			//Create Week Heading
			var $weekHeading = $("<h3 class='week bg-primary'></h3>");
			$($weekHeading).text("Week - " + $weekCount);
			//If start of the week add heading, if week longer than 6 days update week count - Workout based on 6 day work week
			if($timeData.length === 1) {
				$(".dataPopulation").append($weekHeading);
			}else if($dayInput.val() === "Monday") {
				$weekCount++;
				$($weekHeading).text("Week - " + $weekCount);
				$(".dataPopulation").append($weekHeading);
			}
			

			//Append ul with data to page using a fade in effect
	  	$(".dataPopulation").append($ulWork).children(':last').hide().fadeIn(1000);;
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