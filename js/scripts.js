$(document).ready(function() {
	$("#formOne").submit(function(event) {
		const question1Input = $("input#question1").val();
		const question2Input = $("input#question2").val();
		const question3Input = $("input#question3").val();
		const question4Input = $("input#question4").val();
		const question5Input = $("input#question5").val();
		const question6Input = $("input#question6").val();

		let count = 0;

		if ( question1Input === "front-end") {
			count += 1;
		} else {
			count -= 1;
		};

		if (question2Input === "user interface") {
			count += 1;
		} else {
			count -= 1;
		};

		if (question3Input === "academic") {
			count += 1;
		} else {
			count -= 1;
		};

		if (question4Input === "creativity") {
			count += 1;
		} else {
			count -= 1;
		};

		if (question5Input === "dancing") {
			count += 1;
		} else {
			count -= 1;
		};

		if (question6Input === "chocolate") {
			count += 1;
		} else {
			count -= 1;
		};

		$("body").removeClass();

		if (count >= 1) {
			$("#javascript").show();
		} else if (count === 0) {
			$("#python").show();
		} else {
			$("#cSharp").show();
		};

		$("#count").text(count);
    $("#quote").show()

		event.preventDefault();
	});
});