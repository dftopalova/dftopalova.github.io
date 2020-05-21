function approve(requestDiv) {
    swal("Done", "You have approved the request!", "success");

    let request = document.getElementById(requestDiv);
    request.remove();
}