var tablinks = document.getElementsByClassName("Tab-links");
var tabcontents = document.getElementsByClassName("Tab-contents");

function opentab(tabname) {

    for (tablink of tablinks) {
        tablink.classList.remove("Active-link");

    }

    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("Active-tab");
    }

    event.currentTarget.classList.add("Active-link");
    document.getElementById(tabname).classList.add("Active-tab")

}

let sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";

}
function closemenu() {
    sidemenu.style.right = "-200px";

}



const scriptURL = 'https://script.google.com/macros/s/AKfycbwmXpp0YjNHPRjkj_aqXxhO43ix5MVq8yCNHkvgaO5EV-fQEQnU8MMJRIIy6xJMwbXc/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message Sent Succesfully..!"
            setTimeout(function () {
                msg.innerHTML = "";
            }, 4000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})


