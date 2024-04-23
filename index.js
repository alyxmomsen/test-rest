const { mw } = require('./middleware');
const router = require('./routes');

const app = require('express')();
require('dotenv').config();
require('dotenv').config();
const port = process.env.PORT || 3001 ;

app.use(router);

app.listen( port , () => {
    console.log('u app runing on port');
});