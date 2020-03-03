// this .js file sends the contents of the contact form off to the contactYouGym@gmail.com email address.

function sendEmail(contactForm) {
    emailjs.send(
            "gmail", "contact_template", {
                "from_name": contactForm.name.value,
                "from_email": contactForm.emailaddress.value,
                "email_text": contactForm.content.value
            })
        .then(
            function(response) {
                // this will confirm that the user's email has been succesfully submitted
                alert('Thank you! \nYour email was submitted succesfully.');
            },
            function(error) {
                // this will inform the user if there has been an error in sending their email
                alert('We are sorry \nYour email has failed to send \nTry again in a few minutes');
            });
    return false;
}
