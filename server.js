const express = require('express');
const os = require('os');

const app = express();

app.use(express.static('dist'));
/*app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
*/
app.get('/', (req, res) => {
    res.render('App');
});

app.listen(5000, () => console.log('Listening on port 5000!'));


