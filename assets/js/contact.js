//alert user when form isnt complete
//link email to submit form so b&k will recieve contact submissions off Latte Daa
//allow user to click on items for an ingredient and photo preview
// allow user to customize drinks or menu items
// allow user to add items to cart
// allow users to delete items from cart
// have cart total at bottom of page
// allow users to edit items
//allow user to click left or right on pictures



var submitBtn = document.getElementById("buttonContact")
var emailInput = document.getElementById("inputEmail");
var nameInput = document.getElementById("inputName");
var reasonContact = document.getElementById("contactReason");
var inputtxt = document.getElementsByClassName("inputTxt");
//contact_name.reason.contact_email.

function validate_form() {
    valid = true;
    if (document.contact_form.contact_name.value == "") {
        alert("Please fill in your Name.");
        valid = false;
    } else if (document.contact_form.contact_email.value == "") {
        alert("Please fill enter your Email address.");
        valid = false;
    } else if (document.contact_form.contact_reason.value = "") { //<----figure out why it wont alert
        alert("Please tell us why you are contacting us today.");
        valid = false;
    } else {
        alert("Thank you for contacting Latte' Daa. We will reach out shortly.")
    };
};






