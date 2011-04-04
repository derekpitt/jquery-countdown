/* quick countdown plugin for jquery
 * by: derek pittsinger
 *
 * usage: $("#powpow").countdown([number of seconds], [callback of what you want to do when it hits 0]);
 */


(function($){
	$.fn.countdown = function(seconds, callback) {
		var time_left = seconds;
		var that = this;

		var do_time = function() {
			// just a quick private function to help with the display of the clock
			var seconds_to_min_sec = function(seconds) {
				var mins = Math.floor(seconds / 60.0);
				var secs = seconds % 60;
				return mins + ':' + (secs < 10 ? '0' : '') + secs;
			};
			

			that.each(function() {
				// this sets the text inside of the matched elements to a min:sec format of the time left
				$(this).html(seconds_to_min_sec(time_left));
			});

			if (time_left > 0) {
				time_left--;
				setTimeout(do_time, 1000);
			} else {
				// pow pow!
				callback.apply(that);
			}
		};
		do_time();


		// guess i'll make it chainable..
		return that;
	};
})(jQuery);
