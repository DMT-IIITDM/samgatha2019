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
    //Gaming
    $('#game1').on('click', function () {
        $('#overlay11').toggleClass('active');
        $('#close11').toggleClass('active');
        $('.nav-item').toggleClass('active');
    });
    $('#game2').on('click', function () {
        $('#overlay12').toggleClass('active');
        $('#close12').toggleClass('active');
        $('.nav-item').toggleClass('active');
    });
    $('#game3').on('click', function () {
        $('#overlay13').toggleClass('active');
        $('#close13').toggleClass('active');
        $('.nav-item').toggleClass('active');
    });
    $('#close11').on('click', function () {
        $('#overlay11').toggleClass('active');
        $('#close11').toggleClass('active');
        $('.nav-item').toggleClass('active');
    });
    $('#close12').on('click', function () {
        $('#overlay12').toggleClass('active');
        $('#close12').toggleClass('active');
        $('.nav-item').toggleClass('active');
    });
    $('#close13').on('click', function () {
        $('#overlay13').toggleClass('active');
        $('#close13').toggleClass('active');
        $('.nav-item').toggleClass('active');
    });
}