$( document ).ready(function() {
	
	$("#datepicker").datepicker();
	
	jQuery.fn.clickToggle = function(a,b) {
  		function cb(){ [b,a][this._tog^=1].call(this);}
  		return this.on("click", cb);
	};
	
	$(".open_slidein").clickToggle(function(){
		$('html, body').animate({
    		scrollTop: ($('#slideout').offset().top)
		},500);
		$(".form_slidein").addClass('slidein');
		$(".form_slidein").removeClass('slideout');
		$(".circle").addClass('left');
	},function() {
		$(".form_slidein").addClass('slideout');
		$(".form_slidein").removeClass('slidein');
		$(".circle").removeClass('left');
	});
	
$( window ).resize(function() {
  	$(".form_slidein").removeClass('slideout');
});
	
});


$(function() {
  $("form[name='registration']").validate({
    rules: {
    firstname: "required",
    email: {
        required: true,
        email: true
    },
	datepicker: "required",
	mobile: {
        required: true,
        number: true,
		minlength: 10
    },
	id: {
        required: true,
        number: true
    },
    },
    messages: {
      	firstname: "Please enter your firstname",
      	email: "Please enter a valid email address",
		datepicker: "Please select your date of birth",
		mobile: "Please enter your mobile number",
		id: "Please enter your id number"
    },
    submitHandler: function(form) {
      	form.submit();
    },
	errorPlacement: function ($error, $element) {
        var name = $element.attr("name");
        $("#error" + name).append($error);
    },
	highlight: function ( element, errorClass, validClass ) {
        $( element )
            .parents( ".form__item" )
            .addClass( "field-error" );
    },
    unhighlight: function (element, errorClass, validClass) {
        $( element )
            .parents( ".form__item" )
            .addClass( "field-error" )
            .removeClass( "field-error" );
    }  
  });
});