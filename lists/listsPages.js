const smsModal = document.querySelector(".smsModal");
const smsDiv = document.querySelector(".smsDiv");
const errorDiv = document.querySelector(".errorDiv");

const displaySMSDetails = () => {
    if (smsModal.style.display === "none") {
        smsModal.style.display = "block"
    } else {
        smsModal.style.display = "none"
    }
}

const closeModal = () => {
    if (smsModal.style.display === "block") {
        smsModal.style.display = "none"
    } else {
        smsModal.style.display = "block"
    }
}

const displaySMSList = () => {
    if (smsDiv.style.display === "none") {
        smsDiv.style.display = "block"
        errorDiv.style.display = "none"
    } else {
        smsDiv.style.display = "none"
    }
}

const displayErrorList = () => {
    if (errorDiv.style.display === "none") {
        errorDiv.style.display = "block"
        smsDiv.style.display = "none"
    } else {
        errorDiv.style.display = "none"
    }
}