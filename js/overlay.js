$(document).ready(menu);

function menu() {
    $('#photo1').on('click', function () {
        $('#overlay').toggleClass('active');
        $('#close').toggleClass('active');
        $('.nav-item').toggleClass('active');
    });
    $('#photo3').on('click', function () {
        $('#overlay1').toggleClass('active');
        $('#close1').toggleClass('active');
        $('.nav-item').toggleClass('active');
    });
    $('#photo4').on('click', function () {
        $('#overlay2').toggleClass('active');
        $('#close2').toggleClass('active');
        $('.nav-item').toggleClass('active');
    });
    $('#close').on('click', function () {
        $('#overlay').toggleClass('active');
        $('#close').toggleClass('active');
        $('.nav-item').toggleClass('active');
    });
    $('#close1').on('click', function () {
        $('#overlay1').toggleClass('active');
        $('#close1').toggleClass('active');
        $('.nav-item').toggleClass('active');
    });
    $('#close2').on('click', function () {
        $('#overlay2').toggleClass('active');
        $('#close2').toggleClass('active');
        $('.nav-item').toggleClass('active');
    });
}