$(document).ready(function() {
	$("#formOne").submit(function(event) {
		const question1Input = $("input#question1").val();
		const question2Input = $("input#question2").val();
		const question3Input = $("input#question3").val();
		const question4Input = $("input#question4").val();
		const question5Input = $("input#question5").val();

		//$(".question1").text(question1Input);
		//$(".question2").text(question2Input);
		//$(".question3").text(question3Input);
		//$(".question4").text(question4Input);


		let count = 0;
		if ( question1Input === "front-end" || "front end" ) {
			count = count +1;
		} else {
			count = count -1;
		};


		if (question2Input === "user interface") {
			count = count +1;
		} else {
			count = count -1;
		};

		if (question3Input === "academia") {
			count = count +1;
		} else {
			count = count -1;
		};

		if (question4Input === "creativity") {
			count = count +1;
		} else {
			count = count -1;
		};

		if (question5Input === "dancing" || "dancing on bars") {
			count = count +1;
		} else {
			count = count -1;
		};

		if (count >= 1) {
			$("#javascript").show();
		} else if (count === 0) {
			$("#python").show();
		} else {
			$("#cSharp").show();
		};

		event.preventDefault();
	});
});