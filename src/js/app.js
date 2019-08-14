// ----------- Navigation example 1 -----------

$(document).ready(function() {
	$('.nav-button-1').on('click', function() {
		$('.nav').toggleClass('hidden active');
			
			setTimeout(function() {
				$('.nav-image-section').toggleClass('background-fade-1');
			}, 800);

			setTimeout(function() {
				$('.nav-detail>ul li').each(function(i) {
				  $(this).delay(800 * i).animate({'opacity': 1}, 1000);
				});
			}, 1200);

			setTimeout(function() {
				$('.nav-contact').show();
			}, 4000);

			$('.nav-detail>ul>li').hover(function() {
				$('.nav-image').removeClass('active');
				if($(this).hasClass('profile')) {
					$('.nav-image.profile-image').addClass('active');
				} else if ($(this).hasClass('work')) {
					$('.nav-image.work-image').addClass('active');
				} else if ($(this).hasClass('insights')) {
					$('.nav-image.insights-image').addClass('active');
				} else {
					$('.nav-image.talk-image').addClass('active');
				}
			});

			$('.nav-button-1').toggleClass('rotate-button text-black text-white');

			$('.title').toggleClass('hide-title');

			if(!$('nav').hasClass('active')) {
				$('.nav-image').removeClass('active');
			}
	});
});



// ----------- Navigation example 2 -----------

$('.nav-button-2').click(function() {
	$('.nav-detail-2').addClass('nav-detail-2--start');
	$('.nav-2').toggleClass('active');
	$('.page').toggleClass('title-opacity');
	$('.navigation-2').toggleClass('nav-detail-2--open');

	setTimeout(function() {
		$('.nav-detail-2 ul').toggleClass('hidden');
		$('.nav-detail-2 ul').css('margin-top', '400px');
		$('.nav-detail-2 ul li').each(function(i) {
		   $(this).delay(1000 * i).animate({'opacity': 1}, 2000);
		});
	}, 1500);

	$('.nav-button-2').toggleClass('text-black text-white rotate-button');
});



// ----------- Navigation example 3 -----------

