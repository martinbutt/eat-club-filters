function sendClicks(type) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    if (type === "clearFilters") {
      chrome.tabs.sendMessage(tabs[0].id, {message: "clearFilters"});
    } else {
      chrome.tabs.sendMessage(tabs[0].id, {message: "filterPage", type: type});
    }
  });
}

document.addEventListener("DOMContentLoaded", function(event) { 
  document.getElementById("dairyFree").addEventListener("click", function() {
    sendClicks("Dairy Free");
  }, false);
  document.getElementById("glutenFree").addEventListener("click", function() {
    sendClicks("Gluten Free");
  }, false);
  document.getElementById("paleo").addEventListener("click", function() {
    sendClicks("Paleo");
  }, false);
  document.getElementById("spicy").addEventListener("click", function() {
    sendClicks("Spicy");
  }, false);
  document.getElementById("vegan").addEventListener("click", function() {
    sendClicks("Vegan");
  }, false);
  document.getElementById("vegetarian").addEventListener("click", function() {
    sendClicks("Vegetarian");
  }, false);
  document.getElementById("clearFilters").addEventListener("click", function() {
    sendClicks("clearFilters");
  }, false);

  $("button").click(function() {
    $(this).addClass("active")
  });

  $("button#clearFilters").click(function() {
    $("button").removeClass("active")
  });
}, false);


