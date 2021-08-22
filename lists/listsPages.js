const smsModal = document.querySelector(".smsModal");
const smsDiv = document.querySelector(".smsDiv");
const errorDiv = document.querySelector(".errorDiv");
const navItem1 = document.querySelector(".navItem1");
const navItem2 = document.querySelector(".navItem2");

const displaySMSDetails = () => {
  if (smsModal.style.display === "none") {
    smsModal.style.display = "block";
  } else {
    smsModal.style.display = "none";
  }
};

const closeModal = () => {
  if (smsModal.style.display === "block") {
    smsModal.style.display = "none";
  } else {
    smsModal.style.display = "block";
  }
};

const displaySMSList = () => {
  if (smsDiv.style.display === "none") {
    smsDiv.style.display = "block";
    navItem2.classList.remove("clicked");
    navItem1.classList.add("clicked");
    errorDiv.style.display = "none";
  } else {
    navItem1.classList.add("clicked");
  }
};

const displayErrorList = () => {
  if (errorDiv.style.display === "none") {
    errorDiv.style.display = "block";
    navItem1.classList.remove("clicked");
    navItem2.classList.add("clicked");
    smsDiv.style.display = "none";
  } else {
    errorDiv.style.display = "none";
  }
};

const smsTitle = document.getElementById("smsTitle");
const smsText = document.getElementById("smsText");
const smsDetailsContainer = document.getElementById("smsDetails");
const paginationNumbers = document.getElementById("paginationNumbers");
const dropdownIcon = document.getElementById("dropdownIcon");
const hideNavbar = document.getElementById("hideNavbar");

const sms = [
  {
    header: "MTN",
    text: "Need help quickly? Chat with us on myMTN App. Click Need help quickly?",
  },
  {
    header: "MTN",
    text: "Need help quickly? Chat with us on myMTN App. Click Need help quickly?",
  },
  {
    header: "MTN",
    text: "Need help quickly? Chat with us on myMTN App. Click Need help quickly?",
  },
  {
    header: "GLO",
    text: "Need help quickly? Chat with us on myGLO App. Click Need help quickly?",
  },
  {
    header: "GLO",
    text: "Need help quickly? Chat with us on myGLO App. Click Need help quickly?",
  },
  {
    header: "GLO",
    text: "Need help quickly? Chat with us on myGLO App. Click Need help quickly?",
  },
  {
    header: "Airtel",
    text: "Need help quickly? Chat with us on myAirtel App. Click Need help quickly?",
  },
  {
    header: "Airtel",
    text: "Need help quickly? Chat with us on myAirtel App. Click Need help quickly?",
  },
  {
    header: "Airtel",
    text: "Need help quickly? Chat with us on myAirtel App. Click Need help quickly?",
  },
  {
    header: "9mobile",
    text: "Need help quickly? Chat with us on my9mobile App. Click Need help quickly?",
  },
  {
    header: "9mobile",
    text: "Need help quickly? Chat with us on my9mobile App. Click Need help quickly?",
  },
  {
    header: "9mobile",
    text: "Need help quickly? Chat with us on my9mobile App. Click Need help quickly?",
  },
];

let currentPage = 3;
let rows = 3;

let pageNo = window.location.search.split("?pg=")[1];
if (!pageNo) {
  pageNo = 1;
}

const pageLimit = 3;

const sliceLength = pageNo * pageLimit - pageLimit;

const paginatedItems = sms.slice(sliceLength, sliceLength + pageLimit);

const totalAvailablePagination = Math.round(sms.length / pageLimit);

const urlOrigin = window.location.origin;
const urlPath = window.location.pathname;

const fetchAllSms = () => {
  navItem1.classList.add("clicked");
  paginatedItems.map((data) => {
    return (smsDetailsContainer.innerHTML += `
        <div class="text" onclick="displaySMSDetails()">
        <h5 id="smsTitle">${data.header}</h5>
        <p id="smsText">${data.text}
        </p>
        </div>
        `);
  });
};

for (let i = 1; i <= totalAvailablePagination; i++) {
  paginationNumbers.innerHTML += `
    <a href="${urlOrigin + urlPath + "?pg=" + i}" ${
    i == pageNo && 'class = "highlightedNumber"'
  }>${i}</a>`;
}

const showDropdown = () => {
    hideNavbar.classList.toggle("showNavbar");
};
