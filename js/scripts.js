$(document).ready(function() {
	$("#formOne").submit(function(event) {
		const question1Input = $("input#question1").val();

		$(".question1").text(question1Input);

		let count = 0;
		if (question1 === front-end) {
			count = count +1;
		} else {
			count = count -1;
		};

		if (count > 0) {
			$("#javascript").show();
		} else if (count = 0) {
			$("#python").show();
		} else {
			$("#cSharp").show();
		}

		event.preventDefault();
	});
})