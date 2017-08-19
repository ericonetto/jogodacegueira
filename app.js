var express = require('express');
var request = require('request');
const path = require('path');
var Storage = require('node-storage');
var bodyParser = require('body-parser')



var app = express();
var listenPort =80;


app.use(express.static(path.join(`${__dirname}/web`)));
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));




/* ------------------
 * --    Routes  root  --
 * ------------------ */

// App will serve up different pages for client & desktop
app.get('/',
  (req, res) => {
    res.sendFile(path.join(`${__dirname}/web/game.html`));
  }
);
app.post('/',
  (req, res) => {
    res.sendFile(path.join(`${__dirname}/web/game.html`));
  }
);






app.listen(listenPort, function () {
  console.log('no-show-client-association listening on port '+ listenPort);
});
