$('li').click(function() {
    alert('clicked');
});

$('#btn').click(function() {
console.log($('#h1').text());
$('#h1').text('Testing Test');
$('#h1').append('Extra Test');

})

$('#btn2').on('click',function() {
console.log('Second button is clicked');
})

$('#myDiv').click(function() {
    $(this).addClass('clicked');
}).find('span').attr('title','Hover me');

$('#btn3').click(function() {
    $('.hidden').show();
})

$('#btn4').click(function() {
    $('.hidden').hide();
})

$('#square').click(function() {
    $('#square').animate({
        'width':'200px',
        'height':'200px'
});
});

$('.testing').click(function() {
    $('.testing').animate({
        'left':"=50px",
        'opacity':0.25,
        'fontSize':'30px'
    },300,function(){
        console.log("Animation is complete");
    });
});    


