var emailList = [];
function collectEmail(event) {
    var uemail = $("#uemail").val();
    console.log(uemail);
    emailList.push(uemail);
    console.log(emailList);
};
