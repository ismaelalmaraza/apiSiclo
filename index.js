var app = require('./app');
const database = require('./database');
const port = process.env.PORT || 4000


app.listen(port, function() {
    console.log('app listening on port ' + port);
});