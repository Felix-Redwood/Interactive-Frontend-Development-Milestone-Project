function sendEmail(contactForm) {
    email,
    js.send(
        "gmail", "contact_template", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "email_text": contactForm.content.value
        })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        });
    return false;
}
