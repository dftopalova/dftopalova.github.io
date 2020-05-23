function check() {
	if (document.getElementById('password').value != document.getElementById('confirm-password').value) {
		alert("Passwords do not match! Please try again.");
	} else {
		window.open('login.html', "_self");
	}
}

