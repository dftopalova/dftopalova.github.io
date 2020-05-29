document.getElementById("txt").style.visibility = 'hidden';
document.getElementById("txt2").style.visibility = 'hidden';

function Favourute() {
    var x = document.getElementById("fav");
    if (x.innerHTML === "Add to favourites") {
        swal("", "The pet is in FAVOURITES!", "success");
        x.innerHTML = "Remove from favourites";
        document.getElementById("txt").style.visibility = 'visible';
    } else {
        swal("", "The pet is removed from FAVOURITES!", "success");
        x.innerHTML = "Add to favourites";
        document.getElementById("txt").style.visibility = 'hidden';
    }
}

function Adoption() {
    var x = document.getElementById("adopt");
    if (x.innerHTML === "Request adoption") {
        swal("", "Adoption request has been sent!", "success");
        document.getElementById("adopt").disabled = true;
        document.getElementById("txt2").style.visibility = 'visible';
    }
}

function sendSucc() {
    swal("", "The message was sent to the owner!", "success");
}