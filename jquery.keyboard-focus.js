(function($) {
  $.fn.keyboardFocus = function(classNames) {
    if (!classNames) {
      console.warn('Please pass your focus class names into `keyboardFocus`.');
      classNames = '';
    }
    classNames = classNames.replace(/\./g, '');

    var $el = this;
    var $target;
    // This needs to be `true` when we start, to catch the first tab.
    var lastKeyPress = true;

    $el.on('keydown', function(e) {
      lastKeyPress = true;
    });
    $el.on('mousedown', function(e) {
      lastKeyPress = false;
      $el.removeClass(classNames);
    });

    $el.on('focus', function(e) {
      if (lastKeyPress) {
        $target = $(e.target);
        $target.addClass(classNames);
        $target.trigger('keyboardFocus');
      }
    });
    $el.on('blur', function(e) {
      // We may have keyboard-focused-in, but we could've mouse-blurred out.
      $target = $(e.target);
      $target.removeClass(classNames);
      if (lastKeyPress) {
        $target.trigger('keyboardBlur');
      }
    });

    return this;
  };
})(jQuery);
