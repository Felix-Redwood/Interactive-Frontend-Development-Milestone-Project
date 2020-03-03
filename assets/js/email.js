// the email.js file collects emails that are submitted in the element with id of #uemail
// these emails are collected into an array, called 'emailList'

var emailList = [];
function collectEmail(event) {
    // the uemail variable is equal to the value inside the form
    var uemail = $("#uemail").val();
    console.log(uemail); // logs the email being submitted in the console
    // the uemail value is added to the emailList array
    emailList.push(uemail);
    console.log(emailList); // logs the whole array in the console
    return false;
};
