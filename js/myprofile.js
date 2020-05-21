function approve(requestDiv) {
    swal("Done", "You have approved the request!", "success");

    let request = document.getElementById(requestDiv);
    request.remove();
}
function reject(requestDiv) {
    swal("Cancelled", "You have rejected the request!", "error");

    let request = document.getElementById(requestDiv);
    request.remove();
}