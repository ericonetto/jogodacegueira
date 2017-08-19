
function subscribe(user, pass, successCallBack, failCallBack) {
  if(user=="" ||  pass==""){
    //failCallBack;
    return;
  }
  var server="data.demo.konkerlabs.net";
  var settings = {
    "url": "http://" + server + "/sub/"+ user + "/apl",
    "method": "GET",
    "headers": {
      "authorization": "Basic " + btoa(user + ":" + pass)
    }
  }

  $.ajax(settings).done(successCallBack);
  $.ajax(settings).error(failCallBack);

}
