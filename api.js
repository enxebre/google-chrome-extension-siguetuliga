var saveItem = function(id, name) {
	json = {};
	json[id] = name;
	if (!id || !name) {
		alert('Empty fields are not allowed.');
		return;
	}
	// Save it using the Chrome extension storage API.
	chrome.storage.sync.set(json, function() {
		// Notify that we saved.
		alert('Settings saved');
	});
}

var removeItem = function(id) {

	// Remove it using the Chrome extension storage API.
	chrome.storage.sync.remove(String(id), function() {
		// Notify that we saved.
		alert('League removed');
	});
}

var requestById = function(idValue) {
	xhr = new XMLHttpRequest();

	xhr.open("GET", "http://www.siguetuliga.com/widget/resultados.php?id=" + idValue, true);
	xhr.onreadystatechange = function() {

		if (xhr.readyState == 4) {
			// innerText does not let the attacker inject HTML elements.
			jQuery.globalEval(xhr.responseText);
		}
	}

	xhr.send();
}