$('.nav-button-3').click(function() {
	$('.nav-3').toggleClass('active');
	$('.page').toggleClass('title-opacity');
	$('.nav-detail-3').addClass('nav-detail-3--start');
	$('.navigation-3').toggleClass('nav-detail-3--open');

	$('.nav-bottom-3').addClass('nav-bottom-3--start');
	$('.nav-bottom-3').toggleClass('nav-bottom-3--open');

	$('.nav-detail-3 ul .nav-3-image-1').hover(function() {
		$('.nav-3-image-1').toggleClass('profile-image-3');
	});
	$('.nav-detail-3 ul .nav-3-image-2').hover(function() {
		$('.nav-3-image-2').toggleClass('work-image-3');
	});
	$('.nav-detail-3 ul .nav-3-image-3').hover(function() {
		$('.nav-3-image-3').toggleClass('insights-image-3');
	});
	$('.nav-detail-3 ul .nav-3-image-4').hover(function() {
		$('.nav-3-image-4').toggleClass('talk-image-3');
	});

	setTimeout(function() {
		$('.nav-detail-3 ul').fadeIn(800);
		$('.nav-detail-3 ul li').each(function(i) {
		   $(this).delay(800 * i).animate({'opacity': 1}, 1500);
		});
	}, 1200);

	setTimeout(function() {
		$('.nav-contact-3').fadeIn(100);
	}, 4100);

	$('.nav-button-3').toggleClass('rotate-button');

	setTimeout(function() {
		var innerDiv = $('.hover-title-1');
		var outerDiv = $('.hover-container-1');
		var outDim = outerDiv.offset();
		console.log(outDim);
		outDim.right = (outDim.left + outerDiv.width());
		outDim.bottom = (outDim.top + outerDiv.height());
		$(outerDiv).on('mousemove', function(e) {
		  var x = (e.clientX) - 120;
		  var y = (e.clientY) - 45;
		  var x_allowed = x >= outDim.left && x <= (outDim.right - innerDiv.width());
		  var y_allowed = y >= outDim.top && y <= (outDim.bottom - innerDiv.height());
		  if (y_allowed) {
		    innerDiv.css({
		      top: y + 'px',
		    });
		  } else {
		    if (y >= outDim.top) {
		      innerDiv.css({
		        top: (outDim.bottom - innerDiv.height()) + 'px',
		      });
		    }
		    if (y <= (outDim.bottom - innerDiv.height())) {
		      innerDiv.css({
		        top: outDim.top + 'px',
		      });
		    }
		  }
		  if (x_allowed) {
		    innerDiv.css({
		      left: x + 'px'
		    });
		  } else {
		    if (x >= outDim.left) {
		      innerDiv.css({
		        left: outDim.right - innerDiv.width() + 'px',
		      });
		    }
		    if (x <= (outDim.right - innerDiv.width())) {
		      innerDiv.css({
		        left: outDim.left + 'px',
		      });
		    }
		  }
		});
	}, 4300);

	setTimeout(function() {
		var innerDiv = $('.hover-title-2');
		var outerDiv = $('.hover-container-2');
		var outDim = outerDiv.offset();
		outDim.right = (outDim.left + outerDiv.width());
		outDim.bottom = (outDim.top + outerDiv.height());
		$(outerDiv).on('mousemove', function(e) {
		  var x = (e.clientX) - 120;
		  var y = (e.clientY) - 45;
		  var x_allowed = x >= outDim.left && x <= (outDim.right - innerDiv.width());
		  var y_allowed = y >= outDim.top && y <= (outDim.bottom - innerDiv.height());
		  if (y_allowed) {
		    innerDiv.css({
		      top: y + 'px',
		    });
		  } else {
		    if (y >= outDim.top) {
		      innerDiv.css({
		        top: (outDim.bottom - innerDiv.height()) + 'px',
		      });
		    }
		    if (y <= (outDim.bottom - innerDiv.height())) {
		      innerDiv.css({
		        top: outDim.top + 'px',
		      });
		    }
		  }
		  if (x_allowed) {
		    innerDiv.css({
		      left: x + 'px'
		    });
		  } else {
		    if (x >= outDim.left) {
		      innerDiv.css({
		        left: outDim.right - innerDiv.width() + 'px',
		      });
		    }
		    if (x <= (outDim.right - innerDiv.width())) {
		      innerDiv.css({
		        left: outDim.left + 'px',
		      });
		    }
		  }
		});
	}, 4300);

	setTimeout(function() {
		var innerDiv = $('.hover-title-3');
		var outerDiv = $('.hover-container-3');
		var outDim = outerDiv.offset();
		outDim.right = (outDim.left + outerDiv.width());
		outDim.bottom = (outDim.top + outerDiv.height());
		$(outerDiv).on('mousemove', function(e) {
		  var x = (e.clientX) - 120;
		  var y = (e.clientY) - 45;
		  var x_allowed = x >= outDim.left && x <= (outDim.right - innerDiv.width());
		  var y_allowed = y >= outDim.top && y <= (outDim.bottom - innerDiv.height());
		  if (y_allowed) {
		    innerDiv.css({
		      top: y + 'px',
		    });
		  } else {
		    if (y >= outDim.top) {
		      innerDiv.css({
		        top: (outDim.bottom - innerDiv.height()) + 'px',
		      });
		    }
		    if (y <= (outDim.bottom - innerDiv.height())) {
		      innerDiv.css({
		        top: outDim.top + 'px',
		      });
		    }
		  }
		  if (x_allowed) {
		    innerDiv.css({
		      left: x + 'px'
		    });
		  } else {
		    if (x >= outDim.left) {
		      innerDiv.css({
		        left: outDim.right - innerDiv.width() + 'px',
		      });
		    }
		    if (x <= (outDim.right - innerDiv.width())) {
		      innerDiv.css({
		        left: outDim.left + 'px',
		      });
		    }
		  }
		});
	}, 4300);

	setTimeout(function() {
		var innerDiv = $('.hover-title-4');
		var outerDiv = $('.hover-container-4');
		var outDim = outerDiv.offset();
		outDim.right = (outDim.left + outerDiv.width());
		outDim.bottom = (outDim.top + outerDiv.height());
		$(outerDiv).on('mousemove', function(e) {
		  var x = (e.clientX) - 90;
		  var y = (e.clientY) - 45;
		  var x_allowed = x >= outDim.left && x <= (outDim.right - innerDiv.width());
		  var y_allowed = y >= outDim.top && y <= (outDim.bottom - innerDiv.height());
		  if (y_allowed) {
		    innerDiv.css({
		      top: y + 'px',
		    });
		  } else {
		    if (y >= outDim.top) {
		      innerDiv.css({
		        top: (outDim.bottom - innerDiv.height()) + 'px',
		      });
		    }
		    if (y <= (outDim.bottom - innerDiv.height())) {
		      innerDiv.css({
		        top: outDim.top + 'px',
		      });
		    }
		  }
		  if (x_allowed) {
		    innerDiv.css({
		      left: x + 'px'
		    });
		  } else {
		    if (x >= outDim.left) {
		      innerDiv.css({
		        left: outDim.right - innerDiv.width() + 'px',
		      });
		    }
		    if (x <= (outDim.right - innerDiv.width())) {
		      innerDiv.css({
		        left: outDim.left + 'px',
		      });
		    }
		  }
		});
	}, 4300);

	if(!$('.nav-3').hasClass('active')) {
		setTimeout(function() {
			$('.navigation-3').removeClass('nav-detail-3--start');
			$('.navigation-3').removeClass('nav-detail-3--start');
		}, 1400);
	}

});