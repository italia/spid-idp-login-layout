$(window).load(function () {

	/* Gestione della tastiera virtuale su dispositivi mobili che occultano lo show dei campi di input */
	var $FixedSmall = $('.FixedSmall');
	$('.Form-input').focusin(function() {
	  $FixedSmall.addClass('off');
	});
	$('.Form-input').focusout(function() {
	  $FixedSmall.removeClass('off');
	});

	/* INDEX PAGE */
	$('.Button--welcome, .Button--welcome-close').on('click', function(e) {
		e.preventDefault();
		var showtarget = $(this).data('showtarget');
		var $showtarget = $(showtarget);
		var $body = $('body');
		var $buttonwelcome = $('.Button--welcome');
		var $spidanimation = $('#spid-animation');

		
		
		if ($showtarget.is(':visible')) {
			$buttonwelcome.fadeIn('fast');
			$showtarget.fadeOut('fast');
			
		} else {
			$buttonwelcome.fadeOut('fast');
			$spidanimation.addClass('runAnimation');
			$body.removeClass('blockScroll');
			$showtarget.fadeIn('slow');
		}

		/*		
		if ( $showtarget.hasClass('u-hidden') || $showtarget.hasClass('slideOutRight') ) {
			$body.addClass('blockScroll');
			$showtarget.removeClass('u-hidden');
			$showtarget.removeClass('slideOutRight');
			$showtarget.addClass('slideInRight');
		} else {
			$body.removeClass('blockScroll');
			$showtarget.addClass('slideOutRight');
			$showtarget.removeClass('slideInRight');
		}
		*/


	});

	/* validatore minimo per form */
	function minValidator($inputs) {

		var allValid = true;

		$inputs.each(function() {
	        var elem = $(this)[0];
	        var $elem = $(this);
	        if (typeof elem.willValidate !== "undefined") {
	            if (elem.checkValidity()==true) {
	                $elem.removeClass('error');
	                allValid = allValid==false ? false : true;
	            } else {
	                $elem.addClass('error');
	                allValid = allValid==true ? false : false;
	            }
	        } else {
	        	return allValid;
	        }
	    });

		return allValid;

	}

	/* Listner click al submit utile per intercettare vampi non validi e mostrare icone */
	$('form button[type="submit"] ').on('click',function(event) {
	    var $inputs = $('.Form-input');

	    minValidator($inputs);
	    
	});
	
	/* Listner all'uscita dal campo di input per gestire il disabling del bottone submit */
	$('.Form-input').focusout(function() {
	  var $inputs = $('.Form-input');
	  if (minValidator($inputs)==true) {
	  	$('form button[type="submit"]').removeAttr('disabled');
	  };
	});

	/* Animazione input */
	$(function() {
		var formAnimatedInput = $('.form-animate-fields .Form-input');

		formAnimatedInput.each(function() {
		var $this = $(this);

		$this.on('focus', function() {
		  $this.addClass('is-filled');
		});

		$this.on('blur', function() {
		  if($this.val().length == 0) {
		    $this.removeClass('is-filled');
		  }
		});
	});
	});
});

