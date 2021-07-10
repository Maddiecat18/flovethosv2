$(document).ready(function () {
    $(".petInfodiv").hide();
    $("#petInfoLinks a").click(function () {
        var container = $(this).data("container");
        $(".petInfodiv").hide();
        $("#" + container).show();
        $("#frmain").hide();

    });

});
