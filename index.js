const app = require('express')();
require('dotenv').config();

require('dotenv').config();

const port = process.env.PORT || 3001 ;

app.listen( port  , () => {
    console.log('u app runing on port');
});

const mw = async (req , res , next) => {
    console.log('this is my middleware');
    next();
}

app.get('/' ,
    async (req , res) => {
        console.log('you knock knock to my route' , port );
        res.status(200).send(`hello from my server , on ${port}`);
    }
)