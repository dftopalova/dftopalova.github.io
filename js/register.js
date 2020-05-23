function check() {
	if (document.getElementById('password').value != document.getElementById('confirmPassword').value) {
		alert("Passwords do not match! Please try again.");
	}
	
	else window.open('login.html');
}

