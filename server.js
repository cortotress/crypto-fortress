const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('accueil.ejs');
});  

const server = app.listen(7000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});
  