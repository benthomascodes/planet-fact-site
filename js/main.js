$(document).ready(function () {
    $('#buttons a').click(function () {
        // Changes active button
        $('#buttons a').removeClass("active");
        $(this).addClass("active");
        // Changes hidden content
        var show = $(this).data('show');
        $(show).removeClass("hide").siblings().addClass("hide");
    });
});