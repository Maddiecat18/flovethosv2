//This is the JQuery/ Ajax call to retrieve staff information for the staff page


(function ($) {
    FloVet = window.FloVet || { 'version': '0.1' };
    FloVet.staff = FloVet.staff || { 'version': '0.1' };

    FloVet.staff.staffSetup = function () {
        $.ajax({
            type: "GET",
            url: "../api/staffmembers/GetAll",
            contentType: "application/json; charset=utf-8",
            success: function (response) {
                var staffItems = response;
                var sStaff = "";

                for (var j = 0; j < staffItems.length; j++) {
                    sStaff += "<div class='staffBio'>" +
                        "<h3 class='nameTitle'>" +
                        staffItems[j].Name +
                        "</h3>" +
                        "<p>" +
                        staffItems[j].Description +
                        "</p>" +
                        "</div>";
                };

                $('#staffPlaceHolder').html(sStaff);

            },
            error: function (xhr, status, error) {
            }
        });
    };
}(jQuery));