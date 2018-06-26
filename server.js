const express = require('express');
const os = require('os');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000

app.use(express.static('dist'));
app.use(express.static(path.join(__dirname, 'public')));
/*app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
*/
app.get('/', (req, res) => {
    res.render('index.html');
});

app.get('/ping', (req, res) => {
    res.send('pong');
});


app.listen(port, () => console.log('Listening on port 5000!'));


