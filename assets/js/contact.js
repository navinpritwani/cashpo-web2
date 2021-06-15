$(document).ready(function () {
    const BASE_URL = "https://api.cashpo.in/api"
    // const BASE_URL = "http://localhost:8000/api"

    const mail_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    //

    // change bar verification status
    $("#submit-contact-form").click(function () {
        if (validate_form() == false)
            return false
        let name = $("#contact_form_name").val();
        let email = $("#contact_form_email").val();
        let mobile = $("#contact_form_mobile").val();
        let msg = $("#contact_form_msg").val();

        let formdata = new FormData();
        formdata.append('name', name);
        formdata.append('email', email);
        formdata.append('mobile', mobile);
        formdata.append('msg', msg);
        url = BASE_URL + "/web-panel/contact_us/"

        $.ajax({
            url: url,
            type: 'POST',
            data: formdata,
            processData: false,
            contentType: false,

            success: function (response) {
                console.log(response)
                $("#contact_form_name").val("");
                $("#contact_form_email").val("");
                $("#contact_form_mobile").val("");
                $("#contact_form_msg").val("");
                $("#contact-form-success").show()

                setTimeout(function () {
                    $("#contact-form-success").hide()
                }, 3000);
            },
            error: function () {

            }
        });
    });

    function validate_form() {
        console.log("validate_form")
        let name = $("#contact_form_name").val();
        let email = $("#contact_form_email").val();
        let mobile = $("#contact_form_mobile").val();
        let msg = $("#contact_form_msg").val();
        let is_valid = true
        if (!name) {
            $("#contact_form_name").addClass("error")
            is_valid = false
        }
        if (!email || !email.match(mail_format)) {
            $("#contact_form_email").addClass("error")
            is_valid = false
        }
        if (!mobile || isNaN(parseFloat(mobile)) || !(parseInt(mobile) > 5000000000 && parseInt(mobile) < 9999999999)) {
            $("#contact_form_mobile").addClass("error")
            is_valid = false
        }
        if (!msg) {
            $("#contact_form_msg").addClass("error")
            is_valid = false
        }
        return is_valid
    }

    $("#contact_form_name").keyup(function () {
        let name = $("#contact_form_name").val();
        if (!name)
            $("#contact_form_name").addClass("error")
        else
            $("#contact_form_name").removeClass("error")
    });

    $("#contact_form_email").keyup(function () {
        let email = $("#contact_form_email").val();
        if (!email.match(mail_format) || !email)
            $("#contact_form_email").addClass("error")
        else
            $("#contact_form_email").removeClass("error")
    });

    $("#contact_form_mobile").keyup(function () {
        let mobile = $("#contact_form_mobile").val();
        if (!mobile || isNaN(parseFloat(mobile)) || !(parseInt(mobile) > 5000000000 && parseInt(mobile) < 9999999999))
            $("#contact_form_mobile").addClass("error")
        else
            $("#contact_form_mobile").removeClass("error")
    });

    $("#contact_form_msg").keyup(function () {
        let msg = $("#contact_form_msg").val();
        if (!msg)
            $("#contact_form_msg").addClass("error")
        else
            $("#contact_form_msg").removeClass("error")
    });

    $("#contact-form").submit(function (e) {
        e.preventDefault();
    });


});


