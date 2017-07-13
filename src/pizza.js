
//Inicializamos la Pizza con las condicion del ejercicio
$('.sauce').removeClass('sauce-white');
$('.crust').removeClass('crust-gluten-free');
$('.btn-sauce').removeClass('active');
$('.btn-crust').removeClass('active');
$('.panel li:nth(8)').fadeToggle(); // Oculta el precio de la salsa blanca (8)
$('.panel li:nth(9)').fadeToggle(); // Oculta el precio del gluten (9)
$('strong').text('$13'); //Inicializa el precio de la pizza


//Parametros: Ninguno
//Resumen: Añade o Quita el ingrediente "Pepperoni" , ajusta el precio, y modifica la clase de los botones.
//Devuelve: No devuelve nada
$('.btn-pepperonni').on('click', function () {
  var precio = "";
  $('.pep').fadeToggle();
  $('.panel li:nth(5)').fadeToggle();
    if($('.btn-pepperonni').hasClass('active')) {
      $('.btn-pepperonni').removeClass('active');
        calculaPrecio(1, false);  
      } else {
      	$('.btn-pepperonni').addClass('active');
        calculaPrecio(1, true);   
      }
});
 
//Parametros: Ninguno
//Resumen: Añade o Quita el ingrediente "Setas" , ajusta el precio, y modifica la clase de los botones.
//Devuelve: No devuelve nada
$('.btn-mushrooms').on('click', function () {
  var precio = "";
  $('.mushroom').fadeToggle();
  $('.panel li:nth(6)').fadeToggle();
    if($('.btn-mushrooms').hasClass('active')) {
      $('.btn-mushrooms').removeClass('active');
      calculaPrecio(1, false);  
    } else {
      $('.btn-mushrooms').addClass('active');
      calculaPrecio(1, true);   
    }
});

//Parametros: Ninguno
//Resumen: Añade o Quita el ingrediente "Pimiento Verde" , ajusta el precio, y modifica la clase de los botones.
//Devuelve: No devuelve nada
$('.btn-green-peppers').on('click', function () {
  var precio = "";
  $('.green-pepper').fadeToggle();
  $('.panel li:nth(7)').fadeToggle();
    if($('.btn-green-peppers').hasClass('active')) {
      $('.btn-green-peppers').removeClass('active');
      calculaPrecio(1, false);   
    } else {
      $('.btn-green-peppers').addClass('active');
      calculaPrecio(1, true);   
    }
});


//Parametros: Ninguno
//Resumen: Añade o Quita el ingrediente "Salsa Blanca" , ajusta el precio, y modifica la clase de los botones.
//Devuelve: No devuelve nada - Borra/Añade la clase "white-sauce" al ".sauce"
$('.btn-sauce').on('click', function () {
   var precio = "";
   $('.panel li:nth(8)').fadeToggle();
      if($('.btn-sauce').hasClass('active')) {
        $('.btn-sauce').removeClass('active');
        $('.sauce').removeClass('sauce-white');
          calculaPrecio(3, false);     
      } else {
        $('.btn-sauce').addClass('active');
        $('.sauce').addClass('sauce-white');
          calculaPrecio(3, true);   
      }
});

//Parametros: Ninguno
//Resumen: Añade o Quita el ingrediente "Gluten" , ajusta el precio, y modifica la clase de los botones.
//Devuelve: No devuelve nada - Borra/Añade la clase "gluten-free" al ".crust"
$('.btn-crust').on('click', function () {
   var precio = "";
   $('.panel li:nth(9)').fadeToggle();
      if($('.btn-crust').hasClass('active')) {
        $('.btn-crust').removeClass('active');
        $('.crust').removeClass('crust-gluten-free');
        calculaPrecio(5, false);
      } else {
        $('.btn-crust').addClass('active');
        $('.crust').addClass('crust-gluten-free');
        calculaPrecio(5, true);
      }
}); 


//Parametro 1: Numero, Parametro 2: Boolean
//Resumen: Añade la cantidad al precio total, si es TRUE suma y si es FALSE resta.
//Devuelve: Nada - Modifica el precio total.
function calculaPrecio(cantidad, boolean){
  var dinero = $('strong').text();
  if(boolean){
    dinero = parseInt(dinero.substring(1)) + cantidad;
  }else{
    dinero = parseInt(dinero.substring(1)) - cantidad;
  }
    dinero = "$" + dinero;
  $('strong').text(dinero);
}
