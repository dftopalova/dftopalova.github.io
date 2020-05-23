function login() {
    if ((document.getElementById('email').value != "test@pchmi.com") || 
        (document.getElementById('password').value != "12345")) {
		alert("Cancelled", "There is no user with such an email and password", error);
	} else {
		window.open('home-page-registered.html');
	}
}