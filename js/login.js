function login() {
	let email = document.getElementById('email').value;
	let password = document.getElementById('password').value;

	if (email != '' && password != '') {
		if ((email != 'test@pchmi.com') || (password != '12345')) {
			swal("There is no user with such an email and password", "", "warning");
		} else {
			window.open('home-page-registered.html', '_self');
		}
	} else {
		swal("Please fill the inputs", "", "warning");
	}
}