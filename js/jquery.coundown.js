// CountDown Clock (English Version)
// Cleaned + Improved

(function ($) {
  $.fn.countdown = function (options, callback) {

    var settings = $.extend({
      date: null,
      offset: 0,

      day: 'Day',
      days: 'Days',
      hour: 'Hour',
      hours: 'Hours',
      minute: 'Minute',
      minutes: 'Minutes',
      second: 'Second',
      seconds: 'Seconds'
    }, options);

    // Error handling
    if (!settings.date) {
      $.error('Date is not defined.');
    }

    if (!Date.parse(settings.date)) {
      $.error('Incorrect date format. Use MM/DD/YYYY HH:MM:SS');
    }

    var container = this;

    // Get current time with timezone offset
    var currentDate = function () {
      var date = new Date();
      var utc = date.getTime() + (date.getTimezoneOffset() * 60000);
      return new Date(utc + (3600000 * settings.offset));
    };

    function countdown () {

      var target_date = new Date(settings.date);
      var current_date = currentDate();

      var difference = target_date - current_date;

      if (difference < 0) {
        clearInterval(interval);
        if (callback && typeof callback === 'function') callback();
        return;
      }

      var _second = 1000,
          _minute = _second * 60,
          _hour = _minute * 60,
          _day = _hour * 24;

      var days = Math.floor(difference / _day);
      var hours = Math.floor((difference % _day) / _hour);
      var minutes = Math.floor((difference % _hour) / _minute);
      var seconds = Math.floor((difference % _minute) / _second);

      // Proper plural handling
      var text_days = (days === 1) ? settings.day : settings.days;
      var text_hours = (hours === 1) ? settings.hour : settings.hours;
      var text_minutes = (minutes === 1) ? settings.minute : settings.minutes;
      var text_seconds = (seconds === 1) ? settings.second : settings.seconds;

      // Format to 2 digits
      days = String(days).padStart(2, '0');
      hours = String(hours).padStart(2, '0');
      minutes = String(minutes).padStart(2, '0');
      seconds = String(seconds).padStart(2, '0');

      // Update DOM
      container.find('.days').text(days);
      container.find('.hours').text(hours);
      container.find('.minutes').text(minutes);
      container.find('.seconds').text(seconds);

      container.find('.days_text').text(text_days);
      container.find('.hours_text').text(text_hours);
      container.find('.minutes_text').text(text_minutes);
      container.find('.seconds_text').text(text_seconds);
    }

    var interval = setInterval(countdown, 1000);
  };

})(jQuery);