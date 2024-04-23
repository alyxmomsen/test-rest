const { mw } = require('../middleware');

const router = require('express').Router() ;

const port = process.env.PORT || 3001 ;

router.get('/home' , mw , async (req , res) => {
    res.status(200).json({
        message:`hello from my server , on ${port}` ,
        port , 
    });
});

router.get('/' ,
    mw ,
    async (req , res) => {
        res.status(200).json({
            message:`hello from my server , on ${port}` ,
            port , 
        });
    }
)

module.exports = router ;