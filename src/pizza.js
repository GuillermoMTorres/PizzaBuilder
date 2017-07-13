$('.sauce').removeClass('sauce-white');
$('.crust').removeClass('crust-gluten-free');
$('.btn-sauce').removeClass('active');
$('.btn-crust').removeClass('active');



$('.btn-pepperonni').on('click', function () {
    $('.pep').fadeToggle();
      if  ($('.btn-pepperonni').hasClass('active')) {
      $('.btn-pepperonni').removeClass('active');
      } else {
      	$('.btn-pepperonni').addClass('active');
      }
});
 
$('.btn-mushrooms').on('click', function () {
    $('.mushroom').fadeToggle();
      if  ($('.btn-mushrooms').hasClass('active')) {
      $('.btn-mushrooms').removeClass('active');
      } else {
      	$('.btn-mushrooms').addClass('active');
      }
    });

$('.btn-green-peppers').on('click', function () {
    $('.green-pepper').fadeToggle();
       if  ($('.btn-green-peppers').hasClass('active')) {
      $('.btn-green-peppers').removeClass('active');
      } else {
      	$('.btn-green-peppers').addClass('active');
      }
});


/*
$('.btn-sauce').on('click', function () {
       $('.sauce-white').fadeToggle();
      });

$('.btn-crust').on('click', function () {
       $('.cheese').fadeToggle();
      }); 
*/