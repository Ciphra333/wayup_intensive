// var name = 'Александр';
// var surname = 'Хромин';
// var age = 22;

// var c = false;
// var d = 5;

// a = 456;

// a = prompt ('Напишите значение перемееной a')


// if (a == 37) {
//     alert('a = 37');
// } else {
//     alert ("Что-то другое");
// }

// var obj = {
//     'key': 'value',
//     'key': 'value',
//     'key': 'value',
//     'key': 'value'
// }

// var user = {
//     'name': 'Александр',
//     'surname': 'Хромин',
//     'age': 22
// }

// alert  ( user.surname );

// var mas = ['Александр', 'Хромин', 25];

// // alert(mas[2]);

// function doMagick (a,b) {
//     alert (a + b);
// }

// doMagick(5,5);


var btn = document.getElementById('btn');
btn.onclick = function () {
   var text = document.querySelector('p.intro');
   text.classList.add('red');
   var img = document.querySelector('.desktop');
   img.style.display = 'none';
   document.querySelector('.skill-create').style.marginLeft = '50px';
}

$(function () {
	$(window).scroll(function() {
	    $('#learn .section-title').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInLeft");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.skill').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInUp");
	        }
	    });
	});
})