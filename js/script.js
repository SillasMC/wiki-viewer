$(document).ready(function() {

    function searchWiki () {
        var input = $("#input-id").val();
        if (input !== "" && input !== null) {
            $("#result-div-id").empty();

            var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + input + "&limit=10&format=json&origin=*";
            console.log(url);

            $.getJSON(url, function(json_ini) {
                for (var i = 0; i < json_ini[1].length; i++) {
                    var html_div = '<div class="column-center result-div"><p class="text-title text-result">' + json_ini[1][i] + ' <a href="' + json_ini[3][i] + '" target="_blank"><i class="fa fa-external-link" aria-hidden="true"></i></a></p><p class="text-description text-result">' + json_ini[2][i] + '</p></div>';

                    $("#result-div-id").append(html_div).hide().fadeIn("slow");
                }
            });
        }
    }

    // Action of button
    $("#button-id").on("click", function() {
        searchWiki();
    });

    // Action of pressing 'enter'
    $('#input-id').keyup(function(e){
        if(e.keyCode == 13) {
            searchWiki();
        }
    });

});
