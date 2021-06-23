$(document).ready(function () {
    const BASE_URL = "https://api.cashpo.in/api"
    // const BASE_URL = "http://localhost:8000/api"

    let $FAQ_DIV = $("#faq_div");


    // change bar verification status
    url = BASE_URL + "/master/faq/"

    $.ajax({
        url: url,
        type: 'GET',
        data: null,
        processData: false,
        contentType: false,

        success: function (response) {
            console.log(response)
            faq_title_list = response.faq_title_list
            for (var i = 0; i < faq_title_list.length; i++) {
                // html_str = "<div> <button class='btn btn-link' type='button' data-toggle='collapse' data-target='#collapseOne' aria-expanded='true' aria-controls='collapseOne'> <h1 class='theme-h1'>" +  + " <img src='assets/imgs/dropdown.svg' style='width: 25px' id='" + faq_title_list[i].title.replaceAll(" ", "_").toLowerCase() + '_btn' + "' data_id='" + faq_title_list[i].id + "'/></h1></button>  <div aria-labelledby='headingOne' data-parent=''#accordionExample' class='" + faq_title_list[i].title.replaceAll(" ", "_").toLowerCase() + "'></div></div>"
                col_div_id = faq_title_list[i].title.replaceAll(" ", "_").toLowerCase().replaceAll(",", "") + "_div"
                collaps_div = faq_title_list[i].title.replaceAll(" ", "_").toLowerCase().replaceAll(",", "") + "_collapsable"
                btn_id = faq_title_list[i].title.replaceAll(" ", "_").toLowerCase().replaceAll(",", "") + "-" + faq_title_list[i].id

                html_str = ` <div class="card-header" id="${col_div_id + '_heading'}">
                        <h2 class="mb-0">
                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" id="${btn_id}"
                                    data-target="${'#' + col_div_id}" aria-expanded="false" aria-controls="${col_div_id}">
                              <h1 class="class="theme-h1">  ${faq_title_list[i].title}
                                <img src="assets/imgs/dropdown.svg" style="width:25px"/>
                                </h1>
                            </button>
                        </h2>
                    </div>
                    <div id="${col_div_id}" class="collapse" aria-labelledby="${col_div_id + '_heading'}" data-parent="#accordionExample">
                        <div class="card-body" id="${collaps_div}">
                        </div>
                    </div>`

                $FAQ_DIV.append(html_str)
            }
        },
        error: function () {

        }
    });


    $(document).on("click", "#basics-1", function () {
        expand_the_faq(1, $('#basics_collapsable'))
    });
    $(document).on("click", "#documents_required_and_their_acceptable_formats-2", function () {
        expand_the_faq(2, $('#documents_required_and_their_acceptable_formats_collapsable'))
    });
    $(document).on("click", "#application_process_cost_and_timelines-3", function () {
        expand_the_faq(3, $('#application_process_cost_and_timelines_collapsable'))
    });
    $(document).on("click", "#repayment_process-4", function () {
        expand_the_faq(4, $('#repayment_process_collapsable'))
    });
    $(document).on("click", "#monthly_installment-5", function () {
        expand_the_faq(5, $('#monthly_installment_collapsable'))
    });
    $(document).on("click", "#cancellation_and_refund_policy-6", function () {
        expand_the_faq(6, $('#cancellation_and_refund_policy_collapsable'))
    });
    $(document).on("click", "#generic_queries-7", function () {
        expand_the_faq(7, $('#generic_queries_collapsable'))
    });
    $(document).on("click", "#referral-8", function () {
        expand_the_faq(8, $('#referral_collapsable'))
    });

    function expand_the_faq(id, elm) {

        url = BASE_URL + "/master/faq/?id=" + id
        $.ajax({
            url: url,
            type: 'GET',
            data: null,
            processData: false,
            contentType: false,

            success: function (response) {
                console.log(response)
                let faq_list = response.faq_list
                for (var i = 0; i < faq_list.length; i++) {
                    html_str = `<div class="card-body mb-2" style="background-color: #F6F9FF">
                                    <p style="font-weight: bold">${faq_list[i].question}</p>
                                    <p class="p-white-space">${faq_list[i].answer}</p>
                                </div>`
                    elm.append(html_str)
                }
            },
            error: function () {

            }
        });
    }


});


