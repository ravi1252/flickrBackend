var Flickr = require('flickr-sdk');
const express = require('express')
const app = express()
const port = 3000
var flickrObj = new Flickr('6d812fdaa9f16196efe0ba5814f9a4aa');

app.get('/', (req, res) => {
   res.json("server is running");
});
   
app.get('/search', (req,res) => {
   let textVal = req.query.text;
   console.log(textVal);
   console.log("here in hello function"); 
   flickrObj.photos.search({
      text: textVal
    }).then(function (response) {
      console.log('yay!', response.body);
      res.json(response.body);
   }).catch(function (err) {
      console.error('bonk', err);
    })
})  

/*
app.get('/photos', (req,res) => res.json({ 
  "photos":{ 
     "page":1,
     "pages":"1964",
     "perpage":100,
     "total":"196319",
     "photo":[ 
        { 
           "id":"49043453191",
           "owner":"44956664@N02",
           "secret":"5258f862df",
           "server":"65535",
           "farm":66,
           "title":"Peregrine Falcon – 2",
           "ispublic":1,
           "isfriend":0,
           "isfamily":0
        },
        { 
           "id":"49107392792",
           "owner":"163930705@N05",
           "secret":"9dd7b59439",
           "server":"65535",
           "farm":66,
           "title":"Common Raven \/ Hrafn (Corvus corax)",
           "ispublic":1,
           "isfriend":0,
           "isfamily":0
        }
     ]
  },
  "stat":"ok"
}
))*/
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
