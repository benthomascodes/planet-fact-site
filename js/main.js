$(document).ready(function () {
    $('#nav-bar .nav-list .nav-link').click(function () {
        // Changes active link
        $('#nav-bar .nav-list .nav-link').removeClass("active");
        $(this).addClass("active");
    });
    $('#buttons a').click(function () {
        // Changes active button
        $('#buttons a').removeClass("active");
        $(this).addClass("active");
        // Changes hidden content
        var show = $(this).data('show');
        $(show).removeClass("hide").siblings().addClass("hide");
    });
});