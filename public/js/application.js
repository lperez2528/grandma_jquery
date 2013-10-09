$(document).ready(function() {
	$('form').submit(function(event){
		event.preventDefault();
		var url = $(this).attr('action');
		var data = $(this).serialize();
		$.post(url, data, function(response){
			$("#ajax").remove();
			$('#response').append(response);
		})
	})
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});
