// this script highlights the current day's hours in the footer
$(document).ready(function () {
    var currentDay = (new Date().getDay() > 0 ? new Date().getDay() - 1 : 6)
    $('.office-hours li').eq(currentDay).addClass('today');
});