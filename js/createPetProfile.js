function createPet() {
    swal("Yay!", "The new pet profile has been created!", "success");

    let petName = document.getElementById('petName').value;
    let breed = document.getElementById('breed').value;
    let age = document.getElementById('age').value;

    if (petName != '' && breed != '' && age != '') {
        swal("Yay!", "The new pet profile has been created!", "success");
    } else {
        swal("Please fill the required inputs", "", "warning");
    }

}