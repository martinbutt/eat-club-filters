chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.message === "filterPage") {
      gfArray = $('span[data-content="'+request.type+'"]').closest('.ec-menu-item');
      allArray = $('.ec-menu-item');

      remArray = $.grep(allArray, function(value) {
        return $.inArray(value, gfArray) < 0;
      });

      $.each(remArray, function( index, value ) {
	$(value).hide();
      });
    } else if(request.message === "clearFilters") {
      $('.ec-menu-item').show();
    }
  }
);
