$(document).ready(function () {
    const BASE_URL = "https://api.cashpo.in/api"
    // const BASE_URL = "http://localhost:8000/api"

    let $TEAM_DIV = $("#team-image-list");


    // change bar verification status
    url = BASE_URL + "/web-panel/get-our-team/"

    $.ajax({
        url: url,
        type: 'GET',
        data: null,
        processData: false,
        contentType: false,

        success: function (response) {
            console.log(response)
            let user_list = response.user_list
            for (var i = 0; i < user_list.length; i++) {
                html_str = ` <div class="text-center col-12 col-xl-3 col-md-4">
                <img src="${user_list[i].image_url}" class="team-img" style="height:260px"/>
                <div class="team-name">${user_list[i].name}
                    <p> ${user_list[i].description} </p>
                </div>
            </div>`

                $TEAM_DIV.append(html_str)
            }
        },
        error: function () {

        }
    });


});


