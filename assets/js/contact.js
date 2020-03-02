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
                var div = document.createElement('div');
                div.classList.add('alert', 'alert-success');
                div.role.add('alert');
                div.textContent= "Your Email has been submitted succesfully";
            
                var confirmSubmit = document.getElementById('confirmSubmit');
                confirmSubmit.prependChild(div);
            },
            function(error) {
                console.log("FAILED", error);
            });
    return false;
}
