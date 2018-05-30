$(document).ready(function() {
	$(document).on('click', '.top-menu a, .bottom-menu a', function(e) {
		e.preventDefault();

		var id = $(e.target).attr('href');
		var top = $(id).offset().top;

		$('html').animate({scrollTop: (top - 90)}, 500);
	});
	$(document).on('click', '.moto-info-about-content nav a', function(e) {
		e.preventDefault();

		var id = $(this).parents('div').get(3).id;
		var href = $(this).attr('href').substring('#'.length);

		if(href == 'price') {
			$('#' + id + ' .moto-info-about-content-price').css({'display': 'block'});
			$('#' + id + ' .moto-info-about-content-characteristic').css({'display': 'none'});
		}
		else if(href == 'characteristic') {
			$('#' + id + ' .moto-info-about-content-price').css({'display': 'none'});
			$('#' + id + ' .moto-info-about-content-characteristic').css({'display': 'block'});
		}
		$('.moto-info-about-content nav a').removeClass('active');
		$(this).addClass('active');
	});
	$(document).on('click', '.moto-info-reserve a', function(e) {
		e.preventDefault();

		var id = $(this).parents('div').get(2).id;
		
		var moto_name = $('#' + id).find('.moto-info-title').text();
		var moto_img = $('#' + id).find('.moto-info-img').css('background-image');
			moto_img = moto_img.substring('url("'.length, (moto_img.length - '")'.length));
		
		$('.modal-window .modal-window-dialog-header h2').text(moto_name);
		$('.modal-window .modal-window-dialog-body .moto').attr('src', moto_img);
		$('.modal-window .modal-window-dialog-body #moto').attr('value', moto_name);
		$('.modal-window').css({'display':'block'});
		
		modalPos();

	});

	$(document).on('click', '.modal-window .close', function() {
		$('.modal-window').css({'display':'none'});
	});

	modalPos();
});

$(window).resize(function() {
	modalPos();
});

function modalPos() {
	var d = $('.modal-window .modal-window-bg .modal-window-dialog');
	var h = $(d).height();
	if (h > $(window).height()) {
		$(d).css({
			'min-height': (h-20),
			'max-height': (h-20),
			'top': 0,
			'margin-top': '10px',
		});
		$(d).find('.modal-window-dialog-body').css({
			'overflow': 'scroll',
		});
		$(d).find('img.moto').css({
			'min-width': '0',
			'max-height': '150px',
		});
	}
	else {
		$(d).css({
			'min-height': 'none',
			'max-height': 'none',
			'top': '50%',
			'margin-top': (-h / 2),
		});
		$(d).find('.modal-window-dialog-body').css({
			'overflow': 'hidden',
		});
		$(d).find('img.moto').css({
			'min-width': 'none',
			'max-height': 'none',
		});
	}
}

$(document).ready(function() {
    var overlay = $('#overlay');
    var open_modal = $('.open_modal'); // все ссылки, кoтoрые будут oткрывaть oкнa
    var close = $('.modal_close, #overlay'); // все, чтo зaкрывaет мoдaльнoе oкнo, т.е. крестик и oверлэй-пoдлoжкa
    var modal = $('.modal_div'); // все скрытые мoдaльные oкнa

     open_modal.click( function(event){ // лoвим клик пo ссылке с клaссoм open_modal
         event.preventDefault(); // вырубaем стaндaртнoе пoведение
         var div = $(this).attr('href'); // вoзьмем стрoку с селектoрoм у кликнутoй ссылки
         overlay.fadeIn(400, //пoкaзывaем oверлэй
             function(){ // пoсле oкoнчaния пoкaзывaния oверлэя
                 $(div) // берем стрoку с селектoрoм и делaем из нее jquery oбъект
                     .css('display', 'block') 
                     .animate({opacity: 1, top: '5%'}, 200); // плaвнo пoкaзывaем
         });
     });

     close.click( function(){ // лoвим клик пo крестику или oверлэю
            modal // все мoдaльные oкнa
             .animate({opacity: 0, top: '15%'}, 200, // плaвнo прячем
                 function(){ // пoсле этoгo
                     $(this).css('display', 'none');
                     overlay.fadeOut(400); // прячем пoдлoжку
                 }
             );
     });
});