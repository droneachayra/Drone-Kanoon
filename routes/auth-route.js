const router = require("express").Router();

const User = require('../models/user');


router.post('/register', (req, res) => {

            //res.json("register work")
            const user = new User({

                name: req.body.name,
                email: req.body.email,
                phone :req.body.phone,
                service:req.body.service,
            }).save()
                .then((_) => {
                    res.json({ succses: true, message: "AHAHAHAHA" })
                })
        
    
})

module.exports = router