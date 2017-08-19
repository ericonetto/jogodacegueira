var express = require('express');
var request = require('request');
const path = require('path');
var Storage = require('node-storage');
var bodyParser = require('body-parser')



var app = express();
var listenPort =3000;


app.use(express.static(path.join(`${__dirname}/web`)));
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));





var store = new Storage(path.join(`${__dirname}/web/data/storage.txt`));


/* ------------------
 * --    Routes  getfromplatform  --
 * ------------------ */

// App will serve up different pages for client & desktop
app.get('/getfromplatform',
  (req, res) => {
    res.sendFile(path.join(`${__dirname}/web/getfromplatform.html`));
      // res.render(`../client/index.html`);

  }
);
app.post('/getfromplatform',
  (req, res) => {
    //res.render(`${__dirname}/web/tapmobile`, { error: null });
    res.send('no-show-client-association');
  }
);


/* ------------------
 * --    Routes  root  --
 * ------------------ */

// App will serve up different pages for client & desktop
app.get('/',
  (req, res) => {
    res.sendFile(path.join(`${__dirname}/web/setapplication.html`));
  }
);
app.post('/',
  (req, res) => {
    res.sendFile(path.join(`${__dirname}/web/setapplication.html`));
  }
);
// App will serve up different pages for client & desktop
app.get('/application',
  (req, res) => {
    res.send({application:store.get('application')});
  }
);
app.post('/application',
  (req, res) => {
    store.put('application',  req.body.clientName);
    res.send({"code": "200","message": "OK"});
  }
);






app.listen(listenPort, function () {
  console.log('no-show-client-association listening on port '+ listenPort);
});
