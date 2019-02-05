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
    // DANCE
    $('#dance1').on('click', function () {
        $('#overlay3').toggleClass('active');
        $('#close3').toggleClass('active');
        $('.nav-item').toggleClass('active');
    });
    $('#dance3').on('click', function () {
        $('#overlay4').toggleClass('active');
        $('#close4').toggleClass('active');
        $('.nav-item').toggleClass('active');
    });
    $('#dance4').on('click', function () {
        $('#overlay5').toggleClass('active');
        $('#close5').toggleClass('active');
        $('.nav-item').toggleClass('active');
    });
    $('#close3').on('click', function () {
        $('#overlay3').toggleClass('active');
        $('#close3').toggleClass('active');
        $('.nav-item').toggleClass('active');
    });
    $('#close4').on('click', function () {
        $('#overlay4').toggleClass('active');
        $('#close4').toggleClass('active');
        $('.nav-item').toggleClass('active');
    });
    $('#close5').on('click', function () {
        $('#overlay5').toggleClass('active');
        $('#close5').toggleClass('active');
        $('.nav-item').toggleClass('active');
    });
    // ART
    $('#art1').on('click', function () {
        $('#overlay6').toggleClass('active');
        $('#close6').toggleClass('active');
        $('.nav-item').toggleClass('active');
    });
    $('#art3').on('click', function () {
        $('#overlay7').toggleClass('active');
        $('#close7').toggleClass('active');
        $('.nav-item').toggleClass('active');
    });
    $('#art4').on('click', function () {
        $('#overlay8').toggleClass('active');
        $('#close8').toggleClass('active');
        $('.nav-item').toggleClass('active');
    });
    $('#close6').on('click', function () {
        $('#overlay6').toggleClass('active');
        $('#close6').toggleClass('active');
        $('.nav-item').toggleClass('active');
    });
    $('#close7').on('click', function () {
        $('#overlay7').toggleClass('active');
        $('#close7').toggleClass('active');
        $('.nav-item').toggleClass('active');
    });
    $('#close8').on('click', function () {
        $('#overlay8').toggleClass('active');
        $('#close8').toggleClass('active');
        $('.nav-item').toggleClass('active');
    });
    // MUSIC
    $('#music1').on('click', function () {
        $('#overlay9').toggleClass('active');
        $('#close9').toggleClass('active');
        $('.nav-item').toggleClass('active');
    });
    $('#music3').on('click', function () {
        $('#overlay10').toggleClass('active');
        $('#close10').toggleClass('active');
        $('.nav-item').toggleClass('active');
    });
    $('#close9').on('click', function () {
        $('#overlay9').toggleClass('active');
        $('#close9').toggleClass('active');
        $('.nav-item').toggleClass('active');
    });
    $('#close10').on('click', function () {
        $('#overlay10').toggleClass('active');
        $('#close10').toggleClass('active');
        $('.nav-item').toggleClass('active');
    });
}