const express = require('express');
const os = require('os');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000
const bucketName = 'test-bucket-jw-app';
const AWS = require('aws-sdk');
const s3 = new AWS.S3({apiVersion: '2006-03-01'});

app.use(express.static('dist'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
/*app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
*/
app.get('/here', (req, res) => {
    console.log("HEEERRRREEE");
    res.render('index.html');
});

app.get('/ping', (req, res) => {
    res.send('pong');
    console.log("PONG");
});


app.listen(port, () => console.log('Listening on port 5000!'));
// call S3 to list the buckets
app.get('/buckets', (req, res) => {

    s3.listBuckets(function(err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success", data.Buckets);
        res.send(data.Buckets);
      }
    });
});

app.get('/objects', (req, res) => {
    var readParams = {
        Bucket: bucketName,
    };

    s3.listObjects(readParams, function(err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success", data);
        res.send(data);
      }
    });
});



