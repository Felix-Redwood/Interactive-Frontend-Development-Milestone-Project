$(document).ready(function() {
    $("#emailDesc").html(`<!--Desc is short for description-->
                        <div class="media">
                            <div class="media-body">
                                <p class="newsletter-title">Sign up to our newsletter!</p>
                                <p class="newsletter-para"></p>
                                <!--para is short for paragraph-->
                            </div>
                        </div>`);
    $("#emailSumbitContainer").html(`<div class="media">
                            <div class="media-body">
                                <form action="" method="post">
                                    <!-- this form will gather the emails -->
                                    <label for="user-email" class="">Email:</label> <br>
                                    <input type="text" name="user-email" id="uemail" value=" Example@email.com " class="email-input" />
                                    <small class="form-text">We'll never share your email with anyone else.</small>
                                    <p id="emailWrong"></p>
                                    <button type="button" class="btn btn-warning" onclick="collectEmail()">Submit:</button>
                                    <!--TO DO - MAKE EMAIL FORM AND SUBMIT BUTTON GO SIDE BY SIDE-->
                                </form>
                            </div>
                        </div>`);
    // this resets the emailDesc and emailSubmitContainer HTML every time the page is refreshed
    $("#emailWrong").css(`font-size: 0;`)
});

function collectEmail(event) {
    var uemail = $("#uemail").val;
    $("#emailHelp").html("").css(`padding: 0;
    margin: 0;
    font-size: 0;`);
    if (!uemail) {
        $("#emailWrong").html(`Please enter an Email-Address`).css(`font-size: 4em;`);
        return;
    }
    if (uemail == " Example@email.com ") {
        $("#emailWrong").html(`Please enter an Email-Address`).css(`font-size: 4em;`);
        return;
    }
}
