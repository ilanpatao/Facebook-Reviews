// Add the click function for the go button
$('.go').click(function(){
	// Get the place ID value
	var pageid = $('#pageid').val();
	if (pageid == ''){
		// Alert if field is blank, else continue
		alert('You didn\'t enter a page ID!');
	} else {
		// Call my API
		$.getJSON("https://cors-anywhere.herokuapp.com/https://www.reviewsmaker.com/api/public/facebook?pageid=" + pageid, function (data){
			// Iterate through the results for this demo and display them on the page
			$.each( data.reviews, function( key, value ) {
			  $('.results').append('<b>Review Author: </b>' + value.author + "<br>");
			  $('.results').append('<b>Review Date: </b>' + value.date + "<br>");
			  $('.results').append('<b>Review Rating: </b>' + value.rating + "<br>");
			  $('.results').append('<b>Review Text: </b>' + value.text + "<hr>");
			});
			// Display JSON feed in our input for the demo
			var json = JSON.stringify(data);
			$("#jsonresults").val(json);
		});
	}
});