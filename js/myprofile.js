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

function deletePet(id, parentDivId) {
    swal("The pet has been deleted from the collection", "", "info");

    let petToDelete = document.getElementById(id);
    let myPetsRow = document.getElementById(parentDivId);

    myPetsRow.removeChild(petToDelete);
}

function requestAdoption(reqBtnId) {
    
    swal("If you want, you can write a message to the owner:", {
        content: "input",
      })
      .then(() => {
        swal("Yay!", "The request has been sent to the owner!", "success");
      });

      let reqBtn = document.getElementById(reqBtnId);
      reqBtn.disabled = true;
}