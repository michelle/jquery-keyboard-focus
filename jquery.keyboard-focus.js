(function($) {
  // This needs to be `true` when we start, to catch the first keydown.
  var lastKeyPress = true;
  $(document).on('keydown.keyboardFocusGlobal', function(e) {
    lastKeyPress = true;
  });
  $(document).on('mousedown.keyboardFocusGlobal', function(e) {
    lastKeyPress = false;
  });

  $.keyboardFocus = function(classNameMappings) {
    if (!classNameMappings) {
      throw new Error('Please pass a mapping of selectors to focus class names to `keyboardFocus`.');
    }

    for (var elementClass in classNameMappings) {
      if (classNameMappings.hasOwnProperty(elementClass)) {
        bindKeyboardFocusEvents($(document), elementClass, classNameMappings[elementClass]);
      }
    }
  };

  $.offKeyboardFocus = function() {
    $(document).off('.keyboardFocus');
  };

  $.fn.keyboardFocus = function(classNames) {
    if (!classNames) {
      throw new Error('Please pass your focus class names into `$(...).keyboardFocus(...)`.');
    }

    bindKeyboardFocusEvents(this, null, classNames);
    return this;
  };

  $.fn.offKeyboardFocus = function() {
    this.off('.keyboardFocus');
  };

  function bindKeyboardFocusEvents($el, elementClass, classNames) {
    classNames = classNames.replace(/\./g, '');
    var $target;

    $el.on('mousedown.keyboardFocus', elementClass, function(e) {
      $(e.target).removeClass(classNames);
    });

    $el.on('focus.keyboardFocus', elementClass, function(e) {
      if (lastKeyPress) {
        $target = $(e.target);
        $target.addClass(classNames);
        $target.trigger('keyboardFocus');
      }
    });
    $el.on('blur.keyboardFocus', elementClass, function(e) {
      // We may have keyboard-focused-in, but we could've mouse-blurred out.
      $target = $(e.target);
      $target.removeClass(classNames);
      if (lastKeyPress) {
        $target.trigger('keyboardBlur');
      }
    });
  }
})(jQuery);
