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
                                    <input type="text" name="uemail" id="uemail" value=" Example@email.com " class="email-input" />
                                    <small class="form-text">We'll never share your email with anyone else.</small>
                                    <button type="button" class="btn btn-warning" onclick="collectEmail()">Submit:</button>
                                </form>
                            </div>
                        </div>`);
    // this resets the emailDesc and emailSubmitContainer HTML every time the page is refreshed
});

var emailList = [];
function collectEmail(event) {
    var uemail = $("#uemail").val();
    console.log(uemail);
    emailList.push(uemail);
    console.log(emailList);
};
