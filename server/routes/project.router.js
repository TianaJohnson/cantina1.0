const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// router.post('/', (req, res, next) => {
//     console.log(req.user.id);
//     // const queryText = `INSERT INTO "project"
//     //                  ("customer_name"
//     //                   "project_name"
//     //                   "brand"
//     //                   "deep_custom"
//     //                   "project_desc"
//     //                   "cust_height"
//     //                   "cust_inseam"
//     //                   "cust_torso"
//     //                   "cust_flex"
//     //                   "cust_reach"
//     //                   "head_tube"
//     //                   "steerer_tube"
//     //                   "down_tube"
//     //                   "seat_tube"
//     //                   "bottom_bracket"
//     //                   "seat_stays"
//     //                   "chain_stays"
//     //                   "drop_outs"
//     //                   "brake_type"
//     //                   "wheel_size"
//     //                   "tire_clearance"
//     //                   "client_id"
//     //                   VALUES ($1, $2, $3, $4, $5, $6, $7,
//     //                           $8, $9, $10, $11, $12, $13, $14,
//     //                           $15, $16, $17, $18, $19, $20,
//     //                           $21, $22, $23);`;
//     pool.query(queryText, [req.body.customers_full_name,
//                            req.body.pro_nouns,
//                            req.body.email,
//                            req.body.phone_number,
//                            req.body.customer_notes
//                         //    req.user.id])
//         .then(() => {
//             console.log( 'server side project Post');
//             res.sendStatus(201);
//         })
//         .catch((error) => {
//             console.log('Something went wrong in project post', error);
            
//             res.sendStatus(500);;
//         });
// });

module.exports = router;