const smsModal = document.querySelector(".smsModal");
const smsDiv = document.querySelector(".smsDiv");
const errorDiv = document.querySelector(".errorDiv");
const navItem1 = document.querySelector(".navItem1")
const navItem2 = document.querySelector(".navItem2")

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
        navItem2.classList.remove("clicked")
        navItem1.classList.add("clicked")
        errorDiv.style.display = "none"
    } else {
        navItem1.classList.add("clicked")
    }
}

const displayErrorList = () => {
    if (errorDiv.style.display === "none") {
        errorDiv.style.display = "block"
        navItem1.classList.remove("clicked")
        navItem2.classList.add("clicked")
        smsDiv.style.display = "none"
    } else {
        errorDiv.style.display = "none"
    }
}