$(document).ready(function() {

	$.ajax({
		url: "dogfood.json"
	}).done(function(dogData) {
		console.log("ajax ran!");
		var source = $("#dog-template").html();
		var template = Handlebars.compile(source);
		$("#dogtable").html(template(dogData));
	});

	$.ajax({
		url: "catfood.json"
	}).done(function(catData) {
		var source = $("#cat-template").html();
		var template = Handlebars.compile(source);
		$("#cattable").html(template(catData));
	});
});
