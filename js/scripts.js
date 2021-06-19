$(document).ready(function() {
	$("#formOne").submit(function(event) {
		const question1Input = $("input#question1").val();

		$(".question1").text(question1Input);
	})
})