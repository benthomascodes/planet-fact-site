$(document).ready(function () {
    $('#nav-toggle').click(function () {
        $(this).toggleClass('open');
        $('#nav-bar .nav-list').toggleClass('open');
        $('body').toggleClass('open');
    });
    $('#nav-bar .nav-list .nav-link').click(function () {
        // Changes active link
        $('#nav-bar .nav-list .nav-link').removeClass("active");
        $(this).addClass("active");
    });
    $('#buttons button').click(function () {
        // Changes active button
        $('#buttons button').removeClass("active");
        $(this).addClass("active");
        // Changes hidden content
        var show = $(this).data('show');
        $(show).removeClass("hide").siblings().addClass("hide");
    });
    $('#m-tabs .tabs .tab button').click(function () {
        // Changes active button
        $('#m-tabs .tabs .tab button').removeClass("active");
        $(this).addClass("active");
        // Changes hidden content
        var show = $(this).data('show');
        $(show).removeClass("hide").siblings().addClass("hide");
    });
});