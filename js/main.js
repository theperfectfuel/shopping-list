$(document).ready(function() {
	//Function for adding new item
	$( "body" ).on("click", ".button", function(event) {
    	var newItem = $('#itemAdd').val();


	    	$("<li class='list-item active-item'>" +
	    		"<input type='checkbox' class='check-done'></input>" +
	    		"<span class='list-label'>" + newItem + "</span>" +
	    		"<input type='submit' class='x-mark'></input>" +
	    		"</li>").appendTo("#shopping-list");
	    		// Function for deleting item
	    		$(".list-item").on("click", ".x-mark", function(event){
					$(this).parent(".list-item").remove();
				});

				//Function for changing to checked item
				$( "input" ).on("click", ".check-done", function(event){
					$(this).parent(".list-item")
					.toggleClass("active-item checked-item");
				});

	});

});