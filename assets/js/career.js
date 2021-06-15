$(document).ready(function () {
    // const BASE_URL = "https://api.cashpo.in/api"
    const BASE_URL = "http://localhost:8000/api"

    const mail_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const $Name = $("#career_form_name");
    const $Email = $("#career_form_email");
    const $Position = $("#career_form_position");
    const $Salary = $("#career_form_salary");
    const $Resume = $("#career_form_resume");

    $("#submit_career_form").click(function () {
        console.log($Resume[0].files[0])
        if (validate_form() == false)
            return false
        let formdata = new FormData();
        formdata.append('name', $Name.val());
        formdata.append('email', $Email.val());
        formdata.append('salary', $Salary.val());
        formdata.append('position', $Salary.val());
        formdata.append('resume', $Resume[0].files[0]);
        url = BASE_URL + "/web-panel/career/"

        $.ajax({
            url: url,
            type: 'POST',
            data: formdata,
            processData: false,
            contentType: false,

            success: function (response) {

                $Name.val(null)
                $Email.val(null)
                $Position.val(0)
                $Salary.val(null)
                $Resume.val(null)
                $("#form-success").show()
                setTimeout(function () {
                    $("#form-success").hide()
                }, 3000);
            },
            error: function () {

            }
        });
    });

    function validate_form() {
        console.log("validate_form")
        console.log($Position.val())
        let is_valid = true
        let email = $Email.val()
        if (!$Name.val()) {
            $Name.addClass("error")
            is_valid = false
        }
        if (!$Email.val() || !$Email.val().match(mail_format)) {
            $Email.addClass("error")
            is_valid = false
        }
        if (!$Salary.val()) {
            $Salary.addClass("error")
            is_valid = false
        }
        if ($Position.val() == 0 || $Position.val() == "0") {
            $Position.addClass("error")
            is_valid = false
        }
        if (!$Resume[0].files[0]) {
            $Resume.addClass("error")
            is_valid = false
        }

        return is_valid
    }

    $Name.keyup(function () {
        if (!$Name.val())
            $Name.addClass("error")
        else
            $Name.removeClass("error")
    });

    $Email.keyup(function () {
        if (!$Email.val() || !$Email.val().match(mail_format))
            $Email.addClass("error")
        else
            $Email.removeClass("error")
    });

    $Salary.keyup(function () {
        if (!$Salary.val())
            $Salary.addClass("error")
        else
            $Salary.removeClass("error")
    });

    $Position.change(function () {
        if ($Position.val() == "0" || $Position.val() == 0)
            $Position.addClass("error")
        else
            $Position.removeClass("error")
    });

    $("#career-form").submit(function (e) {
        e.preventDefault();
    });


});


