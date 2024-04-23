const { mw } = require('../middleware');

const router = require('express').Router() ;

router.get('/' ,
    mw ,
    async (req , res) => {
        res.status(200).send(`hello from my server , on ${process.env.PORT}`);
    }
)

module.exports = router ;