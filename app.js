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
app.get('/v1',
  (req, res) => {
    res.sendFile(path.join(`${__dirname}/web/game_v1.html`));
  }
);
app.post('/v1',
  (req, res) => {
    res.sendFile(path.join(`${__dirname}/web/game_v1.html`));
  }
);


app.get('/v2',
  (req, res) => {
    res.sendFile(path.join(`${__dirname}/web/game_v2.html`));
  }
);
app.post('/v2',
  (req, res) => {
    res.sendFile(path.join(`${__dirname}/web/game_v2.html`));
  }
);

app.get('/v3',
  (req, res) => {
    res.sendFile(path.join(`${__dirname}/web/game_v3.html`));
  }
);
app.post('/v3',
  (req, res) => {
    res.sendFile(path.join(`${__dirname}/web/game_v3.html`));
  }
);


app.get('/v4',
  (req, res) => {
    res.sendFile(path.join(`${__dirname}/web/game_v4.html`));
  }
);
app.post('/v4',
  (req, res) => {
    res.sendFile(path.join(`${__dirname}/web/game_v4.html`));
  }
);



app.listen(listenPort, function () {
  console.log('no-show-client-association listening on port '+ listenPort);
});
