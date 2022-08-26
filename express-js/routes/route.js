const express = require("express")
const router = express.Router();

router.
    route('/hasan')
    .get( ( req, res) => {
        res.send("hasan")
    })
    .post( (req, res) => {
        res.json({
            data: "Rabiul Hasan"
        })
    })

module.exports = router;