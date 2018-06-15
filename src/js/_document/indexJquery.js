

/**
 * @description Document DOM ready.
 */
$(document).ready((ev) => {
  /**
   *
   * @type {*|jQuery|HTMLElement}
   * @private
   */
  const _document = $(document),
    _window = $(window);


  /**
   * @description Method call for execution
   */
  // svg4everybody();

  $("[hamburger-js]").on("click", function(e) {
    $(this).toggleClass("is-active");
  });

  $("[infoMessage-js]").on("click", function(e) {
    $(this).closest(".infoMessage").addClass("is-hide");
    // mb need to add to localStorage to cookie bool variable
    // ...
  });
});

