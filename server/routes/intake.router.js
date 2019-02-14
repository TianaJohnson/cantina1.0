const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

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
        .catch((error) => {
            console.log('Something went wrong in post', error);
            
            res.sendStatus(500);;
        });
});

router.get('/', (req, res) => {
    console.log('in GET ')
    if (req.isAuthenticated()) {
        console.log('req.user:', req.user);
        pool.query(`SELECT * FROM "customer_info";`)
            .then(results => {
                console.log(results.rows)
                res.send(results.rows)
            })
            .catch(error => {
                console.log('Error making SELECT for customer info database:', error);
                res.sendStatus(500);
            });
    } else {
      // They are not authenticated.
      res.sendStatus(403);
    }
  });

module.exports = router;