//document ready function is to prevent any jQuery code from running before the document is finished loading (is ready).
$(document).ready(function () {

    //schrijf hier pas je eigen code
    $('li').click(function () {
        $(this).css('text-decoration', 'line-through');
    });
    $('li').dblclick(function () {
        $(this).hide();
    });
    //einde van je code
});



