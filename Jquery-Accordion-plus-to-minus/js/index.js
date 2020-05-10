$(document).ready(function () {

    $('.collapse > h2 > span').click(function (e) {

        e.preventDefault();
        $(this).parent().next().slideToggle();
        $(this).text($(this).text() == '+' ? '-' : '+')

    });



});