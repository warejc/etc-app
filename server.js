const express = require('express');
const os = require('os');
const path = require('path');
const app = express();

app.use(express.static('dist'));
app.use(express.static(path.join(__dirname, 'public')));
/*app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
*/
app.get('/', (req, res) => {
    res.render('index.html');
});


app.listen(5000, () => console.log('Listening on port 5000!'));


