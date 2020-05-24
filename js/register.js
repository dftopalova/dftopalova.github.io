function check() {
	let password = document.getElementById('password').value;
	let confirm = document.getElementById('confirm-password').value;
	let name = document.getElementById('name').value;
	let email = document.getElementById('email').value;
	if (password.length != 0 && confirm.length != 0 && name.length != 0 && email.length != 0) {
		if (password != confirm) {
			swal("Passwords do not match! ", "Please try again.", "warning");
		} else {
			window.open("login.html", "_self");
		}
	} else {
		swal("The required fields cannot be blank", "Please fill them to continue :)", "warning");
	}
}
