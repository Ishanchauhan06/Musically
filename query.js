//  $('#p1').html('hlo world')
// // $('#p1').css('color', 'red');
// // $('#p1').css('fontSize', '40px');
// $('p').css(
//     {
//         fontSize: "50px",
//         color: "blue"
//     }
// );
// $('div').css(
//     {
//         width: "99px",
//         height: "99px",
//         backgroundColor: "cyan"
//     }
// )
// $("#change).click(function() {
//     alert("Finally submit");
// });

// $('div').on('click',function () {
//     // alert('div clicked');
//     var element = $(this);
//     element.width(element.width() +10 +"px");
//     element.height(element.height() +10 +"px");
// });
$( ".change").on("click", function() {
    if( $( "body" ).hasClass( "dark" )) {
        $( "body" ).removeClass( "dark" );
        $( ".change" ).text( "OFF" );
    } else {
        $( "body" ).addClass( "dark" );
        $( ".change" ).text( "ON" );
    }
});