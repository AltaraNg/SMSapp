console.log("SMS App Starting....");
var axios = require('axios');
var Data = [];

function getCustomers() {
    axios.get("http://localhost/altaracredit/collection/api/api.php?action=text")
        .then(function(response) {
            /*   console.log(response); */
            if (response.data.error) {
                console.log("no result");
            } else {

                this.Data = response.data.users;

                SendText(this.Data);
            }
        });
}



function getReminderSMS() {
    axios.get("http://localhost/altaracredit/collection/api/api.php?action=reminder")
        .then(function(response) {
            /*   console.log(response); */
            if (response.data.error) {
                console.log("no result");
            } else {

                this.Data = response.data.users;

                SendText(this.Data);
            }
        });
}

function get1DayOverdue() {
    axios.get("http://localhost/altaracredit/collection/api/api.php?action=overdue1")
        .then(function(response) {
            /*   console.log(response); */
            if (response.data.error) {
                console.log("no result");
            } else {

                this.Data = response.data.users;

                SendText(this.Data);
            }
        });
}

function get16DaysOverdue() {
    axios.get("http://localhost/altaracredit/collection/api/api.php?action=overdue2")
        .then(function(response) {
            /*   console.log(response); */
            if (response.data.error) {
                console.log("no result");
            } else {

                this.Data = response.data.users;

                SendText(this.Data);
            }
        });
}

function get31DaysOverdue() {
    axios.get("http://localhost/altaracredit/collection/api/api.php?action=overdue3")
        .then(function(response) {
            /*   console.log(response); */
            if (response.data.error) {
                console.log("no result");
            } else {

                this.Data = response.data.users;

                SendText(this.Data);
            }
        });
}





function SendText() {
    // if (data != []) {
    //     data.forEach(function(datA) {
    //         var Updata = {
    //             Transaction_id: datA.Transaction_id,
    //             Remark: 'Messent Sent'
    //         }
    //         let phone = datA.Phone;
    //         console.log(phone);
    let message = "Dear " + "Taiwo" + ",This is to notify you that your repayment is overdue. Kindly make your payment to enjoy more of our services. Altara Credit Limited.";
    axios.get("http://api.smartsmssolutions.com/smsapi.php?username=bjmarcson&password=fabregas10&sender=Altara&recipient=" + 08064690409 + "&message=" + message + "")
        .then(function(response2) {

            console.log(response2);
            if (response2.status == 200) {
                // updateRemark(Updata)
            } else {
                app.errorMessage = "Error Sending Message, Contact Support";
            }
        });

    //     })
    // }
}

function updateRemark(upRemark) {
    axios.post("http://localhost/altaracredit/collection/api/api.php?action=send", upRemark)
        .then(function(response) {
            console.log(response.data);
            if (response.data.error) {
                console.log(response.data.message);
                /*     app.clearMessage(); */
            } else {
                console.log(response.data.message);
            }
        });
}

// getReminderSMS();
// get1DayOverdue();
// get16DaysOverdue();
// get31DaysOverdue();
SendText();