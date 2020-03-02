// the email.js file collects emails that are submitted in the element with id of #uemail
// these emails are collected into an array, called 'emailList'

var emailList = [];
function collectEmail(event) {
    // the uemail variable is equal to the value inside the form
    var uemail = $("#uemail").val();
    console.log(uemail); // demonstrates the email being submitted
    emailList.push(uemail);
    console.log(emailList); // demonstrates the whole array
    return false;
};
