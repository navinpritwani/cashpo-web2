$(document).ready(function () {
    const BASE_URL = "https://api.cashpo.in/api"
    // const BASE_URL = "http://localhost:8000/api"

    const mail_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    $("#submit-mobile-form").click(function () {
        let mobile = $("#form_mobile").val();
        if (!mobile || isNaN(parseFloat(mobile)) || !(parseInt(mobile) > 5000000000 && parseInt(mobile) < 9999999999))
            return false

        if (mobile.length > 10) {
            if (!mobile || !mobile.match(mail_format))
                return false
        }

        let formdata = new FormData();
        formdata.append('name', mobile);
        url = BASE_URL + "/web-panel/get-app-link/"

        $.ajax({
            url: url,
            type: 'POST',
            data: formdata,
            processData: false,
            contentType: false,

            success: function (response) {
                console.log(response)
                $("#form_mobile").val("");
                $("#contact-form-success").show()
                setTimeout(function () {
                    $("#contact-form-success").hide()
                }, 3000);
            },
            error: function () {

            }
        });
    });


    $("#form_mobile").keyup(function () {
        let mobile = $("#form_mobile").val();
        if (!mobile || isNaN(parseFloat(mobile)) || !(parseInt(mobile) > 5000000000 && parseInt(mobile) < 9999999999))
            $("#form_mobile").addClass("error")
        else
            $("#form_mobile").removeClass("error")
        if (mobile.length > 10) {
            if (!mobile || !mobile.match(mail_format))
                $("#form_mobile").addClass("error")
            else
                $("#form_mobile").removeClass("error")
        }


    });


});


