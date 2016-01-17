$(document).ready(function() {
    //Function for adding new item
    $( "#list-container" ).on("click", ".button", function(event) {
        var newItem = $('#itemAdd').val();

        if (newItem.length != 0) {
        $("<li class='list-item active-item'>" +
            "<input type='checkbox' class='check-done'></input>" +
            "<span class='list-label'>" + newItem + "</span>" +
            "<input type='submit' class='x-mark'></input>" +
            "</li>").appendTo("#shopping-list");
        	$('#itemAdd').val('');
        } else {
        	$('#itemAdd').val('');
        }

        $("#itemAdd").keydown(function(e){
    		if(e.which === 13){
        	$(".button").click();
    	}
});

    });

    // Function for deleting item
    $("ul").on("click", ".list-item .x-mark", function(event){
        $(this).parent(".list-item").remove();
    });

    //Function for changing to checked item
    $( "ul" ).on("click",".list-item .check-done", function(event){
        $(this).parent()
        .toggleClass("active-item checked-item");
    });

});


// Old code - save to discuss with mentor
/*
$(document).ready(function() {
	//Function for adding new item
	$( "#list-container" ).on("click", ".button", function(event) {
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
			$( ".list-item" ).on("click", ".check-done", function(event){
				$(this).parent(".list-item")
				.toggleClass("active-item checked-item");
			});

	});

});
*/
