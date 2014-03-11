$(document).ready(function() {

	// Save it using the Chrome extension storage API.
	chrome.storage.sync.get(null, function(list) {
		// Notify that we saved.
		jQuery.each(list, function(id, name) {	
			jQuery(".content ul").append('<li><a class="add" href="#" data-id-league="' + id + '">' + name + '</a><a class="remove right" href="#" data-id-league="' + id + '">x</a></li>');
		});
		
	});

	jQuery(document).on("click", ".content ul li a.add", function() {

		idValue = jQuery(this).data("id-league");
		requestById(idValue);
		event.preventDefault();
	
	});

	jQuery("#league-submit").click(function() {

		name = jQuery("#league-name").val();
		id = jQuery("#league-id").val();
		saveItem(id, name);

	});

	jQuery(document).on("click", ".content ul li a.remove", function() {

		idValue = jQuery(this).data("id-league");
		removeItem(idValue);
		jQuery(this).parent().remove();
		event.preventDefault();
	
	});
	
});
