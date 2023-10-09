document.getElementById('emailForm').addEventListener('submit', function (event) { // This is executed when the user press "Send Email"
    event.preventDefault(); //Preven the default behavior of submit button, for example, validate the data of the form.

    const form = event.target; // This is the element that is getting the submit action (the form)

    //get values!
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const subject = form.elements.subject.value;
    const message = form.elements.message.value;

    //now, let's set your EmailJS account.
    //Add the public Key


    emailjs.init("6BGEOKbeojBE3Rxkh"); // This is in account

    //This is the object with the information you want to send. These are the names/keys that we set up in the template service

    const params = {
        from_email: email,
        from_name: name,
        subject: subject,
        message: message
    };

if (!subject) {
    const result = confirm ("Subject is empty. Are you sure you want to send the email?"); //This returns true if the user press ok.
    if (result === true) {
        sendEmail();
    } else {
        // Do not send the email!
        //Note: You do not need the else, you can omit it.

    }
} else {
    sendEmail();
}

//Function to the email
function sendEmail() {
    //Here you are using the emailJS library to send the request (the email)
    // The first param is your service ID (You can find it in Email Services)
    // The second param is your template ID (You can fid it in the Email Templates)
    emailjs.send("service_e5jnpdw", "template_2vcwscm", params). then(function (response){
        alert("Email was successfully sent!");
        form.reset();
    }, function (error) {
        alert("Error sending email");
    });
}

});