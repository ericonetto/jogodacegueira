function getApplication(successCallBack, failCallBack) {
  var settings = {
    "url": "/application",
    "method": "GET",
    "headers": {
      "content-type": "application/x-www-form-urlencoded"
    }
  }
  $.ajax(settings).done(successCallBack)
  $.ajax(settings).error(failCallBack);
}
