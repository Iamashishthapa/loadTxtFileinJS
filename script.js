
	fetch('text.json')
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		console.log(data);
		showInHtml(data);
	})
	.catch(function (err) {
		console.log('error: ' + err);
	});
	
function showInHtml(data) {
	var mainContainer = document.getElementById("textDisplay");
	mainContainer.innerHTML = data.text;
}



