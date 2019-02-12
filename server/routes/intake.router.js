const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


/**
 * GET route template
 */
router.get('/', (req, res) => {
    
});

/**
 * POST route template
 */
router.post('/', (req, res, next) => {
    console.log(req.body);
    const queryText = `INSERT INTO "customer_info"
                     ("customers_full_name", 
                      "pro_nouns", 
                      "email",
                      "phone_number", 
                      "customer_notes") 
                      VALUES ($1, $2, $3, $4, $5);`;
    pool.query(queryText, [req.body.customers_full_name,
                           req.body.pro_nouns,
                           req.body.email,
                           req.body.phone_number,
                           req.body.customer_notes])
        .then(() => {
            console.log( 'server side Post');
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log('Something went wrong in post', error);
            
            res.sendStatus(500);;
        });
});

module.exports = router;